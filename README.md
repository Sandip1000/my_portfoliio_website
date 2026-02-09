# Portfolio Website with EmailJS Integration

A professional portfolio website for showcasing Machine Learning and Deep Learning projects with integrated contact form using EmailJS.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Home Section**: Personal introduction with profile photo
- **Education Section**: Display your academic background
- **Skills Section**: Showcase ML/DL and technical skills
- **Projects Section**: Highlight your ML/DL projects with links
- **Contact Form**: Integrated with EmailJS to receive feedback via email
- **JSON Storage**: Automatically saves feedback in JSON format

## 📋 Prerequisites

- A GitHub account
- An EmailJS account (free)
- Basic knowledge of Git

## 🚀 EmailJS Setup (Step-by-Step)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. After logging in, go to **Email Services** tab
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select "Gmail"
   - Click "Connect Account"
   - Allow EmailJS to access your Gmail
4. Give your service a name (e.g., "Portfolio Contact")
5. Click **Create Service**
6. **Copy your Service ID** (e.g., `service_abc123`) - you'll need this!

### Step 3: Create Email Template

1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Set up your template with this content:

**Template Name**: Portfolio Contact Form

**Subject**: New Contact from {{from_name}} - {{subject}}

**Content (Body)**:
```
You have received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Timestamp: {{timestamp}}

JSON Format:
{{json_data}}
```

4. In the **To Email** field, enter your email address
5. Click **Save**
6. **Copy your Template ID** (e.g., `template_xyz789`) - you'll need this!

### Step 4: Get Your Public Key (User ID)

1. Go to **Account** → **General**
2. Find your **Public Key** (it looks like `abcDEF123ghiJKL`)
3. **Copy this key** - you'll need it!

### Step 5: Update Your Code

Open `script.js` and replace these three values:

```javascript
// Line 3: Replace with your Public Key
emailjs.init('YOUR_USER_ID');  // Replace with your actual public key

// Line 37-38: Replace with your Service ID and Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

**Example after replacement:**
```javascript
emailjs.init('abcDEF123ghiJKL');

emailjs.send('service_abc123', 'template_xyz789', formData)
```

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript with EmailJS integration
├── README.md           # This file
│
└── images/             # (You need to create this folder)
    ├── profile-photo.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    └── project4.jpg
```

## 🖼️ Adding Your Images

1. Create a folder named `images` in your project root
2. Add your profile photo as `profile-photo.jpg`
3. Add project images as `project1.jpg`, `project2.jpg`, etc.
4. Update image paths in `index.html` if needed

## ✏️ Customizing Your Content

### Update Personal Information

In `index.html`, replace:
- `Your Name` with your actual name
- `Your College Name` with your college
- `Your School Name` with your school
- Email links and social media links
- Education details (CGPA, years, etc.)

### Update Skills

Modify the skills in the Skills Section to match your expertise.

### Update Projects

Replace the project cards with your actual ML/DL projects:
- Project title
- Project description
- Technologies used
- GitHub repository links

## 📤 Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Website**
1. Click **uploading an existing file**
2. Drag and drop all your files (index.html, style.css, script.js, images folder)
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (in left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-5 minutes for deployment

### Step 4: Access Your Website

Your website will be live at: `https://your-username.github.io`

## 📧 How the Contact Form Works

1. **User fills the form** → Enters name, email, subject, and message
2. **Clicks "Send Message"** → Form data is submitted
3. **EmailJS sends email** → You receive an email with the feedback
4. **JSON is stored locally** → Feedback is saved in browser's localStorage
5. **JSON format in email** → The email contains the data in JSON format

### Sample JSON Output in Email

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Great Portfolio!",
  "message": "I loved your ML projects...",
  "timestamp": "2024-02-09T10:30:00.000Z",
  "date": "2/9/2024",
  "time": "10:30:00 AM"
}
```

## 💾 Viewing Saved Feedback

### Method 1: From Browser Console

1. Open your website
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Type: `localStorage.getItem('portfolioFeedback')`
5. Press Enter to see all feedback

### Method 2: Export All Feedback

1. Open Developer Tools Console (F12)
2. Type: `exportAllFeedback()`
3. Press Enter
4. A JSON file will download with all feedback

## 🔧 Troubleshooting

### Form not sending emails?
- Check if you replaced all three IDs in `script.js`
- Verify your EmailJS service is active
- Check browser console (F12) for errors
- Make sure your EmailJS account email is verified

### Images not showing?
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder
- Verify image file formats (.jpg, .png)

### Website not loading on GitHub Pages?
- Wait 5-10 minutes after first deployment
- Check if repository name is exactly `your-username.github.io`
- Verify files are in root directory, not in a subfolder

## 📝 Testing EmailJS Before Deployment

1. Open `index.html` in your browser locally
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox
5. You should receive an email with the feedback

## 🎨 Customization Tips

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #3b82f6;    /* Main color */
    --secondary-color: #1e40af;  /* Hover states */
    --accent: #10b981;           /* Accent color */
}
```

### Add More Sections
Copy any section structure from `index.html` and modify content.

## 📊 Features Explained

### JSON Storage
- Feedback is stored in browser's `localStorage`
- Each submission is added to an array
- Can export all feedback as a single JSON file
- Data persists until browser cache is cleared

### EmailJS Benefits
- Free tier: 200 emails/month
- No backend server needed
- Secure email delivery
- JSON data included in emails
- Easy setup and integration

## 🎓 For Your College Project

This portfolio demonstrates:
- ✅ Responsive web design
- ✅ HTML5, CSS3, JavaScript
- ✅ Third-party API integration (EmailJS)
- ✅ Form handling and validation
- ✅ Data storage (localStorage + JSON)
- ✅ Version control with Git
- ✅ Deployment on GitHub Pages
- ✅ Professional presentation of ML/DL projects

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review EmailJS dashboard for error logs
3. Check browser console for JavaScript errors
4. Verify all IDs are correctly replaced in `script.js`

## 📄 License

This project is free to use for educational and personal purposes.

---

**Good luck with your college project! 🚀**

If you found this helpful, don't forget to star the repository on GitHub!
