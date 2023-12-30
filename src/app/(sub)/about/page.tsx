import Image from 'next/image'
import React from "react";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <title>About Me</title>
            <div className="bg-white fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 gap-x-5 font-favorit text-xs py-4">
                    <ul className="flex flex-row col-span-full lg:col-span-12 gap-3">
                        <li><a href="/" className="">ALEX LUOWAN</a></li>
                        <li>—</li>
                        <li><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">WORK
                            </button>
                        </a></li>
                        <li><a href="/about" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 text-customGray underline hover:text-hoverGray">ABOUT
                            </button>
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1cDINhKrYRQcKnyS8bgtY_3AvWAg-Hyun/view?usp=sharing"
                               className="" target="_blank">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">RESUME
                            </button>
                        </a></li>
                    </ul>
                    {/*<div className="col-start-24">*/}
                    {/*    <a href="/" className="">*/}
                    {/*        <button*/}
                    {/*            className="hover:underline ease-in-out duration-300 hover:text-hoverGray ml-6" >INDEX*/}
                    {/*        </button>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </nav>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-40 lg:mt-home-top">
                <div className="lg:col-span-14 md:col-span-9 col-span-full">
                    <h4 className="font-favorit font-thin lg:text-base">
                        WHO AM I
                    </h4>
                    <h2 className="font-eiko font-thin text-xl lg:text-2xl mt-5 text-customGray leading-aboutpage md:leading-aboutpage lg:leading-aboutpage">
                        I am a <span className="text-black">design student located in Vancouver, Canada,</span> currently studying at Simon Fraser
                        University.
                        When I&#39;m not engrossed in front of a screen, you can find me playing rhythm games or taking
                        photography. I firmly believe that <span className="text-black"> impactful design is rooted in a harmonious blend of
                        functionality, storytelling, and a commitment to social good. </span>
                    </h2>
                </div>
                <a href="mailto:aluowan@sfu.ca" className="row-start-2 mt-10 col-span-5 col-start-1">
                    <button
                        className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-black hover:border-white hover:text-white ease-in-out duration-300 ">
                        Contact Me
                    </button>
                </a>

            </div>


        </main>
    )
}
