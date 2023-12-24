import Image from 'next/image'

export default function Home() {
    return (
        <section className="mx-8 gap-x-5 antialiased gap-y-0">
            <div className="col-span-full grid grid-cols-24">
                <nav className="font-favorit text-xs my-6">
                    <div className="flex flex-row gap-3">
                        <ul className="flex flex-row gap-3">
                            <li><a href="/" className="">ALEX LUOWAN</a></li>
                            <li>—</li>
                        </ul>
                        <ul className="flex flex-row gap-6">
                            <li><a href="/" className="">
                                <button
                                    className="text-customGray underline ease-in-out duration-300 hover:text-hoverGray">WORK
                                </button>
                            </a></li>
                            <li><a href="/" className="">
                                <button
                                    className="hover:underline ease-in-out duration-300 hover:text-hoverGray">ABOUT
                                </button>
                            </a></li>
                            <li><a href="/" className="">
                                <button
                                    className="hover:underline ease-in-out duration-300 hover:text-hoverGray">RESUME
                                </button>
                            </a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/*<div className="col-start-1 col-span-15 mt-home-top">*/}
            {/*    <h2 className="text-2.5xl font-eiko text-customGray">*/}
            {/*        Meet <span className="text-black"> Alex Luowan </span>, the data informed product designer creating*/}
            {/*        compelling digital experiences*/}
            {/*    </h2>*/}
            {/*</div>*/}

            {/*<div className="col-start-1 col-span-full mt-12">*/}
            {/*    <div>*/}
            {/*        <div className="flex flex-row gap-2">*/}
            {/*            <h4 className="text-base font-favorit">*/}
            {/*                Featured Works*/}
            {/*            </h4>*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"*/}
            {/*                 className="mt-0.5">*/}
            {/*                <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="black" stroke-width="0.75"*/}
            {/*                      stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}

            {/*        <hr className="bg-black mt-3 border-1 border-black"></hr>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<Image src="/img/88rising/88rising-thumbnail.png"*/}
            {/*       alt="a laptop displaying a black website with red accents" width={3075} height={1672}*/}
            {/*       className="col-start-1 col-end-13 mt-8"></Image>*/}
            {/*<div className="text-base mt-thumbnail-top col-start-1 col-end-13 mt-8">*/}
            {/*    <div>*/}
            {/*        <h3>88rising</h3>*/}
            {/*        <h3 className="col-span-6">88rising</h3>*/}

            {/*    </div>*/}
            {/*    <h3 className="text-customGray">Experience Design</h3>*/}
            {/*</div>*/}


            {/*<div className="col-start-13 col-span-full mt-8">*/}
            {/*    <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"*/}
            {/*           alt="a laptop displaying a black website with red accents" width={3075} height={1672}></Image>*/}
            {/*    <div className="row-start-4">*/}
            {/*        <div className="text-base mt-thumbnail-top">*/}
            {/*            <h4>Give Me Yesterday</h4>*/}
            {/*            <h4 className="text-customGray">Interaction Design, Art Direction</h4>*/}
            {/*        </div>*/}
            {/*        <div className="text-base mt-thumbnail-top col-end-5">*/}
            {/*            <h4>Give Me Yesterday</h4>*/}
            {/*            <h4 className="text-customGray">Interaction Design, Art Direction</h4>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}

        </section>
    )
}
