import Image from 'next/image';
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor />
            </div>
            <title>Options For Sexual Health</title>
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


            <Image src="/img/givemeyesterday/givemeyesterday-thumbnail.png"
                   alt="a laptop"
                   width={3075}
                   height={1672}
                   className="w-full mt-10 lg:mt-0"
            >
            </Image>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-9">
                <div className="col-start-1 col-span-6 lg:col-span-17">
                    <h2 className="lg:text-3xl text-mobileheader1 font-montreal">
                        A pre-exhibition microsite, showcasing artworks from 14 artists for Fondazione
                        Prada&rsquo;s &ldquo;Give Me
                        Yesterday&rdquo; exhibition.
                    </h2>
                </div>
                <div
                    className="lg:col-start-20 lg:col-span-5 col-span-6 font-favoritmono text-bodycopy row-start-2 mt-10 lg:mt-0 lg:row-start-1 text-orangehighlight">
                    <h4>
                        CONTRIBUTION
                    </h4>
                    <p className="mt-1 text-black font-favorit">UI Designer , Researcher,
                        Decision Maker, Leadership</p>
                    <h4 className="mt-4">
                        CREDITS
                    </h4>
                    <p className="mt-1 text-black font-favorit">Ethan Allwood, Christy Fang, Jalene Pang </p>

                </div>

                <hr className="col-start-1 col-span-full border-customGray mt-8"></hr>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-6 md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Project Overview
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        This project was undertaken as part of the Eunoia UX Design Hackathon 2023, where our team
                        comprised four individuals. For those unfamiliar with the term, a hackathon is a dynamic event
                        that fosters rapid and collaborative coding efforts within a condensed timeframe. During the hackathon,
                        participants work intensively to ideate, prototype, and develop solutions to specific challenges or themes.

                    </p>
                </div>

                <a href="#solution" className="row-start-2 mt-10 col-span-4">
                    <button
                        className="font-favorit text-base border-black py-3 px-10 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 ">
                        Jump to Solution
                    </button>
                </a>
            </div>

            <div className="mx-8 grid sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing:  <span className="text-customGray"> Client Interview </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Based on insights gained during the client interview, it's evident that Options for Sexual
                        Health excels in delivering current and research-backed information to the public. Nonetheless,
                        a notable weakness lies in the organization's ample information resources being inadequately exposed.

                    </p>
                </div>

                <Image src="/img/givemeyesterday/designqualities.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing:  <span className="text-customGray"> Primary Research </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        During the second week the main objective was to conduct research on a newly assigned mock
                        client and design three variations of a poster, a lamp post banner, and a ticket for one of
                        Fondazione Prada&rsquo;s exhibitions of our choice. My primary focus was on designing the
                        poster,
                        which significantly influenced the style of the other assets. Balancing the necessary research
                        and design work within the span of a week was a substantial challenge. After a few days of
                        effort and iteration, we successfully created a poster that worked. However, the other assets
                        were not as successful in achieving the desired impact.
                    </p>
                </div>

                <Image src="/img/givemeyesterday/firstphysicaliteration.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing:  <span className="text-customGray"> Secondary Research </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Following the feedback received from the second week, our focus this week centered on converging
                        and iterating to elevate our design. I conceptualized an extended banner and directional asset
                        that aligns more closely with the artistic direction established by the poster. Our stylistic
                        approach drew considerable influence from Radical Swiss Modernism, embracing elements such as
                        asymmetry, restrained color palettes, and purposefully contrasting imagery. The implementation
                        of Friedman&#39;s Typographical Scale adjustments, Tall Columns, and Superimposed images played a
                        crucial role in achieving cohesion in the project.
                    </p>
                </div>

                <Image src="/img/givemeyesterday/finalphysicaliteration.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing:  <span className="text-customGray"> Heuristic Evaluation </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        When creating the initial version of our microsite, the team conducted a reassessment of our
                        posters and assets to pinpoint the essential qualities defining our art direction. However,
                        during the development of our microsite, it became apparent that we were experimenting with
                        interaction
                        design independently of our visual design. This diverge made it challenging to establish a sense
                        of unity and articulate clear rationales for our design decisions. To tackle this issue, we
                        sought additional precedents and contemplated how our interactions could harmonize with the
                        qualities defining our art direction.
                    </p>
                </div>

                <Image src="/img/givemeyesterday/firstdigitaliterationoverview.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20" id="solution">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing:  <span className="text-customGray"> Framing the Problem  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        How might we create a quick and easy way to find information for ages 18 to 39 in order
                        to answer sexual health questions through the internet?

                    </p>
                </div>

                <Image src="/img/givemeyesterday/finaldigitaliterationoverview.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>




            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Thanks for Reading: <span className="text-customGray"> Lessons Learned  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Crafting this visual identity was a journey of exploration that not only honed my skills in
                        visual and digital design but also expanded my overall perspective on design. It made me
                        recognize that design isn&#39;t confined to the present; it draws inspiration from the past and
                        shapes the future. The prospect of inspiring others through our creations adds an intriguing
                        dimension to this experience.


                    </p>


                </div>

            </div>


        </main>
    )
}
