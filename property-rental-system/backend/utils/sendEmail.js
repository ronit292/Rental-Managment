const nodemailer = require("nodemailer");

const buildTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD || process.env.EMAIL_PASS
        }
    });
};

const sendVerificationEmail = async (email, token) => {
    const verificationUrl =
        `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
    const transporter = buildTransporter();

    await transporter.sendMail({
        from: `"Rentlify" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verify your Rentlify account",
        html: `
            <h2>Welcome to Rentlify!</h2>
            <p>Thanks for creating an account.</p>

            <a href="${verificationUrl}">
                Verify Email
            </a>

            <p>This link will expire in 15 minutes.</p>
        `
    });
};

module.exports = sendVerificationEmail;