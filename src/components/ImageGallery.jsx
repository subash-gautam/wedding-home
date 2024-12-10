import React from "react";

function ImageGallery() {
    const images = [
        "/Rectangle 22.png",
        "/Rectangle 32.png",
        "/Rectangle 43.png",
        "/Rectangle 21.png",
        "/Rectangle 80.png",
        "/Rectangle 81.png",
        "/Rectangle 82.png",
        "/Rectangle 83.png",
        "/Rectangle 84.png",
    ];

    return (
        <div className="bg-blue-500">
            <div className="container mx-auto py-10">
                <div className="container py-10 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">
                        Image Gallery
                    </h2>
                    <button className=" bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;
