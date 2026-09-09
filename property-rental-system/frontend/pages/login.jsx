import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
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

                        <div className="text-sm">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="font-semibold underline underline-offset-4 hover:text-[#555]"
                            >
                                Create one ↗
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
                                Rentify / Welcome back
                            </p>

                            <h1 className="text-[clamp(4rem,8vw,8rem)] font-black tracking-[-0.075em] leading-[0.82]">

                                Welcome
                                <br />

                                <span className="italic font-light">
                                    back.
                                </span>

                            </h1>


                            <div className="mt-12 max-w-md">

                                <p className="text-lg leading-relaxed text-[#171717]/60">
                                    Your properties, tenants and rental
                                    operations are waiting for you.
                                </p>

                            </div>


                            {/* DECORATIVE ELEMENT */}
                            <div className="mt-16 hidden lg:flex items-center gap-4">

                                <div className="w-14 h-14 bg-[#D8FF45] flex items-center justify-center text-xl">
                                    ↗
                                </div>

                                <p className="text-sm text-[#171717]/50">
                                    Manage everything.
                                    <br />
                                    From one place.
                                </p>

                            </div>

                        </div>


                        {/* RIGHT SIDE - FORM */}
                        <div className="lg:col-span-5">

                            <div className="bg-white border border-[#171717]/15 p-7 sm:p-10">

                                <div className="mb-10">

                                    <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/40 mb-3">
                                        Account access
                                    </p>

                                    <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                                        Login to Rentify
                                    </h2>

                                </div>


                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-7"
                                >

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

                                        <div className="flex justify-between items-center mb-3">

                                            <label className="text-sm font-medium">
                                                Password
                                            </label>

                                            <button
                                                type="button"
                                                className="text-xs text-[#171717]/50 hover:text-[#171717] transition"
                                            >
                                                Forgot password?
                                            </button>

                                        </div>


                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#171717]/25 outline-none focus:border-[#171717] transition placeholder:text-[#171717]/30"
                                            required
                                        />

                                    </div>


                                    {/* LOGIN BUTTON */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#171717] text-white py-4 font-medium flex items-center justify-center gap-3 hover:bg-[#D8FF45] hover:text-[#171717] transition duration-300"
                                    >
                                        Login
                                        <span>↗</span>
                                    </button>

                                </form>


                                {/* REGISTER */}
                                <div className="border-t border-[#171717]/15 mt-10 pt-6">

                                    <p className="text-sm text-[#171717]/50">

                                        Don't have a Rentify account?

                                        <Link
                                            to="/signup"
                                            className="ml-2 text-[#171717] font-semibold underline underline-offset-4"
                                        >
                                            Create account
                                        </Link>

                                    </p>

                                </div>

                            </div>


                            {/* SMALL TEXT */}
                            <p className="text-xs text-[#171717]/35 mt-5">
                                By continuing, you agree to Rentify's terms
                                and privacy policy.
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

export default Login;