import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="min-h-screen bg-[#F4F1EA] text-[#171717]">

            {/* NAVBAR */}
            <nav className="border-b border-[#171717]/20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                    <div className="h-20 flex items-center justify-between">

                        {/* LOGO */}
                        <Link
                            to="/"
                            className="text-2xl font-black tracking-[-0.06em]"
                        >
                            rentify<span className="text-[#171717]/40">®</span>
                        </Link>

                        {/* LOGIN */}
                        <div className="text-sm">
                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="font-semibold underline underline-offset-4 hover:text-[#555] transition"
                            >
                                Login ↗
                            </Link>
                        </div>

                    </div>

                </div>
            </nav>


            {/* MAIN */}
            <main className="min-h-[calc(100vh-80px)] flex items-center">

                <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10 py-16">

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">


                        {/* LEFT SIDE */}
                        <div className="lg:col-span-7">

                            <p className="text-xs uppercase tracking-[0.25em] text-[#171717]/50 mb-8">
                                Rentify / Get started
                            </p>


                            <h1 className="text-[clamp(4rem,8vw,8rem)] font-black tracking-[-0.075em] leading-[0.82]">

                                Start
                                <br />

                                <span className="italic font-light">
                                    managing.
                                </span>

                            </h1>


                            <div className="mt-12 max-w-md">

                                <p className="text-lg leading-relaxed text-[#171717]/60">
                                    Create your Rentify account and bring your
                                    properties, tenants and rental operations
                                    into one organized workspace.
                                </p>

                            </div>


                            {/* FEATURES */}
                            <div className="mt-14 hidden lg:block">

                                <div className="flex items-center gap-5">

                                    <div className="w-14 h-14 bg-[#D8FF45] flex items-center justify-center text-xl">
                                        +
                                    </div>

                                    <div>

                                        <p className="text-sm font-semibold">
                                            One account.
                                        </p>

                                        <p className="text-sm text-[#171717]/45">
                                            Everything in one place.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-5">

                            <div className="bg-white border border-[#171717]/15 p-7 sm:p-10">

                                {/* FORM HEADER */}
                                <div className="mb-10">

                                    <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/40 mb-3">
                                        New account
                                    </p>

                                    <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                                        Create your account
                                    </h2>

                                </div>


                                {/* FORM */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-7"
                                >

                                    {/* NAME */}
                                    <div>

                                        <label className="block text-sm font-medium mb-3">
                                            Full name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#171717]/25 outline-none focus:border-[#171717] transition placeholder:text-[#171717]/30"
                                            required
                                        />

                                    </div>


                                    {/* EMAIL */}
                                    <div>

                                        <label className="block text-sm font-medium mb-3">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#171717]/25 outline-none focus:border-[#171717] transition placeholder:text-[#171717]/30"
                                            required
                                        />

                                    </div>


                                    {/* PASSWORD */}
                                    <div>

                                        <label className="block text-sm font-medium mb-3">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#171717]/25 outline-none focus:border-[#171717] transition placeholder:text-[#171717]/30"
                                            required
                                        />

                                    </div>


                                    {/* TERMS */}
                                    <div className="flex items-start gap-3 pt-1">

                                        <input
                                            type="checkbox"
                                            required
                                            className="mt-1 w-4 h-4 accent-[#171717]"
                                        />

                                        <p className="text-xs leading-relaxed text-[#171717]/45">
                                            I agree to Rentify's terms and
                                            privacy policy.
                                        </p>

                                    </div>


                                    {/* CREATE BUTTON */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#171717] text-white py-4 font-medium flex items-center justify-center gap-3 hover:bg-[#D8FF45] hover:text-[#171717] transition duration-300"
                                    >
                                        Create account
                                        <span>↗</span>
                                    </button>

                                </form>


                                {/* LOGIN */}
                                <div className="border-t border-[#171717]/15 mt-10 pt-6">

                                    <p className="text-sm text-[#171717]/50">

                                        Already have a Rentify account?

                                        <Link
                                            to="/login"
                                            className="ml-2 text-[#171717] font-semibold underline underline-offset-4"
                                        >
                                            Login
                                        </Link>

                                    </p>

                                </div>

                            </div>


                            {/* BOTTOM TEXT */}
                            <p className="text-xs text-[#171717]/35 mt-5">
                                Your information is securely stored and used
                                only to provide your Rentify account.
                            </p>

                        </div>

                    </div>

                </div>

            </main>


            {/* FOOTER */}
            <footer className="border-t border-[#171717]/20">

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">

                    <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#171717]/40">

                        <p>
                            © 2026 Rentify
                        </p>

                        <p>
                            Property management, simplified.
                        </p>

                    </div>

                </div>

            </footer>

        </div>
    );
}

export default Register;