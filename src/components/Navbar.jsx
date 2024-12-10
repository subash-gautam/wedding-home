import React from "react";

function Navbar() {
    return (
        <nav>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-bold">
                        LO
                    </a>
                    <br />
                    <a href="/" className="text-2xl font-bold">
                        GO
                    </a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Home
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        About Us
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Services
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Portfolio
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Gallery
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Packages
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        Contact Us
                    </a>
                    <a href="/" className="hover:underline hover:text-pink-500">
                        FAQ
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
