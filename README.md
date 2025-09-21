# Mystery Code Contact Form API

A simple contact form API that sends form submissions directly to your email using Node.js, Express, and Nodemailer.

## Features

- ✅ Contact form with validation
- ✅ Email notifications sent directly to your inbox
- ✅ Responsive design with loading states
- ✅ Error handling and user feedback
- ✅ CORS enabled for cross-origin requests

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email
Create a `.env` file in the root directory:
```env
EMAIL_USER=awais.sf10@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3000
```

**To get Gmail App Password:**
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate a password for "Mail"
4. Use that password in your `.env` file

### 3. Run the Server
```bash
npm start
```

Visit: `http://localhost:3000`

## API Endpoints

### POST /api/contact
Sends contact form data via email.

**Request Body:**
```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Contact API is running"
}
```

## How It Works

1. User fills out the contact form on your portfolio
2. Form data is sent to `/api/contact` endpoint
3. Server validates the data
4. Email is sent to your configured email address
5. User receives visual feedback (success/error)

## Customization

### Email Template
Edit the email template in `server.js` around line 40-70 to customize the email format.

### Styling
The form uses your existing CSS. The JavaScript adds dynamic classes for loading states and feedback.

### Email Service
Currently configured for Gmail. To use other services, modify the transporter configuration in `server.js`.

## Troubleshooting

### Email Not Sending
- Check your email credentials in `.env`
- Ensure 2FA is enabled and app password is correct
- Check server logs for error messages

### CORS Issues
- The server is configured to allow all origins
- Modify CORS settings in `server.js` if needed

### Port Issues
- Default port is 3000
- Change `PORT` in `.env` if needed
- Ensure port is not already in use

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for sensitive data
- Consider rate limiting for production use
- Validate and sanitize all input data

## Support

For issues or questions, please check the server logs and ensure all dependencies are properly installed.
