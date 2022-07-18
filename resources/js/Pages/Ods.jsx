import Header from "@/Components/Home/Header";
import Hero from "@/Components/Home/Hero";
import { Head, Link } from "@inertiajs/inertia-react";
import { TrendingFlat } from "@mui/icons-material";
import React, { useState } from "react";

function Ods({ props }) {
    console.log(props);
    return (
        <div className="mx-auto bg-stone-200">
            <Head title="Our Deep Story" />
            <div className="mx-auto md:max-w-7xl">
                <Header />
                <Hero/>
            </div>
          
        </div>
    );
}

export default Ods;
