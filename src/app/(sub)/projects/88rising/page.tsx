import Image from 'next/image'
import React from "react";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="bg-white fixed top-0 left-0 right-0 z-50">
                <nav className="mx-8 grid grid-cols-24 gap-x-5 font-favorit text-xs py-4">
                    <ul className="flex flex-row col-span-12 gap-3">
                        <li><a href="/" className="">ALEX LUOWAN</a></li>
                        <li>—</li>
                        <li><a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray text-customGray underline">WORK
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
                    <div className="col-start-24">
                        <a href="/" className="">
                            <button
                                className="hover:underline ease-in-out duration-300 hover:text-hoverGray " >INDEX
                            </button>
                        </a>
                    </div>
                </nav>
            </div>

            <Image src="/img/88rising/88rising-thumbnail.png"
                   alt="a laptop"
                   width={3075}
                   height={1672}
                   className="col-start-13 col-span-12"
            >
            </Image>
            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-9">
                <div className="col-start-1 col-span-17">
                    <h2 className="text-3xl font-eiko">
                        Reimagining 88risings website experience for fans to engage with
                        their favourite artists and stay informed.
                    </h2>
                </div>
                <div className="col-start-20 col-span-5 font-favorit text-base row-start-1">
                    <h4>
                        Contribution
                    </h4>
                    <p className="mt-1 text-customGray">Art Direction, UI Designer , Researcher,
                        Decision Maker, Facilitator </p>
                    <h4 className="mt-4">
                        Credits
                    </h4>
                    <p className="mt-1 text-customGray">Justin Yu, Luke Do, Terrence Xu, Claret Egwim-Nwagbara </p>

                </div>

                <hr className="col-start-1 col-span-24 border-customGray mt-8"></hr>

            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Project Overview
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        88rising stands as a multimedia record label committed to bridging the cultural gap between the
                        East and West. Through the promotion of Asian and Asian American culture across diverse media
                        platforms, the company aims to foster a deeper understanding and appreciation. This redesigned
                        88rising website serves as a touchpoint for fans, offering an enhanced experience to explore
                        details about their cherished artists, while also extending support to lesser-known talents,
                        thereby expanding their influence.
                    </p>
                    <p className="text-base font-favorit mt-4">
                        I was responsible for conducting user research, content strategy, visuals, and interaction,
                        while also facilitating a design sprint.
                    </p>
                </div>

                <a href="#solution" className="row-start-2 mt-10 col-span-4">
                    <button
                        className="font-favorit text-base border-black py-3 px-10 outline hover:bg-black hover:border-white hover:text-white ease-in-out duration-300 ">
                        Jump to Solution
                    </button>
                </a>

                <Image src="/img/88rising/Vertical-line.png"
                       alt="a laptop"
                       width={1}
                       height={221}
                       className="col-start-11 col-span-1"
                >
                </Image>
                <div className="col-start-12 col-span-12">
                    <p className="text-2xl font-favorit mt-8 leading-8">
                        For Asians and Asian Americans and just Asian youth globally,
                        there’s no real home on the Internet, or a company consistently
                        putting out things that either include Asian talent or Asian viewpoints in stories.
                    </p>
                    <p className="text-xs font-favorit mt-4 text-customGray">
                        Sean Miyashiro, CEO & Founder of 88rising
                    </p>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Research + Framing: <span className="text-customGray"> Business Opportunity </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Despite a successful debut, they have struggled to maintain momentum, losing over 2.6 billion
                        viewerships in the past 4 years.
                        To find the root of the problem the team conducted user interviews and surveys involving 89
                        respondents spanning from casual to
                        die-hard fans, we aimed to delve into the core issues surrounding music-sharing habits and
                        perceptions of 88rising and its roster
                        of artists.
                    </p>
                </div>

                <Image src="/img/88rising/statistics.png"
                       alt="a laptop"
                       width={3459}
                       height={1947}
                       className="col-start-11 col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Research + Framing: <span className="text-customGray"> Uncovering Engagement Gaps </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Our findings revealed a notable lack of engagement attributed to a substantial awareness gap,
                        as 62% of respondents were unaware of 88rising&rsquo;s monthly releases. Despite the consensus
                        uncovered by user surveys regarding a decline in popularity,
                        41% of casual fans linked it to perceived low engagement from the brand.
                        These fans expressed interest in discovering new talents and experiencing the signature sounds
                        associated with 88rising.
                    </p>
                </div>

                <Image src="/img/88rising/Vertical-line.png"
                       alt="a laptop"
                       width={1}
                       height={221}
                       className="col-start-11 col-span-1"
                >
                </Image>
                <div className="col-start-12 col-span-12">
                    <p className="text-2xl font-favorit mt-8 leading-8">
                        The big names seem stagnant, while many new artists lack exposure, creating an opportunity for
                        more variety.
                        This introduces people to different sounds beyond the usual big names, providing something new
                        to discover and listen to.
                    </p>
                    <p className="text-xs font-favorit mt-4 text-customGray">
                        Survey Respondent - Research Conducted by the team
                    </p>
                </div>

            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Research + Framing: <span className="text-customGray"> Framing the Problem </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        From a business perspective, my team and I identified that 88rising fans were struggling to
                        engage with the diverse roster
                        and collaborative content scattered across various platforms. We proposed an intervention
                        leveraging 88rising&rsquo;s unique Asian
                        American identity and diverse artists to enhance fan discovery, connection, and provide
                        visibility to artists who were previously overlooked.
                    </p>
                </div>

                <Image src="/img/88rising/customerjourneymap.png"
                       alt="a laptop"
                       width={3459}
                       height={1947}
                       className="col-start-11 col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Result: <span className="text-customGray"> The New Fan Experience </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        This intervention invite fans to explore and delve deeper into artists they may not have
                        encountered previously.
                        It also introduces fans to the latest album releases,
                        fostering a dynamic environment for continuous discovery and appreciation of diverse musical
                        experiences.
                    </p>
                </div>

                <div className="col-start-11 col-span-14 video-container" id="solution">
                    <video loop className="w-full" preload="auto" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/88rising/demo.mov" type="video/mp4"></source>
                    </video>

                </div>

            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Result: <span className="text-customGray"> Cultural Familiarity </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Offering a point of departure and attracting casual audiences unfamiliar with where to start,
                        the incorporation of various languages aids in introducing fans to
                        new artists by establishing relatable connections rooted in asian language and culture.
                    </p>
                </div>

                <div className="col-start-11 col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/homepage.webm" type="video/webm"></source>
                        <source src="/video/88rising/homepage.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Result: <span className="text-customGray"> Renewed Emphasis on Collaboration  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        88rising&rsquo;s artists bring together unique voices and styles, making them stand out from the
                        crowd.
                        On our artist pages, we&rsquo;ve ditched the usual static grid layout to give fans a more lively
                        and exciting experience. The contrasting movements represent a fresh clash of cultures.
                    </p>
                </div>

                <div className="col-start-11 col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/collaborations.webm" type="video/webm"></source>
                        <source src="/video/88rising/collaborations.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Result: <span className="text-customGray"> Unique Artist Personalities  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        On each artist&rsquo;s page, fans will find stacks of images that neatly organize a ton of
                        relatable and personal content from various platforms onto one screen.
                        This design makes it easy for casual fans to dive into the world of artists they find
                        interesting.
                    </p>
                </div>

                <div className="col-start-11 col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/artists.webm" type="video/webm"></source>
                        <source src="/video/88rising/artists.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <Image src="/img/88rising/stakeholdervalue.png"
                       alt="a laptop"
                       width={4337}
                       height={1131}
                       className="col-start-1 col-span-full outline border-black"
                >
                </Image>
            </div>

            <div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-9">
                    <h3 className="text-2xl font-eiko">
                        Thanks for Reading: <span className="text-customGray"> Lessons Learned  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        My key learning from this project was learning to effectively frame a problem, taking into
                        account
                        not only the fans perspective but also considering the business side. I came to the realization
                        that
                        an issue like post-concert depression is applicable to any company, not just specific to
                        88rising
                        itself. Consequently, it took us 3-4 weeks to pinpoint the problem space, as my team and I aimed
                        for perfection rather than settling for &ldquo;good enough.&rdquo; This pursuit extended the timeline until
                        the final three weeks when we focused on sprints, creating and refining the design.

                    </p>

                    <p className="text-base font-favorit mt-4"> I am grateful to both my team and the teaching staff who helped me stay grounded during the
                        challenging weeks. :)
                    </p>
                </div>

            </div>


        </main>
    )
}
