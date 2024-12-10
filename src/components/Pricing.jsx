import React from "react";
import PricingCard from "./PricingCard";

function Pricing() {
    return (
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <p className="text-2xl text-center py-5 ">Our Packages</p>
            <div class="mx-auto space-x-4 text-center grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 ">
                <PricingCard amount="5,000" />
                <PricingCard amount="10,000" />
                <PricingCard amount="15,000" />
            </div>
        </div>
    );
}

export default Pricing;
