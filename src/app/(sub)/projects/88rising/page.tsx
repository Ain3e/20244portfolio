import Image from 'next/image'
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor />
            </div>
            <title>88rising</title>
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
                        <li><a href="https://drive.google.com/file/d/1NKzGeWxXDUfjf4Nm03pd0bN0vSfPW-DF/view?usp=sharing"
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

            <Image src="/img/88rising/88rising-thumbnail.png"
                   alt="a laptop"
                   width={3075}
                   height={1672}
                   className="w-full mt-10 lg:mt-0"
            >
            </Image>
            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-9">
                <div className="col-start-1 col-span-6 lg:col-span-17 md:col-span-8">
                    <h2 className="lg:text-3xl text-mobileheader1 font-montreal">
                        Reimagining 88risings website experience for fans to engage with
                        their favourite artists and stay informed.
                    </h2>
                </div>
                <div
                    className="lg:col-start-20 lg:col-span-5 col-span-6 font-favoritmono text-orangehighlight text-bodycopy row-start-2 mt-10 lg:mt-0 lg:row-start-1">
                    <h4>
                        CONTRIBUTION
                    </h4>
                    <p className="mt-1 font-favorit text-black">Art Direction, UI Designer , Researcher,
                        Decision Maker, Facilitator </p>
                    <h4 className="mt-4">
                        CREDITS
                    </h4>
                    <p className="mt-1 font-favorit text-black">Justin Yu, Luke Do, Terrence Xu, Claret Egwim-Nwagbara </p>

                </div>

                <hr className="col-start-1 col-span-full border-customGray mt-8"></hr>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-6 md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
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
                    <p className="text-bodycopy font-favorit mt-4">
                        I was responsible for conducting user research, content strategy, visuals, and interaction,
                        while also facilitating a design sprint.
                    </p>
                </div>

                <a href="#solution" className="row-start-2 mt-10 col-span-4">
                    <button
                        className="font-favorit text-base border-black py-3 px-10 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300">
                        Jump to Solution
                    </button>
                </a>

                {/*<Image src="/img/88rising/Vertical-line.png"*/}
                {/*       alt="a laptop"*/}
                {/*       width={1}*/}
                {/*       height={221}*/}
                {/*       className="lg:col-start-11 col-span-1 invisible lg:visible"*/}
                {/*>*/}
                {/*</Image>*/}

                <div
                    className="border-l border-black h-48 mt-10 lg:mt-0 md:h-40 lg:h-56 col-start-1 lg:col-start-11 col-span-1">

                </div>

                <div className="col-start-2 lg:col-start-12 md:col-span-10 lg:col-span-12 col-span-5 -ml-5 lg:ml-0">
                    <p className="text-mobileheader3 md:text-xl lg:text-2xl font-favorit mt-14 lg:mt-8 lg:leading-8">
                        For Asians and Asian Americans and just Asian youth globally,
                        there’s no real home on the Internet, or a company consistently
                        putting out things that either include Asian talent or Asian viewpoints in stories.
                    </p>
                    <p className="text-xs font-favorit mt-4 text-customGray">
                        Sean Miyashiro, CEO & Founder of 88rising
                    </p>
                </div>
            </div>

            <div className="mx-8 grid sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing: <span className="text-customGray"> Business Opportunity </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Despite a successful debut, they have struggled to maintain momentum, <span
                        className="font-bold"> losing over 2.6 billion
                        viewerships in the past 4 years. </span>
                        To find the root of the problem the team conducted user interviews and surveys involving <span
                        className="font-bold">89
                        respondents spanning from casual to
                        die-hard fans</span>, we aimed to delve into the core issues surrounding music-sharing habits
                        and
                        perceptions of 88rising and its roster
                        of artists.
                    </p>
                </div>

                <Image src="/img/88rising/statistics.png"
                       alt="a laptop"
                       width={3459}
                       height={1947}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing: <span className="text-customGray"> Uncovering Engagement Gaps </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Our findings revealed a notable lack of engagement attributed to a substantial awareness gap,
                        as <span className="font-bold">62% of respondents were unaware of 88rising&rsquo;s monthly releases.</span> Despite
                        the consensus
                        uncovered by user surveys regarding a decline in popularity,
                        <span className="font-bold"> 41% of casual fans linked it to perceived low engagement from the brand.</span>
                        These fans expressed interest in discovering new talents and experiencing the signature sounds
                        associated with 88rising.
                    </p>
                </div>

                {/*<Image src="/img/88rising/Vertical-line.png"*/}
                {/*       alt="a laptop"*/}
                {/*       width={1}*/}
                {/*       height={221}*/}
                {/*       className="col-start-11 col-span-1"*/}
                {/*>*/}
                {/*</Image>*/}
                <div
                    className="border-l border-black h-52 mt-10 lg:mt-0 md:h-40 lg:h-56 col-start-1 lg:col-start-11 col-span-1">

                </div>
                <div className="col-start-2 lg:col-start-12 md:col-span-10 lg:col-span-12 col-span-5 -ml-5 lg:ml-0">
                    <p className="text-mobileheader3 md:text-xl lg:text-2xl font-favorit mt-14 lg:mt-8 lg:leading-8">
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

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing: <span className="text-customGray"> Framing the Problem </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        From a business perspective, my team and I identified that 88rising fans were struggling to
                        engage with the diverse roster
                        and collaborative content scattered across various platforms. <span className="font-bold">We proposed an intervention
                        leveraging 88rising&rsquo;s unique Asian
                        American identity and diverse artists to enhance fan discovery, connection, and provide
                        visibility to artists who were previously overlooked.</span>
                    </p>
                </div>

                <Image src="/img/88rising/customerjourneymap.png"
                       alt="a laptop"
                       width={3459}
                       height={1947}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
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

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container"
                     id="solution">
                    <video loop className="w-full" preload="auto" poster="/img/88rising/videothumbnail.png" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/88rising/demo.mov" type="video/mp4"></source>
                    </video>

                </div>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray"> Cultural Familiarity </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Offering a point of departure and attracting casual audiences unfamiliar with where to start,
                        the incorporation of various languages aids in introducing fans to
                        new artists by establishing relatable connections rooted in asian language and culture.
                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/homepage.webm" type="video/webm"></source>
                        <source src="/video/88rising/homepage.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray"> Renewed Emphasis on Collaboration  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        88rising&rsquo;s artists bring together unique voices and styles, making them stand out from the
                        crowd.
                        On our artist pages, we&rsquo;ve ditched the usual static grid layout to give fans a more lively
                        and exciting experience. The contrasting movements represent a fresh clash of cultures.
                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/collaborations.webm" type="video/webm"></source>
                        <source src="/video/88rising/collaborations.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray"> Unique Artist Personalities  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        On each artist&rsquo;s page, fans will find stacks of images that neatly organize a ton of
                        relatable and personal content from various platforms onto one screen.
                        This design makes it easy for casual fans to dive into the world of artists they find
                        interesting.
                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/artists.webm" type="video/webm"></source>
                        <source src="/video/88rising/artists.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            {/*<div className="mx-8 grid grid-cols-24 gap-x-5 mt-20">*/}
            {/*    <Image src="/img/88rising/stakeholdervalue.png"*/}
            {/*           alt="a laptop"*/}
            {/*           width={4337}*/}
            {/*           height={1131}*/}
            {/*           className="col-start-1 col-span-full outline border-black"*/}
            {/*    >*/}
            {/*    </Image>*/}
            {/*</div>*/}

            <div
                className="font-favorit text-base border-black px-10 outline outline-1 mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20 py-10 lg:py-44">
                <h3 className="text-2xl font-montreal lg:col-start-5 col-span-full lg:col-span-5 font-semibold md:col-span-5">
                    Stakeholder Value
                </h3>
                <h4 className="text-mobileheader2 col-start-1 col-span-full lg:text-xl font-montreal lg:col-start-5 md:col-span-4 lg:col-span-5 row-start-2 mt-5">
                    <span className="text-customGray">(Business)</span> 88rising
                </h4>
                <p className="text-bodycopy font-favorit mt-5 lg:mt-16 col-start-1 col-span-7 lg:col-start-5 lg:col-span-8 row-start-3 lg:row-start-2">
                    Fostering a loyal fan base through increasing song engagements and merch sales. Highlighting lesser
                    known artists to deepen their talent pool all while further promoting Asian American media to
                    mainstream global audiences.
                </p>
                <h4 className="text-mobileheader2 col-start-1 col-span-full lg:text-xl font-montreal lg:col-start-14 md:col-span-4 lg:col-span-5 lg:row-start-2 row-start-4 mt-5">
                    <span className="text-customGray">(Consumer)</span> Fans
                </h4>
                <p className="text-bodycopy font-favorit mt-5 lg:mt-16 col-start-1 col-span-7 lg:col-start-14 lg:col-span-8 row-start-5 lg:row-start-2">
                    Helps create a more diverse music & artists range through enhanced discoverability and deeper
                    artists engagement. Fans gain an appreciation of the artist’s creativity, influences and personal
                    experiences.
                </p>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
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
                        for perfection rather than settling for &ldquo;good enough.&rdquo; This pursuit extended the
                        timeline until
                        the final three weeks when we focused on sprints, creating and refining the design.

                    </p>

                    <p className="text-bodycopy font-favorit mt-4"> I am grateful to both my team and the teaching staff
                        who helped me stay grounded during the
                        challenging weeks. :)
                    </p>
                </div>

            </div>


        </main>
    )
}
