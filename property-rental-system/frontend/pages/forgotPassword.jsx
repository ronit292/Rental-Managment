import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState("");
    const [codeError, setCodeError] = useState("");
    const [codeVerified, setCodeVerified] = useState(false);

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetError, setResetError] = useState("");
    const [resetSuccess, setResetSuccess] = useState("");

    // =========================
    // SEND RESET CODE
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/forgot-password",
                {
                    email
                }
            );

            setMessage(response.data.message);
            setCodeSent(true);

        } catch (error) {
            console.error("Forgot password error:", error);

            setError(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        }
    };

    // =========================
    // VERIFY RESET CODE
    // =========================
    const handleVerifyCode = async () => {
        setCodeError("");

        if (code.length !== 6) {
            setCodeError("Please enter the 6-digit reset code.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/verify-reset-code",
                {
                    email,
                    code
                }
            );

            console.log(response.data);

            setCodeVerified(true);

        } catch (error) {
            console.error("Verify code error:", error);

            setCodeError(
                error.response?.data?.message ||
                "Invalid reset code"
            );
        }
    };

    // =========================
    // RESET PASSWORD
    // =========================
    const handleResetPassword = async (e) => {
        e.preventDefault();

        setResetError("");
        setResetSuccess("");

        if (newPassword !== confirmPassword) {
            setResetError("Passwords do not match.");
            return;
        }

        if (newPassword.length < 8) {
            setResetError("Password must be at least 8 characters.");
            return;
        }

        if (!/[A-Za-z]/.test(newPassword)) {
            setResetError("Password must contain at least one letter.");
            return;
        }

        if (!/\d/.test(newPassword)) {
            setResetError("Password must contain at least one number.");
            return;
        }

        if (!/[^A-Za-z\d]/.test(newPassword)) {
            setResetError(
                "Password must contain at least one special character."
            );
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/reset-password",
                {
                    email,
                    code,
                    newPassword
                }
            );

            setResetSuccess(response.data.message);

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {
            console.error("Reset password error:", error);

            setResetError(
                error.response?.data?.message ||
                "Unable to reset password."
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">

                {/* =========================
                    STEP 1: EMAIL
                ========================= */}
                {!codeSent ? (
                    <>
                        <h2 className="text-2xl font-bold mb-2 text-center">
                            Forgot Password?
                        </h2>

                        <p className="text-gray-500 text-center mb-6">
                            Enter your email and we'll send you a reset code.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block mb-1">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                        setMessage("");
                                    }}
                                    className={`w-full border rounded px-3 py-2 ${
                                        error
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    required
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm">
                                    ⚠ {error}
                                </p>
                            )}

                            {message && (
                                <p className="text-green-600 text-sm">
                                    ✓ {message}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                            >
                                Send Reset Code
                            </button>
                        </form>
                    </>
                ) : !codeVerified ? (

                    /* =========================
                       STEP 2: VERIFY CODE
                    ========================= */
                    <>
                        <h2 className="text-2xl font-bold mb-2 text-center">
                            Check Your Email
                        </h2>

                        <p className="text-gray-500 text-center mb-6">
                            We sent a 6-digit reset code to:
                        </p>

                        <p className="text-center font-medium mb-6">
                            {email}
                        </p>

                        <div>
                            <label className="block mb-1">
                                Reset Code
                            </label>

                            <input
                                type="text"
                                maxLength="6"
                                inputMode="numeric"
                                placeholder="Enter 6-digit code"
                                value={code}
                                onChange={(e) => {
                                    const value = e.target.value
                                        .replace(/\D/g, "");

                                    setCode(value);
                                    setCodeError("");
                                }}
                                className={`w-full border rounded px-3 py-2 text-center tracking-widest text-lg ${
                                    codeError
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                            />
                        </div>

                        {codeError && (
                            <p className="text-red-500 text-sm mt-2">
                                ⚠ {codeError}
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={handleVerifyCode}
                            className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-800"
                        >
                            Verify Code
                        </button>
                    </>

                ) : (

                    /* =========================
                       STEP 3: NEW PASSWORD
                    ========================= */
                    <>
                        <h2 className="text-2xl font-bold mb-2 text-center">
                            Create New Password
                        </h2>

                        <p className="text-gray-500 text-center mb-6">
                            Enter a new password for your account.
                        </p>

                        <form
                            onSubmit={handleResetPassword}
                            className="space-y-4"
                        >

                            <div>
                                <label className="block mb-1">
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setResetError("");
                                        setResetSuccess("");
                                    }}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setResetError("");
                                        setResetSuccess("");
                                    }}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            {resetError && (
                                <p className="text-red-500 text-sm">
                                    ⚠ {resetError}
                                </p>
                            )}

                            {resetSuccess && (
                                <p className="text-green-600 text-sm">
                                    ✓ {resetSuccess}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                            >
                                Reset Password
                            </button>

                        </form>
                    </>
                )}

            </div>
        </div>
    );
}

export default ForgotPassword;
