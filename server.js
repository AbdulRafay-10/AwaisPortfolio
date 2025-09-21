const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files with proper MIME types
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.svg')) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filePath.endsWith('.ico')) {
      res.setHeader('Content-Type', 'image/x-icon');
    } else if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    }
  }
}));

// Serve other static files
app.use(express.static('.'));

// Test SVG endpoint
app.get('/test-svg', (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(`
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
  `);
});

// Email configuration with error handling
let transporter;
try {
  transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
} catch (error) {
  console.error('Email configuration error:', error);
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please contact the administrator.'
      });
    }

    const { fullname, email, message } = req.body;

    // Validate required fields
    if (!fullname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Portfolio Inquiry from ${fullname}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
              💼 Portfolio Contact
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
              Someone wants to connect with you!
            </p>
          </div>
          
          <div style="padding: 40px 30px; background: #ffffff;">
            <div style="background: #f8f9ff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 5px solid #667eea;">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">
                👤 Contact Information
              </h2>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #667eea; color: white; padding: 8px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-right: 15px; min-width: 60px; text-align: center;">Name</span>
                  <span style="font-size: 16px; color: #333; font-weight: 500;">${fullname}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="background: #667eea; color: white; padding: 8px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-right: 15px; min-width: 60px; text-align: center;">Email</span>
                  <a href="mailto:${email}" style="font-size: 16px; color: #667eea; font-weight: 500; text-decoration: none;">${email}</a>
                </div>
              </div>
            </div>
            
            <div style="background: #ffffff; padding: 25px; border-radius: 10px; border: 2px solid #f0f0f0;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">
                💬 Message
              </h3>
              <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; line-height: 1.6; font-size: 16px; color: #444;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}?subject=Re: Portfolio Inquiry&body=Hi ${fullname},%0D%0A%0D%0AThank you for reaching out through my portfolio!%0D%0A%0D%0A" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px; display: inline-block;">
                📧 Quick Reply
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              📅 Received on ${new Date().toLocaleString()} via your portfolio contact form
            </p>
            <p style="margin: 5px 0 0 0; color: #adb5bd; font-size: 12px;">
              This email was automatically generated from your portfolio website
            </p>
          </div>
        </div>
      `,
      text: `
        🚀 NEW PORTFOLIO INQUIRY
        
        Contact Information:
        ===================
        Name: ${fullname}
        Email: ${email}
        
        Message:
        ========
        ${message}
        
        📅 Received: ${new Date().toLocaleString()}
        
        ---
        This message was sent from your portfolio contact form.
        Reply directly to this email to respond to ${fullname}.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Contact API is running',
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  });
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Export for Vercel
module.exports = app;