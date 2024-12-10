import React from "react";

function OurTeam() {
    const teamMembers = [
        {
            name: "Shane Matthews",
            role: "Video/Photography",
            image: "/member1.png",
        },
        {
            name: "John Doe",
            role: "Event Manager",
            image: "/member2.png",
        },
        {
            name: "Jane Doe",
            role: "Architect and Interior Designer",
            image: "/member3.png",
        },
        {
            name: "Ada Smith",
            role: "Flowerist",
            image: "/member4.png",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurTeam;
