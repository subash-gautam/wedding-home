import React from "react";

function ContactUs() {
    return (
        <div className="bg-white flex flex-col items-center justify-center h-screen">
            <h2 className="text-pink-500 text-4xl font-bold mb-4">
                Have a Question About Our Company And Events Setups
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                Let us take care of it! We are willing to give some advice and
                support whatever you need.
            </p>
            <button className="border-2 border-pink-500 hover:bg-pink-600 hover:text-white font-bold py-2 px-4 rounded">
                Contact Us
            </button>
        </div>
    );
}

export default ContactUs;
