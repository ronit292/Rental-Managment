import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check password requirements
        if (password.length < 8) {
            setPasswordError("⚠ Password must be at least 8 characters.");
            return;
        }

        if (!/[A-Za-z]/.test(password)) {
            setPasswordError("⚠ Password must contain at least one letter.");
            return;
        }

        if (!/\d/.test(password)) {
            setPasswordError("⚠ Password must contain at least one number.");
            return;
        }

        if (!/[^A-Za-z\d]/.test(password)) {
            setPasswordError(
                "⚠ Password must contain at least one special character."
            );
            return;
        }

        // Password is valid
        setPasswordError("");

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signup",
                {
                    name,
                    email,
                    password,
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error("Signup error:", error);

            setPasswordError(
                error.response?.data?.message || "⚠ Signup failed."
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                                className={`w-full border rounded px-3 py-2 pr-10 ${
                                    passwordError
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                                required
                            />

                            {passwordError && (
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 font-bold">
                                    !
                                </span>
                            )}
                        </div>

                        {/* Error message */}
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-2">
                                {passwordError}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                    >
                        Sign Up
                    </button>
                    <Link to="/forgot-password" className="text-sm text-red-600 hover:underline" > Forgot password? </Link>
                    

                </form>

            </div>
        </div>
    );
}

export default Register;
