import Image from 'next/image'

export default function Home() {
    return (
        <main className="mx-8 grid grid-cols-24 gap-x-5 antialiased gap-y-0">
            <nav className="font-favorit text-xs col-span-full sticky top-0 py-6 bg-white w-full">
                <ul>
                    <a href="/">
                        <li className="float-left">ALEX LUOWAN</li>
                    </a>
                    <li className="float-left mx-3">—</li>
                    <li className="float-left mr-6"><a href="/" className="">
                        <button
                            className="text-customGray underline ease-in-out duration-300 hover:text-hoverGray">WORK
                        </button>
                    </a></li>
                    <li className="float-left mr-6"><a href="/" className="">
                        <button
                            className="hover:underline ease-in-out duration-300 hover:text-hoverGray">ABOUT
                        </button>
                    </a></li>
                    <li className="float-left mr-6"><a href="/" className="">
                        <button
                            className="hover:underline ease-in-out duration-300 hover:text-hoverGray">RESUME
                        </button>
                    </a></li>
                    <li className="float-right"><a href="/" className="">
                        <button
                            className="hover:underline ease-in-out duration-300 hover:text-hoverGray">INDEX
                        </button>
                    </a></li>
                </ul>
            </nav>

            <div className="col-start-1 col-span-15 mt-home-top">
                <h2 className="text-2.5xl font-eiko text-customGray">
                    Meet <span className="text-black"> Alex Luowan </span>, the data informed product designer creating
                    compelling digital experiences
                </h2>
            </div>

            <div className="col-start-1 col-span-full mt-12">
                <div>
                    <div className="flex flex-row gap-2">
                        <h4 className="text-base font-favorit">
                            Featured Works
                        </h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"
                             className="mt-0.5">
                            <path d="M6 2L6 10M6 10L3 7M6 10L9 7" stroke="black" stroke-width="0.75"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <hr className="bg-black mt-3 border-1 border-customGray"></hr>
                </div>
            </div>

            <div className="col-start-1 col-span-12 mt-8 text-base font-favorit">
                <a href="/projects/88rising">
                <Image src="/img/88rising/88rising-thumbnail.png"
                       alt="a laptop displaying a black website with red accents" width={3075} height={1672}></Image>
                <div>
                    <h4 className="float-right">2023</h4>
                    <h4 className="mt-thumbnail-top">88rising</h4>
                </div>
                <h4 className="-mt-1 text-customGray">Experience Design</h4>
                </a>
            </div>

            <div className="col-start-13 col-span-full mt-8 text-base font-favorit">
                <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
                       alt="a laptop" width={3075} height={1672}></Image>
                <div>
                    <h4 className="float-right">2022</h4>
                    <h4 className="mt-thumbnail-top">Give Me Yesterday</h4>
                </div>
                <h4 className="-mt-1 text-customGray">Interaction Design, Art Direction</h4>
            </div>

        </main>
    )
}
