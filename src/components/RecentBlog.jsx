import React from "react";
import Blog from "./Blog";

function RecentBlog() {
    return (
        <div className="m-10">
            <h2 className="text-2xl text-center font-bold mb-4">Recent Blog</h2>
            <div className="grid grid-cols-3 gap-4">
                <Blog
                    bg="/Rectangle 197.png"
                    pp="/Ellipse 39.png"
                    date="2025, Jan 01"
                    title="Test title"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <Blog
                    bg="/Rectangle 197.png"
                    pp="/Ellipse 39.png"
                    date="2025, Jan 01"
                    title="Test title"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <Blog
                    bg="/Rectangle 197.png"
                    pp="/Ellipse 39.png"
                    date="2025, Jan 01"
                    title="Test title"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
        </div>
    );
}

export default RecentBlog;
