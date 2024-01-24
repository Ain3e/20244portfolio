import Image from 'next/image'
import React from "react";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="bg-white fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-6 lg:grid-cols-24 gap-x-5 font-favoritmono text-xs py-4">
                    <div className="col-start-1 row-start-1 col-span-full">
                        <a href="/" className="">ALEX LUOWAN</a>
                    </div>
                    <ul className="flex flex-row col-span-full col-start-22 row-start-1">
                        <li></li>
                        <li><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray text-customGray underline">WORK
                            </button>
                        </a></li>
                        <li><a href="/about" className="gap-3">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">ABOUT
                            </button>
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1cDINhKrYRQcKnyS8bgtY_3AvWAg-Hyun/view?usp=sharing"
                               className="gap-3" target="_blank">
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

                {/*<div className="col-start-1 col-span-full mt-12">*/}
                {/*    <div>*/}
                {/*        <div className="flex flex-row gap-2">*/}
                {/*            <h4 className="text-bodycopy font-favorit">*/}
                {/*                Featured Works*/}
                {/*            </h4>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"*/}
                {/*                 fill="none"*/}
                {/*                 className="mt-0.5">*/}
                {/*                <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="black" stroke-width="0.75"*/}
                {/*                      stroke-linecap="round" stroke-linejoin="round"/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}

                {/*        <hr className="bg-black mt-3 border-1 border-black"></hr>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div  className="col-start-1 col-span-full mt-56">
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
                <div className="col-start-1 row-start-2 font-favorit text-bodycopy col-span-3 lg:col-span-4 ">
                    <h4 className="mt-thumbnail-top">88rising</h4>
                    <h4 className="-mt-1 text-customGray ">Experience Design</h4>
                </div>
                <div
                    className="lg:col-start-6 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">
                    <h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A transformed digital
                        interface to
                        help fans
                        to explore and uplift emerging artists</h4>
                </div>
                <div
                    className="col-start-6 md:col-start-12 lg:col-start-12 row-start-2 font-favorit text-bodycopy lg:col-span-1">
                    <h4 className="mt-thumbnail-top text-right">2023</h4>
                </div>

                <div
                    className="lg:col-start-13 col-start-1 col-span-4 row-start-5 lg:row-start-2 font-favorit text-bodycopy lg:col-span-6">
                    <h4 className="mt-thumbnail-top">Give Me Yesterday</h4>
                    <h4 className="-mt-1 text-customGray">Interaction Design, Art Direction</h4>
                </div>

                <div
                    className="lg:col-start-18 row-start-2 font-favorit text-bodycopy lg:col-span-6 invisible lg:visible">
                    <h4 className="text-customGray mt-thumbnail-top leading-bodyPara">A compelling online preview for an
                        upcoming
                        exhibition, enticing visitors to experience the works in person.</h4>
                </div>
                <div
                    className="lg:col-start-24 md:col-start-12 col-start-6 row-start-5 lg:row-start-2 font-favorit text-bodycopy col-span-1">
                    <h4 className="mt-thumbnail-top text-right">2022</h4>
                </div>

                <a className="col-start-1 col-span-full -mt-36 lg:mt-0 lg:col-start-13 lg:col-span-12 "
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
