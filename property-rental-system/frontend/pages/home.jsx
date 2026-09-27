import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">

            <nav className="bg-white shadow px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    <h1 className="text-2xl font-bold">
                        Rentify
                    </h1>

                    <div className="flex gap-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default Home;
