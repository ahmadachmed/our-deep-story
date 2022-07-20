import { Link } from "@inertiajs/inertia-react";
import { TrendingFlat } from "@mui/icons-material";
import React from "react";

function Hero() {
    const carouselImages = [
        {
            url: "images/hero1.jpeg",
            id: "1",
        },
        {
            url: "images/hero2.jpeg",
            id: "2",
        },
    ];

    return (
        <div className="flex bg-stone-200 flex-col md:py-10 py-0 justify-center items-center">
            <div className="carousel carousel-center md:max-w-sm max-w-xs mx-auto">
                {carouselImages.map((image, i) => (
                    <img
                        key={i}
                        className="active grayscale-[50%] carousel-item mr-5"
                        src={image.url}
                        id={image.id}
                    />
                ))}
            </div>
            <div className="md:absolute flex flex-col md:flex-row py-5">
                <h2 className="md:text-[150px] md:text-left text-center uppercase text-4xl font-serif leading-none antialiased md:subpixel-antialiased">
                    Our Deep
                    <br />
                    Story
                </h2>
                <div className="flex md:rotate-90 text-sm items-center">
                    <button className="space-x-3" onClick={null}>
                        <Link href="#price">Temukan Kebutuhan Kamu</Link>
                        <TrendingFlat />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
