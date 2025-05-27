# AI Linc Landing Page

## EmailJS Integration Setup

The contact and application forms are configured to send email notifications using EmailJS with the following credentials:

```javascript
const EMAILJS_SERVICE_ID = "service_j0i4okv";      // Gmail service
const EMAILJS_APPLY_TEMPLATE_ID = "template_0iuiudv";  // Apply Now template
const EMAILJS_CONTACT_TEMPLATE_ID = "template_asii2eb"; // Contact Us template
const EMAILJS_PUBLIC_KEY = "X1LrZLvU1cFvgy1Wz";
```

Emails will be sent to:
```javascript
const RECIPIENT_EMAILS = ["mail.shubhamlal@gmail.com", "soumicsarkar@gmail.com"];
```

## Template Variables

### Application Form Template
The EmailJS template uses these variables:
- `{{name}}`
- `{{email}}`
- `{{contactNumber}}`
- `{{graduationYear}}`
- `{{isWorking}}`
- `{{workDomain}}`
- `{{to_emails}}` - The comma-separated list of recipients
- `{{subject}}` - Auto-generated subject line
- `{{submission_date}}` - Timestamp of the submission

### Contact Form Template
The EmailJS template uses these variables:
- `{{name}}`
- `{{email}}`
- `{{contactNumber}}`
- `{{message}}`
- `{{to_emails}}` - The comma-separated list of recipients
- `{{subject}}` - Auto-generated subject line
- `{{submission_date}}` - Timestamp of the submission

## EmailJS Template Example

Here's an example of what your email template HTML might look like:

```html
<h2>New Application Submission</h2>
<p><strong>Date:</strong> {{submission_date}}</p>
<hr>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Contact Number:</strong> {{contactNumber}}</p>
<p><strong>Year of Graduation:</strong> {{graduationYear}}</p>
<p><strong>Currently Working:</strong> {{isWorking}}</p>
<p><strong>Work Domain:</strong> {{workDomain}}</p>
```

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the site.