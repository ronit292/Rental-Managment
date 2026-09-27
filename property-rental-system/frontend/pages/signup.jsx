
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            name,
            email,
            password
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                    >
                        Sign Up
                    </button>
                    <GoogleLogin
    onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
    }}
    onError={() => {
        console.log("Google Login Failed");
    }}
/>   

                </form>
            </div>
        </div>
    );
}

export default Register;

