import React from "react";

function Blog({ bg, pp, date, title, description, buttonText = "Learn More" }) {
    return (
        <div className="relative w-full max-w-lg mx-auto bg-white shadow-lg">
            <div className="relative">
                <img
                    src={bg}
                    alt="Wedding"
                    className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-[-20px] right-20 w-24 h-24 rounded-full  overflow-hidden border-4 border-white">
                    <img
                        src={pp}
                        alt="Couple"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Date */}
            <div className="absolute bottom-4 right-4 text-gray-700 text-sm font-semibold">
                {date}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Blog;
