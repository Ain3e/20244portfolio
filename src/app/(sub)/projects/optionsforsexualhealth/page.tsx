import Image from 'next/image';
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor/>
            </div>
            <title>Options For Sexual Health</title>
            <div className="bg-dirtywhitebg fixed top-0 left-0 right-0 z-50">
                <nav
                    className="mx-8 grid grid-cols-6 lg:grid-cols-24 md:grid-cols-12 gap-x-5 font-favoritmono text-base py-4 -mb-4 md:mb-0 lg:mb-0">
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
                    <div
                        className="lg:col-span-5 md:col-span-5 lg:col-start-9 row-start-1 md:col-start-4 invisible md:visible lg:visible">
                        <p>INTERACTION/PRODUCT DESIGNER</p>
                    </div>
                </nav>
            </div>


            <Image src="/img/optionsforsexualhealth/mockup.png"
                   alt="a laptop"
                   width={3075}
                   height={1672}
                   className="w-full mt-10 lg:mt-0"
            >
            </Image>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-9">
                <div className="col-start-1 col-span-6 lg:col-span-17">
                    <h2 className="lg:text-3xl text-mobileheader1 font-montreal">
                        An optimized website intervention for Options for Sexual Health aims to streamline the online
                        search for sexual health information.
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
                        Options for Sexual Health champions a feminist, pro-choice, and sex-positive approach,
                        emphasizing choices and inclusivity. Their mission is to celebrate and champion the sexual
                        health of all people in British Columbia by providing inclusive and accessible health care and
                        education. The organization values engagement, inclusivity, honesty, openness, and community
                        involvement in promoting sexual health and informed decision-making. This three-stage
                        intervention serves as a crucial point of engagement for patients, offering a streamlined
                        approach to navigate and access sexual health information amidst the widespread and scattered
                        information.

                    </p>
                    <p className="text-bodycopy font-favorit mt-4">
                        I was responsible for conducting and leading user research, content strategy, visuals, and
                        interaction.

                    </p>
                    <div className="mt-10">
                        <a href="#solution" className="col-span-4">
                            <button
                                className="font-favorit text-base border-black py-3 px-10 outline outline-1 hover:bg-orangehighlight hover:border-white hover:text-black ease-in-out duration-300 ">
                                Jump to Solution
                            </button>
                        </a>
                    </div>

                </div>

                <Image src="/img/optionsforsexualhealth/about.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>


            </div>

            <div className="mx-8 grid sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing: <span className="text-customGray"> Client Interview </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4"> In this instance, I took the initiative to be the
                        spokesperson of the team.
                        Based on insights gained during the client interview, it&apos;s evident that Options for Sexual
                        Health excels in delivering current and research-backed information to the public. Nonetheless,
                        a notable <span className="font-semibold"> weakness </span> lies in the <span
                            className="font-semibold"> organization&apos;s ample information resources being inadequately
                        exposed. </span>

                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/clientinterview.png"
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
                        Research + Framing: <span className="text-customGray"> Primary Research </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        In navigating the delicate terrain of sexual health, we crafted an anonymous survey to delve
                        into the preferences and needs of our user demographic. Our research uncovered significant
                        insights: <span className="font-semibold">74% of respondents favor the internet as their primary source for accessing sexual
                        health information</span>, with <span className="font-semibold">58% expressing a preference for live chat</span> when
                        communicating with
                        staff. Moreover, the survey revealed a unanimous desire among participants for a <span
                        className="font-semibold">safe, inclusive
                        environment</span> that caters to diverse communities and needs.
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/surveyresults.png"
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
                        Research + Framing: <span className="text-customGray"> Secondary Research </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The survey questions are grounded in academic research and demographic insights gathered from
                        online sources, ensuring a well-informed approach to understanding our target audience.
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/secondaryresearch.png"
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
                        Research + Framing: <span className="text-customGray"> Heuristic Evaluation </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The survey highlighted the website&apos;s significant role as a trusted information source for
                        users.
                        Furthermore, our analysis indicated that the <span className="font-semibold">navigation structure is overly complex, containing
                        numerous duplicate links and pages, which could potentially hinder user experience. </span>
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/currentnavigation.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Research + Framing: <span className="text-customGray"> Framing the Problem </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        How might we create <span
                        className="font-semibold italic">a quick and easy  way to find information </span>for ages
                        <span className="font-semibold"> 18 to 39 </span> in order to <span className="font-semibold"> answer sexual health questions through the internet? </span>
                    </p>
                </div>

                {/*<Image src="/img/optionsforsexualhealth/secondaryresearch.png"*/}
                {/*       alt="a laptop"*/}
                {/*       width={6568}*/}
                {/*       height={3695}*/}
                {/*       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black"*/}
                {/*>*/}
                {/*</Image>*/}

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Design Process: <span className="text-customGray"> Three Phases</span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        <span className="font-bold text-xl">01/ </span>To address this issue, we divided our approach
                        into three primary phases. Initially, we each
                        brainstormed independently, <span className="font-semibold"> consolidating similar ideas thereafter. </span> This
                        phase emphasized
                        <span className="font-semibold"> generating a wide array of potential solutions. </span>
                    </p>

                    <p className="text-bodycopy font-favorit mt-4">
                        <span className="font-bold text-xl">02/ </span> <span className="font-semibold"> We selected the most promising ideas </span>from
                        the group and conducted a rapid analysis of their
                        <span className="font-semibold">  value and effort </span> to gauge the feasibility and
                        potential impact of the solutions.
                    </p>

                    <p className="text-bodycopy font-favorit mt-4">
                        <span className="font-bold text-xl">03/ </span> This brings us to our ultimate proposal: a <span
                        className="font-semibold">three-stage solution </span> comprising a <span
                        className="font-semibold"> navigation
                        overhaul, a suggestion-driven search feature</span>, and a <span className="font-semibold">live chat function</span>,
                        prioritized according to
                        implementation simplicity.
                    </p>


                </div>


                <Image src="/img/optionsforsexualhealth/designprocess.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>

            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Refinement: <span className="text-customGray"> Client Feedback </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Following the presentation of our initial 3-stage implementation plan to the client, they
                        approved the proposed navigation changes without requiring further adjustments. Meanwhile, we
                        dedicated our efforts to refining the plans for the second and third stages accordingly.
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/designdecisionvalidation.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                {/*<div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">*/}
                {/*    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">*/}
                {/*        Result: <span className="text-customGray"> Final Proposal </span>*/}
                {/*    </h3>*/}
                {/*</div>*/}

                <Image src="/img/optionsforsexualhealth/threepartsolutionv2.png"
                       alt="a laptop"
                       width={3927}
                       height={1308}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-1 lg:col-span-full outline border-black border"
                >
                </Image>

            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20 " id="solution">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray">Navigation Overhaul</span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The horizontal menu bar is restructured by <span className="font-semibold"> organizing the three levels of navigation and
                        eliminating overlapping links </span>. Additionally, the fixed menu bar at the top ensures that
                        visitors
                        can effortlessly access all pages, providing an enhanced experience that is more reliable and
                        consistent.
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/navbarsolution.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray">Suggestion-based Search</span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Insights gained from our client meetings revealed that while <span className="font-semibold"> individuals may have a general idea
                        of what they&apos;re seeking, they often lack precise search terms. </span>
                    </p>
                    <p className="text-bodycopy font-favorit mt-4">
                        To address this, the suggestion-based Search feature offers <span className="font-semibold"> auto-complete suggestions </span> and
                        presents a <span className="font-semibold">list of
                        frequently asked questions</span> on various topics, aiding users in finding the information
                        they
                        require.
                    </p>
                </div>

                <div
                    className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container outline border-black border outline-0">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/optionsforsexualhealth/navigation.webm" type="video/webm"></source>
                        <source src="/video/optionsforsexualhealth/navigation.mov" type="video/mp4"></source>
                    </video>
                </div>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Result: <span className="text-customGray">Live Assistant</span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Originally conceived as a live chat feature, our project evolved following insightful feedback
                        from our second client meeting. Recognizing the limitations of this approach, we adapted its
                        functionality to become a <span className="font-semibold"> question-and-response-based information tool. This tool redirects
                        users to pertinent pages on the website while also offering pre-screening capabilities to
                        enhance the efficiency of booking and contact forms. </span>
                    </p>
                    <p className="text-bodycopy font-favorit mt-4">
                        By providing users with an
                        alternative means of accessing information, our aim is to empower more individuals to address
                        their
                        inquiries directly on the website, potentially alleviating the high demand experienced by the
                        clinic.
                    </p>
                </div>

                <Image src="/img/optionsforsexualhealth/chatbotsolution.png"
                       alt="a laptop"
                       width={6568}
                       height={3695}
                       className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 outline border-black border"
                >
                </Image>

            </div>

            <div
                className="font-favorit text-base border-black px-10 outline outline-1 mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20 py-10 lg:py-44">
                <h3 className="text-2xl font-montreal lg:col-start-5 col-span-full lg:col-span-8 font-semibold md:col-span-8">
                    Stakeholder Value
                </h3>
                <h4 className="text-mobileheader2 col-start-1 col-span-full lg:text-xl font-montreal lg:col-start-5 md:col-span-6 lg:col-span-9 row-start-2 mt-5">
                    <span className="text-customGray">(Organization)</span> Options For Sexual Health
                </h4>
                <p className="text-bodycopy font-favorit mt-5 lg:mt-16 col-start-1 col-span-7 lg:col-start-5 lg:col-span-8 row-start-3 lg:row-start-2">
                    Redirecting inquiries to the website streamlines operations, reduces workload, and enhances
                    efficiency. A well-functioning website attracts more visitors, expanding outreach, while allowing
                    for better resource allocation to improve overall service quality.
                </p>
                <h4 className="text-mobileheader2 col-start-1 col-span-full lg:text-xl font-montreal lg:col-start-14 md:col-span-4 lg:col-span-5 lg:row-start-2 row-start-4 mt-5">
                    <span className="text-customGray">(Consumer)</span> Patients
                </h4>
                <p className="text-bodycopy font-favorit mt-5 lg:mt-16 col-start-1 col-span-7 lg:col-start-14 lg:col-span-8 row-start-5 lg:row-start-2">
                    The website provides patients with quick and efficient access to a wealth of sexual health
                    information, reducing the need for lengthy phone calls or clinic visits and leading to shorter wait
                    times for assistance. This improved access empowers patients to make more informed decisions about
                    their health.
                </p>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Thanks for Reading: <span className="text-customGray"> Lessons Learned  </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Through my participation in the 5-day design challenge and the UX hackathon, I significantly
                        enhanced my leadership, strategic thinking, and time management skills. These experiences, set
                        against the backdrop of fast-paced environments and stringent deadlines, not only honed my
                        ability to efficiently allocate everyone&apos;s time but also highlighted the importance of
                        prioritizing tasks. Furthermore, they taught me the value of fostering a collaborative team
                        dynamic, proving that a united team effort is crucial for achieving optimal results under
                        pressure. This combination of leadership, strategy, and efficient time management has prepared
                        me to navigate and thrive in challenging situations, making the most of every opportunity to
                        lead and innovate.


                    </p>


                </div>

            </div>


        </main>
    )
}
