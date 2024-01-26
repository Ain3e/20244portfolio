import Image from 'next/image'
import React from "react";
import Clock from "@/app/components/Clock";
import AnimatedCursor from "react-animated-cursor"


export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            {/*<div className="App">*/}
            {/*    <AnimatedCursor />*/}
            {/*</div>*/}
            <div className="bg-dirtywhitebg fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 gap-x-5 font-favoritmono text-base py-4">
                    <div className="col-start-1 row-start-1 col-span-full">
                        <a href="/" className="">ALEX LUOWAN</a>
                    </div>
                    <ul className="flex flex-row col-span-full col-start-22 row-start-1 justify-end -mt-1">
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
                        <li><a href="https://drive.google.com/file/d/1cDINhKrYRQcKnyS8bgtY_3AvWAg-Hyun/view?usp=sharing"
                               className="pl-3" target="_blank">
                            <button
                                className="hover:border-orangehighlight hover:outline hover:outline-1 hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight text-black px-3 py-1">RESUME
                            </button>
                        </a></li>
                    </ul>
                    <div className="col-span-5 col-start-9 row-start-1">
                        <p>INTERACTION/PRODUCT DESIGNER</p>
                    </div>

                    {/*<hr className="col-start-1 col-span-full mt-4"></hr>*/}
                    {/*<div className="col-start-24">*/}
                    {/*    <a href="/" className="">*/}
                    {/*        <button*/}
                    {/*            className="hover:underline ease-in-out duration-300 hover:text-hoverGray ml-6" >INDEX*/}
                    {/*        </button>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </nav>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-40 lg:mt-24">
                <div className="col-start-9 col-span-6">
                    <h2 className="text-base font-favoritmono text-black leading-5">
                        HI I’M ALEX, A DATA INFORMED PRODUICT DESIGNER CREATING COMPELLING DIGITAL EXPERIENCES
                    </h2>
                </div>

                <div className="col-start-1 col-span-6 mt-10">
                </div>

                <div className="col-start-1 col-span-2 ">
                    <h4 className="font-favoritmono text-base mt-8 text-orangehighlight">CLIENT</h4>
                </div>
                <div className="col-start-9 col-span-2">
                    <h4 className="font-favoritmono text-base mt-8 text-orangehighlight">YEAR</h4>
                </div>
                <div className="col-start-12 col-span-3">
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
                <div className="col-start-9 col-span-2">
                    <h4 className="font-favoritmono text-base  ">2023</h4>
                </div>
                <div className="col-start-12 col-span-3">
                    <h4 className="font-favoritmono text-base   ">EXPERIENCE DESIGN</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 ">
                    <h4 className="font-montreal text-3xl">01/ 88rising.com</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 mt-12">
                    <p className="font-favorit text-mobilebodycopy">A transformed digital interface to help fans to
                        explore and uplift emerging artists</p>
                </div>

                <div className="row-start-2 mt-28 col-span-5 col-start-1">
                    <a href="/projects/88rising" >
                        <button
                            className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 ">
                            Read More
                        </button>
                    </a>
                </div>


                <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 row-start-2"
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



                <div className="col-start-1 col-span-2 ">
                    <h4 className="font-favoritmono text-base mb-3 ">Fondazione Prada</h4>
                </div>
                <div className="col-start-9 col-span-2">
                    <h4 className="font-favoritmono text-base  ">2022</h4>
                </div>
                <div className="col-start-12 col-span-6">
                    <h4 className="font-favoritmono text-base   ">INTERACTION DESIGN, ART DIRECTION</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 ">
                    <h4 className="font-montreal text-3xl">02/ Give Me Yesterday</h4>
                </div>

                <div className="col-start-1 col-span-6 row-start-2 mt-12">
                    <p className="font-favorit text-mobilebodycopy">A compelling online preview for an upcoming exhibition, enticing visitors to experience the works in person.</p>
                </div>

                <div className="row-start-2 mt-28 col-span-5 col-start-1">
                    <a href="/projects/givemeyesterday" >
                        <button
                            className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 ">
                            Read More
                        </button>
                    </a>
                </div>


                <a className="col-start-1 col-span-full lg:col-span-16 lg:col-start-9 row-start-2"
                   href="/projects/givemeyesterday">
                            <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
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
