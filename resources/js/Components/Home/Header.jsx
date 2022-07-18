import React, { useEffect, useState } from "react";

function Header() {
    const [open, setOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 ) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`${isScroll ? ' bg-stone-700 text-stone-50' : 'bg-transparent'} flex sticky items-center top-0 p-5 justify-between z-50`}>
            <div className="md:pr-36">
                <h1>ODS.</h1>
            </div>
            <div className="md:hidden">
                <button onClick={() => setOpen(!open)}>Menu</button>
            </div>
            <ul
                className={`nav ${
                    open ? " top-16 left-0" : "top-14 -left-96 w-0"
                }`}
            >
                <li className="headerLink">About Us</li>
                <li className="headerLink">Price</li>
                <li className="headerLink">Portfolio</li>
                <li className="headerLink">Contacts</li>
            </ul>
        </div>
    );
}

export default Header;
