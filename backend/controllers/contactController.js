import contactModel from '../models/contactModel.js';
import transporter from '../config/nodemailer.js';

// =======================
// ✉️ Email Templates
// =======================

const CONTACT_THANK_YOU_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f7f9fc; margin: 0; padding: 0; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .header { background-color: #571930; color: white; padding: 25px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; color: #dcedc1; }
    .content { padding: 25px 20px; }
    .cta { display: inline-block; margin: 25px auto; padding: 12px 25px; background-color: #571930; color: #dcedc1; text-decoration: none; font-weight: 500; border-radius: 6px; }
    .footer { background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 0.8em; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>The Jullay Archive</h1>
    </div>
    <div class="content">
      <p>Hi {{name}},</p>
      <p>Thank you for sharing your thoughts with the <strong>Jullay Archive</strong>. Your reflections have been captured and added to our digital vault.</p>
      <div style="text-align:center;">
        <a href="https://jigmatdorjey.onela.in" class="cta">Explore More</a>
      </div>
      <p>Warm regards,<br><strong>Rhea & the Jullay Team</strong></p>
    </div>
    <div class="footer"><p>This is an automated message. Please do not reply.</p></div>
  </div>
</body>
</html>
`;

const CONTACT_OWNER_NOTIFICATION_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #571930; color: #dcedc1; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .message-box { background-color: #f9f9f9; border-left: 4px solid #571930; padding: 15px; margin: 15px 0; }
    .details { margin-top: 20px; }
    .detail-row { display: flex; margin-bottom: 10px; }
    .detail-label { font-weight: bold; width: 120px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>New Archive Reflection</h1></div>
    <div class="content">
      <div class="details">
        <div class="detail-row"><span class="detail-label">Name:</span><span>{{name}}</span></div>
        <div class="detail-row"><span class="detail-label">Contact Info:</span><span>{{contactInfo}}</span></div>
        <div class="detail-row"><span class="detail-label">Date:</span><span>{{date}}</span></div>
      </div>
      <h3>Message:</h3>
      <div class="message-box">{{message}}</div>
    </div>
  </div>
</body>
</html>
`;

const sendContactEmail = async (req, res) => {
  try {
    const { name, contactInfo, message, chapter } = req.body;
    console.log("------------------------------------------");
    console.log("📬 NEW REFLECTION RECEIVED:");
    console.log(`👤 Name: ${name}`);
    console.log(`📞 Contact: ${contactInfo || 'Not provided'}`);
    console.log(`📖 Chapter: ${chapter || 'Default'}`);
    console.log(`💬 Message: ${message}`);
    console.log("------------------------------------------");

    if (!name || !message) {
      return res.status(400).json({ success: false, message: "Please provide both Name and Message." });
    }

    // Respond immediately
    res.status(200).json({ success: true, message: "Thank you! Your message has been sent successfully." });

    // Background tasks
    const processTask = async () => {
      try {
        const newContact = new contactModel({ name, contactInfo, message, chapter: chapter || 0 });
        await newContact.save();

        const currentDate = new Date().toLocaleString();

        const mailQueue = [];

        // 1. Notification to Admin
        const ownerMail = {
          from: `"Jullay System" <${process.env.SENDER_EMAIL}>`,
          to: process.env.SENDER_EMAIL,
          replyTo: contactInfo && contactInfo.includes('@') ? contactInfo : process.env.SENDER_EMAIL,
          subject: `Jullay Archive: New message from ${name} (Chapter ${chapter || 0})`,
          html: CONTACT_OWNER_NOTIFICATION_TEMPLATE.replace(/{{name}}/g, name)
            .replace(/{{contactInfo}}/g, contactInfo || 'Not provided')
            .replace(/{{message}}/g, message)
            .replace(/{{date}}/g, currentDate)
        };
        mailQueue.push(transporter.sendMail(ownerMail));

        // 2. Thank-you to user (if they provided an email)
        if (contactInfo && contactInfo.includes('@')) {
          const thankYouMail = {
            from: `"Jullay Archive" <${process.env.SENDER_EMAIL}>`,
            to: contactInfo,
            subject: "Thank you for sharing your thoughts!",
            html: CONTACT_THANK_YOU_TEMPLATE.replace(/{{name}}/g, name)
          };
          mailQueue.push(transporter.sendMail(thankYouMail));
        }

        await Promise.all(mailQueue);
        console.log("Database updated and background emails processed.");
      } catch (err) {
        console.error("Background task error:", err);
      }
    };

    processTask();

  } catch (error) {
    console.error("Fatal Error:", error);
    if (!res.headersSent) res.status(500).json({ success: false, message: "Server error." });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await contactModel.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { sendContactEmail, getContacts };
