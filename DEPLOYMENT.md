# Deployment Guide

## GitHub Secrets Setup

To deploy your contact form API, you need to configure GitHub secrets:

### 1. Go to Your Repository Settings
- Navigate to your GitHub repository
- Click on "Settings" tab
- Click on "Secrets and variables" → "Actions"

### 2. Add Required Secrets
Click "New repository secret" and add:

**EMAIL_USER**
- Name: `EMAIL_USER`
- Value: `awais.sf10@gmail.com` (or your email)

**EMAIL_PASS**
- Name: `EMAIL_PASS`
- Value: Your Gmail App Password (not your regular password)

### 3. Get Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → App passwords
3. Generate a password for "Mail"
4. Use this password as `EMAIL_PASS`

### 4. Deploy
- Push your code to main/master branch
- GitHub Actions will automatically deploy
- Your contact form will work with email functionality

## Local Development

1. Create `.env` file (copy from `env.example`)
2. Add your email credentials
3. Run `npm start`
4. Visit `http://localhost:3000`

## Important Notes

- ✅ `.env` file is in `.gitignore` - won't be pushed to GitHub
- ✅ Environment variables are set via GitHub secrets
- ✅ Contact form will work in production
- ✅ Emails will be sent to your configured address
