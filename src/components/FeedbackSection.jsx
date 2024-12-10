import React from "react";

function FeedbackSection() {
    return (
        <div className="bg-blue-500 flex flex-col md:flex-row">
            <div className="bg-pink-500 p-10 md:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Client's Feedback
                </h2>
                <p className="text-white mb-4">
                    "It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout."
                </p>
                <p className="text-white">- John Doe</p>

                <div className="flex mt-4">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar 1"
                        className="rounded-full mr-2"
                    />
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar 2"
                        className="rounded-full mr-2"
                    />
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar 3"
                        className="rounded-full mr-2"
                    />
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar 4"
                        className="rounded-full mr-2"
                    />
                </div>
            </div>

            <div className="bg-white p-10 md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 mb-4">
                    No spam message from us, only give you latest offer which is
                    best for you and your business
                </p>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
                    />
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-r-md">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeedbackSection;
