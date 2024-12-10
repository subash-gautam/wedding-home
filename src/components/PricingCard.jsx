import React from "react";

function PricingCard({ amount }) {
    return (
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm hover:bg-gradient-to-b hover:from-cyan-200 hover:to-pink-500">
            <div className="p-6 sm:px-8 flex flex-col items-center">
                <p className="mt-2 sm:mt-4">
                    Rs.
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {amount}
                    </strong>
                </p>
                <h2 className="text-sm mt-2 rounded-full w-auto font-medium text-pink-900 bg-pink-200 text-center px-4 py-2">
                    Demo plan
                </h2>

                <p className="mt-2 text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita hic facere molestias doloremque officiis laboriosam
                    veritatis praesentium velit. Exercitationem aperiam quasi
                    sint temporibus quia ratione aliquam ipsam magni ipsa ea.
                    Sequi repudiandae ut optio cum tempore. Mollitia suscipit
                    sequi adipisci quibusdam, dolorem eius quia, recusandae,
                    laborum fugit quo doloribus non.
                </p>
                <a
                    className="mt-4 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-pink-900 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#">
                    Get Started
                </a>
            </div>
        </div>
    );
}

export default PricingCard;
