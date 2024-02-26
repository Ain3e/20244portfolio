import Image from 'next/image'
import React from "react";
import AnimatedCursor from "react-animated-cursor"


export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor />
            </div>
            <div className="bg-dirtywhitebg fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 md:grid-cols-12 gap-x-5 font-favoritmono text-base py-4 -mb-4 md:mb-0 lg:mb-0">
                    <div className="col-start-1 row-start-1 col-span-2 lg:col-span-4">
                        <a href="/" className="">ALEX LUOWAN</a>
                    </div>
                    <ul className="flex flex-row col-span-3 lg:col-start-22 md:col-start-10 row-start-1 justify-end -mt-1 col-start-4">
                        <li></li>
                        <li><a href="/" className="px-3">
                            <button
                                className="hover:border-orangehighlight hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight border text-black bg-orangehighlight px-3 py-1 outline border-black outline-0">WORK
                            </button>
                        </a></li>
                        <li><a href="/about" className="px-3">
                            <button
                                className="hover:border-orangehighlight hover:outline hover:outline-1 hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight text-black px-3 py-1">ABOUT
                            </button>
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1T0c0d_vuJVdusHbvyrXZ18qSLwtYtNbI/view?usp=sharing"
                               className="pl-3" target="_blank">
                            <button
                                className="hover:border-orangehighlight hover:outline hover:outline-1 hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight text-black px-3 py-1">RESUME
                            </button>
                        </a></li>
                    </ul>
                    <div className="lg:col-span-5 md:col-span-5 lg:col-start-9 row-start-1 md:col-start-4 invisible md:visible lg:visible">
                        <p>INTERACTION/PRODUCT DESIGNER</p>
                    </div>
                </nav>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-40 lg:mt-24">
                <div className="md:col-start-4 lg:col-start-9 col-span-6">
                    <h2 className="text-base font-favoritmono text-black leading-5">
                        HI I’M ALEX, A DATA INFORMED PRODUICT DESIGNER CREATING COMPELLING DIGITAL EXPERIENCES
                    </h2>
                </div>

                <div className="col-start-1 col-span-6 mt-10">
                </div>

                <div className="col-start-1 col-span-2 ">
                    <h4 className="font-favoritmono text-base mt-8 text-orangehighlight">CLIENT</h4>
                </div>
                <div className="lg:col-start-9 md:col-start-4 col-span-2">
                    <h4 className="font-favoritmono text-base mt-8 text-orangehighlight">YEAR</h4>
                </div>
                <div className="lg:col-start-12 col-span-2 md:col-start-8 md:row-start-3 col-start-5 lg:col-span-4" >
                    <h4 className="font-favoritmono text-base mt-8 text-orangehighlight">TYPE OF WORK</h4>
                </div>
                <div className="col-start-1 col-span-full">
                    <hr className="bg-black mt-3 border-1 border-black "></hr>
                </div>
            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-2 ">

                <div className="col-start-1 col-span-2 ">
                    <h4 className="font-favoritmono text-base mb-3 ">88rising</h4>
                </div>
                <div className="lg:col-start-9 md:col-start-4 col-span-2">
                    <h4 className="font-favoritmono text-base  ">2023</h4>
                </div>
                <div className="lg:col-start-12 md:col-start-8 col-start-5 lg:col-span-8 md:col-span-5 col-span-2">
                    <h4 className="font-favoritmono text-base   ">EXPERIENCE DESIGN</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2  ">
                    <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">01/ 88rising.com</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 mt-12">
                    <p className="font-favorit text-mobilebodycopy">A transformed digital interface to help fans to
                        explore and uplift emerging artists</p>
                </div>

                <div className="row-start-2 mt-28 col-span-5 col-start-1">
                    <a href="/projects/88rising" >
                        <button
                            className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 lg:visible md:visible invisible">
                            Read More
                        </button>
                    </a>
                </div>


                <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 lg:row-start-2 -mt-14 md:mt-5 lg:mt-0"
                   href="/projects/88rising">
                    <Image src="/img/88rising/88rising-thumbnail.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </a>

                <div className="col-start-1 col-span-full">
                    <hr className="bg-black mt-3 border-1 border-black "></hr>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-2 ">

                <div className="col-start-1 col-span-2 md:col-span-3 lg:col-span-4">
                    <h4 className="font-favoritmono text-base mb-3 ">Fondazione Prada</h4>
                </div>
                <div className="lg:col-start-9 md:col-start-4 col-span-2">
                    <h4 className="font-favoritmono text-base  ">2022</h4>
                </div>
                <div className="lg:col-start-12 md:col-start-8 col-start-5 lg:col-span-8 md:col-span-5 col-span-2">
                    <h4 className="font-favoritmono text-base   ">INTERACTION DESIGN, ART DIRECTION</h4>
                </div>

                {/*<div className="col-start-1 row-start-2 col-span-6 md:col-span-6 lg:col-span-8 ">*/}
                {/*    <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">02/ Give Me Yesterday</h4>*/}
                {/*    <p className="font-favorit text-mobilebodycopy mt-5">A compelling online preview for an upcoming exhibition, enticing visitors to experience the works in person.</p>*/}

                {/*</div>*/}

                {/*<div className="col-start-1 col-span-6 row-start-2 ">*/}
                {/*</div>*/}

                <div className="col-start-1 col-span-6 row-start-2  ">
                    <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">02/ Give Me Yesterday</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 mt-12">
                    <p className="font-favorit text-mobilebodycopy">A compelling online preview for an upcoming exhibition, enticing visitors to experience the works in person.</p>
                </div>

                <div className="row-start-2 mt-28 col-span-5 col-start-1">
                    <a href="/projects/givemeyesterday" >
                        <button
                            className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 lg:visible md:visible invisible lg:mt-5">
                            Read More
                        </button>
                    </a>
                </div>


                <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 lg:row-start-2 -mt-8 md:mt-5 lg:mt-0"
                   href="/projects/givemeyesterday">
                            <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
                                   alt="a laptop"
                                   width={3075}
                                   height={1672}
                                   className=""
                            >
                            </Image>
                </a>
                <div className="col-start-1 col-span-full">
                    <hr className="bg-black mt-3 border-1 border-black "></hr>
                </div>
            </div>

            {/*<div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-2 ">*/}

            {/*    <div className="col-start-1 col-span-2 md:col-span-3 lg:col-span-4">*/}
            {/*        <h4 className="font-favoritmono text-base mb-3 ">BMW</h4>*/}
            {/*    </div>*/}
            {/*    <div className="lg:col-start-9 md:col-start-4 col-span-2">*/}
            {/*        <h4 className="font-favoritmono text-base  ">2023</h4>*/}
            {/*    </div>*/}
            {/*    <div className="lg:col-start-12 md:col-start-8 col-start-5 lg:col-span-8 md:col-span-5 col-span-2">*/}
            {/*        <h4 className="font-favoritmono text-base   ">INTERACTION DESIGN, UX RESEARCH</h4>*/}
            {/*    </div>*/}

            {/*    /!*<div className="col-start-1 row-start-2 col-span-6 md:col-span-6 lg:col-span-8 ">*!/*/}
            {/*    /!*    <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">02/ Give Me Yesterday</h4>*!/*/}
            {/*    /!*    <p className="font-favorit text-mobilebodycopy mt-5">A compelling online preview for an upcoming exhibition, enticing visitors to experience the works in person.</p>*!/*/}

            {/*    /!*</div>*!/*/}

            {/*    /!*<div className="col-start-1 col-span-6 row-start-2 ">*!/*/}
            {/*    /!*</div>*!/*/}

            {/*    <div className="col-start-1 col-span-6 row-start-2  ">*/}
            {/*        <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">03/ Brian Jessel BMW</h4>*/}
            {/*    </div>*/}

            {/*    <div className="col-start-1 col-span-6 row-start-2 mt-12">*/}
            {/*        <p className="font-favorit text-mobilebodycopy">A gift voucher offering an unforgettable touchpoint for customers, defining the essence of Brian Jessel BMW.</p>*/}
            {/*    </div>*/}

            {/*    <div className="row-start-2 mt-28 col-span-5 col-start-1">*/}
            {/*        <a href="/projects/brianjesselbmw" >*/}
            {/*            <button*/}
            {/*                className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 lg:visible md:visible invisible lg:mt-5">*/}
            {/*                Read More*/}
            {/*            </button>*/}
            {/*        </a>*/}

            {/*    </div>*/}


            {/*    <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 lg:row-start-2 -mt-8 md:mt-5 lg:mt-0"*/}
            {/*       href="/projects/givemeyesterday">*/}
            {/*        <Image src="/img/brianjesselbmw/brian_jessel_bmw_thumbnail.png"*/}
            {/*               alt="a laptop"*/}
            {/*               width={3075}*/}
            {/*               height={1672}*/}
            {/*               className=""*/}
            {/*        >*/}
            {/*        </Image>*/}
            {/*    </a>*/}

            {/*    <div className="col-start-1 col-span-full">*/}
            {/*        <hr className="bg-black mt-3 border-1 border-black "></hr>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-2 ">

                <div className="col-start-1 col-span-2 md:col-span-3 lg:col-span-4">
                    <h4 className="font-favoritmono text-base mb-3 ">OPTIONS FOR SEXUAL HEALTH</h4>
                </div>
                <div className="lg:col-start-9 md:col-start-4 col-span-2">
                    <h4 className="font-favoritmono text-base  ">2023</h4>
                </div>
                <div className="lg:col-start-12 md:col-start-8 col-start-5 lg:col-span-8 md:col-span-5 col-span-2">
                    <h4 className="font-favoritmono text-base   ">UX HACKATHON, UX/UI</h4>
                </div>

                <div className="col-start-1 col-span-9 row-start-2  ">
                    <h4 className="font-montreal text-2.5xl md:text-3xl lg:text-3xl">03/ OptionsForSexualHealth.org</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 mt-12">
                    <p className="font-favorit text-mobilebodycopy">A web intervention for Options for Sexual Health aims to offer an efficient online platform for users seeking sexual health information.</p>
                </div>

                <div className="row-start-2 mt-28 col-span-5 col-start-1">
                    <a href="/projects/optionsforsexualhealth" >
                        <button
                            className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 lg:visible md:visible invisible lg:mt-5">
                            Read More
                        </button>
                    </a>
                </div>


                <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 lg:row-start-2 -mt-8 md:mt-5 lg:mt-0 "
                   href="/projects/optionsforsexualhealth">
                    <Image src="/img/optionsforsexualhealth/mockup.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                           className=""
                    >
                    </Image>
                </a>
            </div>

        </main>
    )
}
