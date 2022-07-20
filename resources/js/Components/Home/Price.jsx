import React from "react";

function Price() {
    const priceLists = [
        {
            img: "images/hero1.jpeg",
            price: "100000",
            detail: "Basic stock template that you got",
            title: "Minimal",
        },
        {
            img: "images/hero1.jpeg",
            price: "150000",
            detail: "Basic stock template with chat feature",
            title: "Classic",
        },
        {
            img: "images/hero1.jpeg",
            price: "250000",
            detail: "Custom template accourding that your requests",
            title: "Custom",
        },
    ];
    return (
        <section id="price" className="">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-14 px-5">
                <div className="pr-5">
                    <h2 className=" font-serif text-stone-800 text-5xl mb-5">
                        Price
                    </h2>
                </div>
                <div className="flex overflow-x-auto space-x-5">
                    {priceLists.map((list, i) => (
                        <section key={i} className="flex-shrink-0 max-w-xs items-center space-y-8">
                            <img
                                className="grayscale-[80%]"
                                src={list.img}
                            ></img>
                            <div className="flex flex-col items-center text-sm text-center space-y-3 px-5">
                                <h2 className="text-3xl font-serif">{list.title}</h2>
                                <p>{list.detail}</p>
                                <p className="font-serif text-2xl">Rp. {list.price}</p>
                                <button className="btn btn-primary"> Send</button>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Price;
