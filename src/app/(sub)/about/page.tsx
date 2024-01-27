import Image from 'next/image'
import React from "react";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <title>About Me</title>
            <div className="bg-dirtywhitebg fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 md:grid-cols-12 gap-x-5 font-favoritmono text-base py-4 -mb-4 md:mb-0 lg:mb-0">
                    <div className="col-start-1 row-start-1 col-span-2 lg:col-span-4">
                        <a href="/" className="">ALEX LUOWAN</a>
                    </div>
                    <ul className="flex flex-row col-span-3 lg:col-start-22 md:col-start-10 row-start-1 justify-end -mt-1 col-start-4">
                        <li></li>
                        <li><a href="/" className="px-3">
                            <button
                                className="hover:border-orangehighlight hover:outline hover:outline-1 hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight text-black px-3 py-1">WORK
                            </button>
                        </a></li>
                        <li><a href="/about" className="px-3">
                            <button
                                className="hover:border-orangehighlight hover:bg-dirtywhitebg ease-in-out duration-300 hover:text-orangehighlight border text-black bg-orangehighlight px-3 py-1 outline border-black outline-0">ABOUT
                            </button>
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1cDINhKrYRQcKnyS8bgtY_3AvWAg-Hyun/view?usp=sharing"
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

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-40 lg:mt-home-top">
                <div className="lg:col-span-14 md:col-span-9 col-span-full">
                    <h4 className="font-favoritmono font-thin lg:text-base text-orangehighlight">
                        WHO AM I
                    </h4>
                    <h2 className="font-montreal font-thin text-xl lg:text-2xl mt-5 text-black leading-aboutpage md:leading-aboutpage lg:leading-aboutpage">
                        I am a <span className="text-black">design student located in Vancouver, Canada,</span> currently studying at Simon Fraser
                        University.
                        In my free time, you can find me playing rhythm games or taking
                        photography. I firmly believe that <span className="text-black"> impactful design is rooted in a harmonious blend of
                        functionality, storytelling, and a commitment to social good. </span>
                    </h2>
                </div>
                <div  className="row-start-2 mt-10 col-span-5 col-start-1">
                <a href="mailto:aluowan@sfu.ca">
                    <button
                        className="font-favorit text-base border-black py-3 px-16 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 ">
                        Contact Me
                    </button>
                </a>
                </div>

            </div>


        </main>
    )
}
