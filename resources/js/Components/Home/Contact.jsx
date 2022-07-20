import React from "react";

function Contact() {
    return (
        <section id="contact" className="bg-stone-50">
            <div className="flex">
                <div className="max-w-[1/3] hidden md:block">
                    <img src="images/hero2.jpeg" className="grayscale-[50%]" />
                </div>
                <div className="w-full py-10 md:px-10 px-5 md:space-y-40 space-y-10">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <h1 className="text-5xl mb-5 font-serif">Contacts</h1>
                        <div className="max-w-xs space-y-5 text-end">
                            <p>
                                Our studio located in Indonesia. but we travel a
                                lot and hold wddings all over Jakarta, Sulawesi
                                and many more
                            </p>
                            <p>
                                Our studio located in Indonesia. but we travel a
                                lot and hold wddings all over Jakarta, Sulawesi
                                and many more
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:divide-x divide-stone-500">
                        <div className="space-y-10 w-full mb-10">
                            <div>
                                <h3 className="font-bold">Phones :</h3>
                                <p>
                                    (+62) 81234567890{" "}
                                    <span className="font-bold">Testy</span>
                                </p>
                                <p>
                                    (+62) 81234567890{" "}
                                    <span className="font-bold">Testy</span>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold">Email :</h3>
                                <p>storyourdeep@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 items-center justify-end md:pl-5 w-full">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input w-full max-w-xs"
                                />
                                <input
                                    type="text"
                                    placeholder="Contact Number"
                                    className="input w-full max-w-xs"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input w-full max-w-xs"
                                />
                                 <div>
                                <button className="btn px-8 btn-outline">
                                    Send
                                </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
