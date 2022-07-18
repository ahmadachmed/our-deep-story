import { TrendingFlat } from "@mui/icons-material";
import React from "react";

function Hero() {
    return (
        <div className="flex flex-col md:py-10 py-0 justify-center items-center">
            <div className="object-cover md:max-w-sm max-w-xs mx-auto">
                <img className="grayscale" src="images/hero2.jpeg"></img>
            </div>
            <div className="md:absolute flex flex-col md:flex-row py-5">
                <h2 className="md:text-[150px] md:text-left text-center uppercase text-4xl font-serif leading-none antialiased md:subpixel-antialiased">
                    Our Deep
                    <br />
                    Story
                </h2>
                <div className="flex md:rotate-90 text-sm items-center">
                    <button className="space-x-3" onClick={null}>
                        <span>Temukan Kebutuhan Kamu</span>
                        <TrendingFlat />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
