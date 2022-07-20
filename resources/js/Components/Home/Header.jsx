import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className={`${
                isScroll ? " bg-stone-700 text-stone-50" : ""
            } sticky top-0 p-5 z-50`}
        >
            <div className="flex mx-auto items-center max-w-7xl justify-between">
                <div className="md:pr-36">
                    <h1>ODS.</h1>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>Menu</button>
                </div>
                <ul
                    className={`nav ${
                        open ? " top-16 left-0" : "top-14 -left-96 w-0"
                    } ${isScroll && 'text-stone-800 md:text-stone-50'}`}
                >
                    <Link className={`headerlink`} href='#about'>About Us</Link>
                    <Link className={`headerlink`} href='#price'>Price</Link>
                    <Link className={`headerlink`} href='#'>Portfolio</Link>
                    <Link className={`headerlink`} href='#contact'>Contacts</Link>
                    <Link className={`headerlink btn-primary py-1 px-3 rounded flex justify-center`} href={route('login')}>Dashboard</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
