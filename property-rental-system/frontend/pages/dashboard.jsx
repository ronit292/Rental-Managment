
function App() {
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white">

                {/* Logo */}
                <div className="p-9 text-3xl font-bold">
                    Rentify
                </div>

                {/* Navigation */}
                <div className="p-9 space-y-9 space-x-9">
                    <p>Dashboard</p>
                    <p>Properties</p>
                    <p>Tenants</p>
                    <p>Payments</p>
                </div>

            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100">
                Main Content
            </div>

        </div>
    )
}

export default App

