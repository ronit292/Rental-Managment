import { useState } from "react";
import { Link } from "react-router-dom";

const properties = [
    {
        id: 1,
        number: "01",
        name: "The Courtyard",
        location: "Kathmandu, Nepal",
        type: "Apartment",
        price: "35,000",
        image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 2,
        number: "02",
        name: "House No. 27",
        location: "Lalitpur, Nepal",
        type: "House",
        price: "55,000",
        image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: 3,
        number: "03",
        name: "The Studio",
        location: "Bhaktapur, Nepal",
        type: "Studio",
        price: "20,000",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    },
];

const features = [
    {
        number: "01",
        title: "Properties",
        text: "Keep every property, unit and availability detail organized in one place.",
    },
    {
        number: "02",
        title: "Tenants",
        text: "Manage tenant information, rental relationships and important documents.",
    },
    {
        number: "03",
        title: "Payments",
        text: "Track rent, overdue payments and payment history without the paperwork.",
    },
    {
        number: "04",
        title: "Maintenance",
        text: "Receive requests, track issues and keep every maintenance task visible.",
    },
];

function Dashboard() {
    const [selectedProperty, setSelectedProperty] = useState(null);

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

                        {/* NAVIGATION */}
                        <div className="hidden md:flex items-center gap-8 text-sm">

                            <a
                                href="#about"
                                className="hover:opacity-50 transition"
                            >
                                About
                            </a>

                            <a
                                href="#features"
                                className="hover:opacity-50 transition"
                            >
                                Features
                            </a>

                            <a
                                href="#properties"
                                className="hover:opacity-50 transition"
                            >
                                Properties
                            </a>

                        </div>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-3">

                            <Link
                                to="/login"
                                className="hidden sm:block text-sm hover:opacity-50 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="bg-[#171717] text-white px-5 py-3 text-sm font-medium hover:bg-[#D8FF45] hover:text-[#171717] transition"
                            >
                                Get started ↗
                            </Link>

                        </div>

                    </div>

                </div>
            </nav>


            {/* HERO */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24">

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-8">

                        <p className="text-xs uppercase tracking-[0.25em] mb-8 text-[#171717]/50">
                            Property management / 2026
                        </p>

                        <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.075em] font-black max-w-6xl">
                            Property
                            <br />
                            management
                            <br />
                            <span className="italic font-light">
                                without
                            </span>{" "}
                            the mess.
                        </h1>

                    </div>


                    {/* RIGHT */}
                    <div className="lg:col-span-4 lg:flex lg:items-end">

                        <div className="max-w-sm lg:ml-auto mt-10 lg:mt-0">

                            <p className="text-lg leading-relaxed">
                                Rentify brings properties, tenants, payments
                                and maintenance together in one simple
                                workspace.
                            </p>

                            <Link
                                to="/register"
                                className="inline-flex items-center gap-3 mt-8 bg-[#D8FF45] px-6 py-4 font-medium hover:bg-[#171717] hover:text-white transition"
                            >
                                Explore Rentify
                                <span>↗</span>
                            </Link>

                        </div>

                    </div>

                </div>


                {/* HERO IMAGE */}
                <div className="mt-16 relative">

                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
                        alt="Modern interior"
                        className="w-full h-[500px] lg:h-[680px] object-cover"
                    />

                    {/* FLOATING LABEL */}
                    <div className="absolute bottom-6 left-6 bg-[#D8FF45] px-5 py-4">

                        <p className="text-xs uppercase tracking-widest">
                            Built for modern
                        </p>

                        <p className="font-semibold">
                            property owners
                        </p>

                    </div>

                </div>

            </section>


            {/* INTRO */}
            <section
                id="about"
                className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32"
            >

                <div className="grid lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-3">

                        <p className="text-xs uppercase tracking-[0.25em] text-[#171717]/50">
                            01 — About
                        </p>

                    </div>

                    <div className="lg:col-span-9">

                        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.055em] font-medium max-w-5xl">

                            Renting property should be
                            <span className="italic font-light">
                                {" "}simple.
                            </span>

                            <br />

                            Managing it should be
                            <span className="italic font-light">
                                {" "}even simpler.
                            </span>

                        </h2>

                        <div className="grid md:grid-cols-2 gap-10 mt-16 border-t border-[#171717]/20 pt-8">

                            <p className="text-[#171717]/60 leading-relaxed max-w-md">
                                Rentify is a property and rental management
                                platform designed to remove the spreadsheets,
                                paperwork and scattered information from
                                everyday property management.
                            </p>

                            <p className="text-[#171717]/60 leading-relaxed max-w-md">
                                From your first property to an entire portfolio,
                                Rentify gives you one clear place to understand
                                what is happening.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* STATS */}
            <section className="border-y border-[#171717]/20">

                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">

                    <div className="p-8 lg:p-12 border-r border-[#171717]/20">
                        <p className="text-5xl lg:text-7xl font-black tracking-[-0.06em]">
                            01
                        </p>
                        <p className="mt-4 text-sm text-[#171717]/50">
                            Workspace
                        </p>
                    </div>

                    <div className="p-8 lg:p-12 md:border-r border-[#171717]/20">
                        <p className="text-5xl lg:text-7xl font-black tracking-[-0.06em]">
                            04
                        </p>
                        <p className="mt-4 text-sm text-[#171717]/50">
                            Core tools
                        </p>
                    </div>

                    <div className="p-8 lg:p-12 border-r border-[#171717]/20">
                        <p className="text-5xl lg:text-7xl font-black tracking-[-0.06em]">
                            ∞
                        </p>
                        <p className="mt-4 text-sm text-[#171717]/50">
                            Possibilities
                        </p>
                    </div>

                    <div className="p-8 lg:p-12">
                        <p className="text-5xl lg:text-7xl font-black tracking-[-0.06em]">
                            24/7
                        </p>
                        <p className="mt-4 text-sm text-[#171717]/50">
                            Access
                        </p>
                    </div>

                </div>

            </section>


            {/* FEATURES */}
            <section
                id="features"
                className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32"
            >

                <div className="grid lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-3">

                        <p className="text-xs uppercase tracking-[0.25em] text-[#171717]/50">
                            02 — What it does
                        </p>

                    </div>

                    <div className="lg:col-span-9">

                        <h2 className="text-5xl md:text-7xl leading-[0.9] tracking-[-0.06em] font-black mb-16">
                            Everything
                            <br />
                            in one place.
                        </h2>


                        <div className="border-t border-[#171717]/20">

                            {features.map((feature) => (

                                <div
                                    key={feature.number}
                                    className="group grid md:grid-cols-12 gap-6 py-8 border-b border-[#171717]/20 hover:bg-[#D8FF45] transition px-4 -mx-4"
                                >

                                    <div className="md:col-span-2 text-sm text-[#171717]/40">
                                        {feature.number}
                                    </div>

                                    <div className="md:col-span-4">

                                        <h3 className="text-2xl font-medium">
                                            {feature.title}
                                        </h3>

                                    </div>

                                    <div className="md:col-span-5">

                                        <p className="text-[#171717]/60 leading-relaxed">
                                            {feature.text}
                                        </p>

                                    </div>

                                    <div className="md:col-span-1 text-right text-xl">
                                        ↗
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* PROPERTIES */}
            <section
                id="properties"
                className="bg-[#171717] text-[#F4F1EA] py-32"
            >

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

                        <div>

                            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
                                03 — Demo properties
                            </p>

                            <h2 className="text-5xl md:text-7xl tracking-[-0.06em] font-black leading-[0.9]">
                                Take a look
                                <br />
                                around.
                            </h2>

                        </div>

                        <p className="max-w-sm text-white/50 leading-relaxed">
                            This is a small preview of what your property
                            portfolio could look like inside Rentify.
                        </p>

                    </div>


                    {/* PROPERTY GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {properties.map((property) => (

                            <div
                                key={property.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProperty(property)}
                            >

                                <div className="relative overflow-hidden">

                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="w-full h-[430px] object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute top-5 left-5 bg-[#D8FF45] text-[#171717] px-3 py-2 text-sm">
                                        {property.number}
                                    </div>

                                    <div className="absolute bottom-5 right-5 bg-white text-[#171717] w-12 h-12 flex items-center justify-center text-xl group-hover:bg-[#D8FF45] transition">
                                        ↗
                                    </div>

                                </div>


                                <div className="border-b border-white/20 py-6">

                                    <div className="flex justify-between gap-4">

                                        <div>

                                            <h3 className="text-2xl font-medium">
                                                {property.name}
                                            </h3>

                                            <p className="text-white/40 mt-2 text-sm">
                                                {property.location}
                                            </p>

                                        </div>

                                        <div className="text-right">

                                            <p className="text-[#D8FF45]">
                                                Rs. {property.price}
                                            </p>

                                            <p className="text-white/30 text-xs mt-1">
                                                / month
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="bg-[#D8FF45]">

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">

                    <div className="grid lg:grid-cols-12 gap-10">

                        <div className="lg:col-span-8">

                            <p className="text-xs uppercase tracking-[0.25em] mb-8">
                                04 — Get started
                            </p>

                            <h2 className="text-6xl md:text-8xl tracking-[-0.07em] leading-[0.85] font-black">
                                Your properties.
                                <br />
                                Your system.
                            </h2>

                        </div>

                        <div className="lg:col-span-4 flex items-end">

                            <div>

                                <p className="text-lg max-w-sm leading-relaxed mb-8">
                                    Create your Rentify account and start
                                    managing your rental portfolio smarter.
                                </p>

                                <Link
                                    to="/register"
                                    className="inline-flex items-center gap-4 bg-[#171717] text-white px-7 py-5 hover:bg-white hover:text-[#171717] transition"
                                >
                                    Create your account
                                    <span>↗</span>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="bg-[#171717] text-[#F4F1EA]">

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">

                    <div className="flex flex-col md:flex-row justify-between gap-6">

                        <div>

                            <p className="text-2xl font-black tracking-[-0.06em]">
                                rentify<span className="text-white/30">®</span>
                            </p>

                            <p className="text-white/40 text-sm mt-2">
                                Property management, simplified.
                            </p>

                        </div>

                        <div className="flex gap-6 text-sm text-white/50">

                            <a href="#about" className="hover:text-white">
                                About
                            </a>

                            <a href="#features" className="hover:text-white">
                                Features
                            </a>

                            <a href="#properties" className="hover:text-white">
                                Demo
                            </a>

                            <Link
                                to="/login"
                                className="hover:text-white"
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                    <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/30">
                        © 2026 Rentify. All rights reserved.
                    </div>

                </div>

            </footer>


            {/* PROPERTY MODAL */}
            {selectedProperty && (

                <div
                    className="fixed inset-0 z-50 bg-[#171717]/80 flex items-center justify-center p-5"
                    onClick={() => setSelectedProperty(null)}
                >

                    <div
                        className="bg-[#F4F1EA] text-[#171717] max-w-lg w-full p-8 md:p-10 relative"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={() => setSelectedProperty(null)}
                            className="absolute top-5 right-5 w-10 h-10 border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition"
                        >
                            ×
                        </button>


                        <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/40 mb-8">
                            Property preview
                        </p>


                        <h3 className="text-4xl font-black tracking-[-0.05em]">
                            {selectedProperty.name}
                        </h3>


                        <p className="text-[#171717]/50 mt-3">
                            {selectedProperty.location}
                        </p>


                        <div className="border-t border-[#171717]/20 mt-8 pt-6">

                            <p className="text-lg leading-relaxed">
                                You have found a demo property.
                                Create a Rentify account to access full
                                property details, tenant information and
                                rental management tools.
                            </p>

                        </div>


                        <div className="flex flex-col sm:flex-row gap-3 mt-8">

                            <Link
                                to="/register"
                                className="flex-1 bg-[#171717] text-white py-4 text-center font-medium hover:bg-[#D8FF45] hover:text-[#171717] transition"
                            >
                                Create account ↗
                            </Link>

                            <Link
                                to="/login"
                                className="flex-1 border border-[#171717]/30 py-4 text-center font-medium hover:bg-[#171717] hover:text-white transition"
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Dashboard;