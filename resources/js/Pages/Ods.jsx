import About from "@/Components/Home/About";
import Book from "@/Components/Home/Book";
import Contact from "@/Components/Home/Contact";
import Header from "@/Components/Home/Header";
import Hero from "@/Components/Home/Hero";
import OurWork from "@/Components/Home/OurWork";
import Price from "@/Components/Home/Price";
import ServiceDescription from "@/Components/Home/ServiceDescription";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

function Ods(props) {
    console.log(props);
    return (
        <div>
            <Head title="Our Deep Story" />
            <div className="mx-auto bg-stone-200">
                <Header />
                <Hero />
                <About />
                <Price />
                <ServiceDescription/>
                <Book/>
                {/* <OurWork/> */}
                <Contact/>
            </div>
        </div>
    );
}

export default Ods;
