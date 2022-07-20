import React from "react";

function About(props) {
    return (
        <section id="about" className="bg-stone-50">
            <div className="max-w-7xl mx-auto py-20">
                <div className="text-center text-sm md:text-lg leading-relaxed max-w-4xl mx-auto space-y-5 p-5">
                    <h2 className=" text-xl font-bold md:text-3xl">
                        Tentang OurDeepStory
                    </h2>
                    <p>
                        Kami menyediakan layanan yang dapat memudahkan para
                        penyelengara event maupun acara private (peluncuran
                        produk/brand, seminar, pertemuan angkatan, konfrensi)
                        dan juga acara keluarga maupun pasangan yang akan
                        melaksanakan pernikahan dengan solusi digital yang ada.
                    </p>
                    <p>
                        Team kami akan membantu dari tahap awal untuk membangun
                        semuanya dari konsep design untuk segala kebutuhan dan
                        keinginan konstumer sampai penyediaan buku tamu.
                    </p>
                </div>
            </div>
            <div className=" bg-stone-500 px-10 py-16">
                <div className="flex flex-col md:flex-row gap-x-20">
                    <div className="flex aspect-square max-w-md p-10 bg-slate-400 ">
                        <img
                            src="images/about1.jpeg"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex md:flex-col flex-col-reverse w-full space-y-10">
                        <div className="flex justify-end gap-x-5">
                            <div className="md:inline-flex hidden"></div>
                            <div className="flex aspect-square max-w-[200px]">
                                <img
                                    src="images/about1.jpeg"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex aspect-square max-w-[200px] ">
                                <img
                                    src="images/about1.jpeg"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className=" text-slate-50 pb-10 space-y-5">
                            <h2 className="text-5xl font-serif">About Us</h2>
                            <p>
                                Kami menyediakan layanan yang dapat memudahkan
                                para penyelengara event maupun acara private
                                (peluncuran produk/brand, seminar, pertemuan
                                angkatan, konfrensi) dan juga acara keluarga
                                maupun pasangan yang akan melaksanakan
                                pernikahan dengan solusi digital yang ada.
                            </p>
                            <p>
                                Team kami akan membantu dari tahap awal untuk
                                membangun semuanya dari konsep design untuk
                                segala kebutuhan dan keinginan konstumer sampai
                                penyediaan buku tamu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}

export default About;
