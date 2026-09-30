const nodemailer = require("nodemailer");

const sendPasswordResetEmail = async (email, resetCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD || process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"Rentlify" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Rentlify Password Reset Code",

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 500px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #e5e7eb;
                    border-radius: 10px;
                ">

                    <h2 style="color: #111827;">
                        Reset Your Password
                    </h2>

                    <p style="color: #4b5563;">
                        We received a request to reset your Rentlify password.
                    </p>

                    <p style="color: #4b5563;">
                        Use the verification code below to reset your password:
                    </p>

                    <div style="
                        font-size: 32px;
                        font-weight: bold;
                        letter-spacing: 8px;
                        text-align: center;
                        padding: 20px;
                        margin: 20px 0;
                        background-color: #f3f4f6;
                        border-radius: 8px;
                    ">
                        ${resetCode}
                    </div>

                    <p style="color: #6b7280;">
                        This code will expire in <strong>10 minutes</strong>.
                    </p>

                    <p style="color: #6b7280;">
                        If you did not request a password reset, you can safely
                        ignore this email.
                    </p>

                    <hr style="
                        border: none;
                        border-top: 1px solid #e5e7eb;
                        margin: 25px 0;
                    ">

                    <p style="
                        color: #9ca3af;
                        font-size: 12px;
                        text-align: center;
                    ">
                        © ${new Date().getFullYear()} Rentlify
                    </p>

                </div>
            `
        });

        console.log("Password reset email sent to:", email);

    } catch (error) {
        console.error("Password reset email error:", error);
        throw error;
    }
};

module.exports = sendPasswordResetEmail;