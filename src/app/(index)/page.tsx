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
            <div className="bg-white fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 gap-x-5 font-favoritmono text-base py-4">
                    <div className="col-start-1 row-start-1 col-span-full">
                        <a href="/" className="">ALEX LUOWAN</a>
                    </div>
                    <ul className="flex flex-row col-span-full col-start-22 row-start-1 justify-end">
                        <li></li>
                        <li><a href="/" className="px-3">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray text-customGray underline">WORK
                            </button>
                        </a></li>
                        <li><a href="/about" className="px-3">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">ABOUT
                            </button>
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1cDINhKrYRQcKnyS8bgtY_3AvWAg-Hyun/view?usp=sharing"
                               className="pl-3" target="_blank">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">RESUME
                            </button>
                        </a></li>
                    </ul>
                    <div className="col-span-5 col-start-8 row-start-1">
                        <p>INTERACTION/PRODUCT DESIGNER</p>
                    </div>

                    <hr className="col-start-1 col-span-full mt-4"></hr>
                    {/*<div className="col-start-24">*/}
                    {/*    <a href="/" className="">*/}
                    {/*        <button*/}
                    {/*            className="hover:underline ease-in-out duration-300 hover:text-hoverGray ml-6" >INDEX*/}
                    {/*        </button>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </nav>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-40 lg:mt-16 ">
                <div className="col-start-1 col-span-8">
                    <h2 className="text-3xl font-favorit text-black leading-9	">
                        A data informed product designer creating compelling digital experiences
                    </h2>
                </div>

                <div  className="col-start-1 col-span-6 mt-32">
                    <div className="font-favoritmono text-base flex flex-row">
                        <Clock/>
                    </div>

                </div>
                <div className="col-start-1 col-span-full">
                    <h4 className="font-favoritmono text-base mt-8">SELECTED PROJECTS</h4>
                    <hr className="bg-black mt-3 border-1 border-black"></hr>
                </div>
            </div>



            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-7">
                <a className="col-start-1 col-span-full lg:col-span-12" href="/projects/88rising">
                    <Image src="/img/88rising/88rising-thumbnail.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </a>
                <hr className="col-start-1 col-span-12 mt-1 border-black">
                </hr>
                <div className="col-start-1 row-start-2 font-favorit text-xl col-span-3 lg:col-span-4 ">
                    <h4 className="mt-1">88rising</h4>
                    {/*<h4 className="-mt-1 text-customGray ">Experience Design</h4>*/}
                </div>
                <div
                    className="lg:col-start-6 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">
                    {/*<h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A transformed digital*/}
                    {/*    interface to*/}
                    {/*    help fans*/}
                    {/*    to explore and uplift emerging artists</h4>*/}
                </div>
                <div
                    className="col-start-6 md:col-start-12 lg:col-start-7 row-start-2 font-favoritmono text-base lg:col-span-6">
                    <h4 className="mt-thumbnail-top text-right">2023 - EXPERIENCE DESIGN</h4>
                </div>

                <div
                    className="lg:col-start-13 col-start-1 col-span-4 row-start-5 lg:row-start-2 font-favorit text-xl lg:col-span-6">
                    <h4 className="mt-1">Give Me Yesterday</h4>
                    <h4 className="-mt-1 text-customGray"></h4>
                </div>

                {/*<div*/}
                {/*    className="lg:col-start-18 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">*/}
                {/*    <h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A compelling online preview for an*/}
                {/*        upcoming*/}
                {/*        exhibition, enticing visitors to experience the works in person.</h4>*/}
                {/*</div>*/}
                <div
                    className="lg:col-start-18 md:col-start-12 col-start-6 row-start-5 lg:row-start-2 font-favoritmono text-base col-span-7">
                    <h4 className="mt-thumbnail-top text-right">2022 - INTERACTION DESIGN, ART DIRECTION</h4>
                </div>

                <a className="col-start-1 col-span-full -mt-36 lg:mt-0 lg:col-start-13 lg:col-span-12 row-start-1"
                   href="/projects/givemeyesterday">

                    <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                           className=""
                    >
                    </Image>
                </a>
                <hr className="col-start-13 col-span-12 mt-1 border-black">
                </hr>
            </div>
            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-7">
                <a className="col-start-1 col-span-full lg:col-span-12" href="/projects/88rising">
                    <Image src="/img/88rising/88rising-thumbnail.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </a>
                <hr className="col-start-1 col-span-12 mt-1 border-black">
                </hr>
                <div className="col-start-1 row-start-2 font-favorit text-xl col-span-3 lg:col-span-5 ">
                    <h4 className="mt-1">Dutch Design Awards</h4>
                    {/*<h4 className="-mt-1 text-customGray ">Experience Design</h4>*/}
                </div>
                <div
                    className="lg:col-start-6 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">
                    {/*<h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A transformed digital*/}
                    {/*    interface to*/}
                    {/*    help fans*/}
                    {/*    to explore and uplift emerging artists</h4>*/}
                </div>
                <div
                    className="col-start-6 md:col-start-12 lg:col-start-7 row-start-2 font-favoritmono text-base lg:col-span-6">
                    <h4 className="mt-thumbnail-top text-right">2023 - INTERACTION DESIGN, ART DIRECTION</h4>
                </div>

                <div
                    className="lg:col-start-13 col-start-1 col-span-4 row-start-5 lg:row-start-2 font-favorit text-xl lg:col-span-6">
                    <h4 className="mt-1">Brian Jessel BMW</h4>
                    <h4 className="-mt-1 text-customGray"></h4>
                </div>

                {/*<div*/}
                {/*    className="lg:col-start-18 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">*/}
                {/*    <h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A compelling online preview for an*/}
                {/*        upcoming*/}
                {/*        exhibition, enticing visitors to experience the works in person.</h4>*/}
                {/*</div>*/}
                <div
                    className="lg:col-start-18 md:col-start-12 col-start-6 row-start-5 lg:row-start-2 font-favoritmono text-base col-span-7">
                    <h4 className="mt-thumbnail-top text-right">2023 - INTERACTION DESIGN, UX RESEARCH</h4>
                </div>

                <a className="col-start-1 col-span-full -mt-36 lg:mt-0 lg:col-start-13 lg:col-span-12 row-start-1"
                   href="/projects/givemeyesterday">

                    <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                           className=""
                    >
                    </Image>
                </a>
                <hr className="col-start-13 col-span-12 mt-1 border-black">
                </hr>
            </div>

        </main>
    )
}
