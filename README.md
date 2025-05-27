# AI Linc Landing Page

## EmailJS Integration Setup

The contact and application forms are configured to send email notifications using EmailJS. The credentials are stored in environment variables for security.

### Environment Variables (.env.local)

Create a `.env.local` file in the root of the project with the following variables:

```
# EmailJS credentials
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID=your_apply_template_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Recipient emails
NEXT_PUBLIC_RECIPIENT_EMAIL_1=first_email@example.com
NEXT_PUBLIC_RECIPIENT_EMAIL_2=second_email@example.com
```

### Current Configuration

The project is configured with the following credentials:
- Service ID: Gmail service (`service_j0i4okv`)
- Apply template: `template_0iuiudv`
- Contact template: `template_asii2eb`
- Recipient emails: `mail.shubhamlal@gmail.com` and `soumicsarkar@gmail.com`

> **Important**: Keep these credentials private. Do not commit the `.env.local` file to your repository.

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