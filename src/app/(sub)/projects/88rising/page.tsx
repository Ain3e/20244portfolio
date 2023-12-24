import Image from 'next/image'

export default function Home() {
    return (
        <main className="antialiased">
            <section className="mx-8 grid grid-cols-24 gap-x-5 gap-y-0">
                <nav className="font-favorit text-xs col-span-full my-3 fixed top-0 left-8 w-full bg-white z-50">
                    <ul className="flex items-center">
                        <a href="/" className="text-black">
                            <li className="mr-3">ALEX LUOWAN</li>
                        </a>
                        <li className="mr-6"><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">WORK
                            </button>
                        </a></li>
                        <li className="mr-6"><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">ABOUT
                            </button>
                        </a></li>
                        <li className="mr-6"><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">RESUME
                            </button>
                        </a></li>
                        <li className="ml-auto"><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray">INDEX
                            </button>
                        </a></li>
                    </ul>
                </nav>
            </section>


            <section className="grid grid-cols-24 gap-x-5 gap-y-0">
                <Image src="/img/88rising/88rising-thumbnail.png"
                       alt="a laptop displaying a black website with red accents" width={3075} height={1672} className="col-start-1 col-span-full"></Image>
            </section>






        </main>
    )
}
