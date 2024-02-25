import Image from 'next/image'
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor/>
            </div>
            <title>Brian Jessel BMW</title>
            <div className="bg-dirtywhitebg fixed top-0 left-0 right-0 z-50">
                <nav
                    className="mx-8 grid grid-cols-6 lg:grid-cols-24 md:grid-cols-12 gap-x-5 font-favoritmono text-base py-4 -mb-4 md:mb-0 lg:mb-0">
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
                    <div
                        className="lg:col-span-5 md:col-span-5 lg:col-start-9 row-start-1 md:col-start-4 invisible md:visible lg:visible">
                        <p>INTERACTION/PRODUCT DESIGNER</p>
                    </div>
                </nav>
            </div>

            <Image src="/img/brianjesselbmw/brian_jessel_bmw_thumbnail.png"
                   alt="a laptop"
                   width={3075}
                   height={1672}
                   className="w-full mt-10 lg:mt-0"
            >
            </Image>
            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-9">
                <div className="col-start-1 col-span-6 lg:col-span-17 md:col-span-8">
                    <h2 className="lg:text-3xl text-mobileheader1 font-montreal">
                        Creating an unforgettable touchpoint for customers, defining the essence of Brian Jessel BMW.
                    </h2>
                </div>
                <div
                    className="lg:col-start-20 lg:col-span-5 col-span-6 font-favoritmono text-orangehighlight text-bodycopy row-start-2 mt-10 lg:mt-0 lg:row-start-1">
                    <h4>
                        CONTRIBUTION
                    </h4>
                    <p className="mt-1 font-favorit text-black">Designer , Researcher,
                        Decision Maker </p>
                    <h4 className="mt-4">
                        CREDITS
                    </h4>
                    <p className="mt-1 font-favorit text-black">Justin Yu, Luke Do, Nishant Gadihoke, Dana
                        Alhabbash </p>

                </div>

                <hr className="col-start-1 col-span-full border-customGray mt-8"></hr>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-6 md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Project Overview
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        As Canada's leading BMW dealership, Brian Jessel BMW sets itself apart by curating a distinctive
                        lifestyle brand showcased in Jessel
                        magazine and an extensive roster of events. Our team of five embarked on a thirteen-week
                        exploration, employing a variety of interaction
                        design methods to deeply comprehend our client. From customer interviews and undercover
                        assessments to active participation in events and
                        collaborative design workshops, we engaged in thorough discussions with Brian Jessel's marketing
                        team. Guided by an immersive and multifaceted
                        design process, we crafted design ethnographies, personas, user journeys, critical design
                        focuses, and concept storyboards, ultimately giving
                        rise to "The Brian Jessel Experience" – a giftbox serving as a pivotal touchpoint for customers,
                        offering an unforgettable journey that encapsulates
                        the essence of Brian Jessel BMW.
                    </p>
                </div>




            </div>


        </main>

    )
}
