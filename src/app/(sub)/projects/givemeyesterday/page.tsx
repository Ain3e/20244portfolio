import Image from 'next/image';
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <main className="antialiased gap-y-0">
            <div className="App invisible lg:visible md:visible">
                <AnimatedCursor />
            </div>
            <title>Give Me Yesterday</title>
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
                        <li><a href="https://drive.google.com/file/d/1PBwoBSfcXmpyHU6bu6cvhG5LSckXrmjP/view?usp=sharing"
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
                    <p className="mt-1 text-black font-favorit">Art Direction, UI Designer , Researcher,
                        Decision Maker</p>
                    <h4 className="mt-4">
                        CREDITS
                    </h4>
                    <p className="mt-1 text-black font-favorit">Jasper Precilla, Sam Newaz, Karishma Sen, Claret
                        Egwim-Nwagbara </p>

                </div>

                <hr className="col-start-1 col-span-full border-customGray mt-8"></hr>

            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-6 md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Project Overview
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Fondazione Prada, based in Milan, Italy, is a contemporary art and culture center. It strives to
                        cultivate ideas and the way it can transform into cultural products such as literature, cinema,
                        music, philosophy, art and science. As the visual design lead for a team of five, I spearheaded
                        a significant five-week multimedia final project. Primarily developed in Figma and prototyped
                        using After Effects and ProtoPie, the project entailed the creation of a microsite for a
                        pre-exhibition within Fondazione Prada&rsquo;s exhibition space. This involved crafting new
                        branding,
                        three physical assets, and incorporating unique style elements inspired by researched designer
                        influences.

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
                        Designer Precedent: <span className="text-customGray"> Dan Friedman </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The first week of the project involved a deep dive into the works of American graphic designer,
                        Dan Friedman, understanding why he designed the way he did, what principle could be seen within
                        his work, and what made him significant. Analyzing and collecting as much of his work as
                        possible, as well as reading about the impact he had on the design world as a Radical Modernist.
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
                        Physical Assets: <span className="text-customGray"> First Iteration </span>
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
                        Physical Assets: <span className="text-customGray"> Second Iteration </span>
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
                        Microsite: <span className="text-customGray"> First Iteration </span>
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
                        Microsite: <span className="text-customGray"> Final Iteration </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The team chose to intervene during the pre-purchase phase by offering a preview of the
                        exhibition, providing a glimpse inside the box. Serving as a pre-exhibition site for art
                        installations, the microsite aims to capture the physical exhibition experience and immerse
                        visitors in a preview, enticing the audience to visit the exhibition in person.

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
                        Microsite: <span className="text-customGray"> Landing </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Greeting the visitor with floating images from the exhibition, each artist section and the
                        associated content are previewed through a colour representation. The transition from artist to
                        artist can be seamlessly achieved using a vertical scroll or by clicking through the navigation.
                        Hovering over the &ldquo;About the Artist&rdquo; section reveals a description of the work,
                        providing users
                        with the option to read more before entering the gallery. This design ensures the image remains
                        the primary focus while still catering to users who prefer to access additional information.

                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/givemeyesterday/homepage.webm" type="video/webm"></source>
                        <source src="/video/givemeyesterday/homepage.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>


            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Microsite: <span className="text-customGray"> Call to Action </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        Each artist has a preview displayed at a large scale. The circle cursor appears as the user is
                        moving across the artist landing page screen, when clicked upon it transitions the visitor to
                        the artist gallery. The intention was to maintain a consistent circle cursor throughout the
                        entire site, but, unfortunately, we were only able to implement it for this prototype due to the
                        limited amount of time.

                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/givemeyesterday/CursorTransition.webm" type="video/webm"></source>
                        <source src="/video/givemeyesterday/CursorTransition.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Microsite: <span className="text-customGray"> Parallax Image Gallery </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        The visitor is able to view all of the artist’s images in a long horizontal parallax scroll. By
                        layering the images on top of each other and moving them at different speeds as the user
                        scrolls, we apply the concept of figure and ground to create depth. When you reach the end of
                        the gallery, you can scroll past a resistive scroll which allows you to travel to the next
                        artist’s gallery.
                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/givemeyesterday/finalfinalparallax.webm" type="video/webm"></source>
                        <source src="/video/givemeyesterday/finalfinalparallax.mov" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full md:col-span-10 lg:col-span-9">
                    <h3 className="text-mobileheader2 lg:text-2xl font-montreal ">
                        Microsite: <span className="text-customGray"> Hover to View an Image in Full </span>
                    </h3>
                    <p className="text-bodycopy font-favorit mt-4">
                        By hovering over an image, the visitor is able to expand its size to view the image as a whole.
                        To better implement the concept of large scale shifts and figure and ground, the background will
                        shrink while the content is pushed to the side as the image expands.


                    </p>
                </div>

                <div className="col-start-1 col-span-full mt-16 lg:mt-0 lg:col-start-11 lg:col-span-14 video-container">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/givemeyesterday/finalfinalscale.webm" type="video/webm"></source>
                        <source src="/video/givemeyesterday/finalfinalscale.mov" type="video/mp4"></source>
                    </video>
                </div>
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
