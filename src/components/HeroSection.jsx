import React from "react";

const HeroSection = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/carousel_bg.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    We make your special day
                </h1>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                    MEMORABLE
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    Best wedding planner & event organiser in town
                </p>
                <div className="flex space-x-4 z-10">
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition duration-300">
                        Portfolio
                    </button>
                    <button className="px-6 py-3 bg-pink-500 text-white hover:bg-pink-600 transition duration-300">
                        Get Started
                    </button>
                </div>
                <div className="absolute bottom-8 flex space-x-2">
                    <span className="w-4 h-4 bg-white rounded-full"></span>
                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
