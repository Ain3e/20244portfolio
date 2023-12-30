export default function Footer() {
    return(
        <footer className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 antialiased gap-y-0 mt-20 ">
            <hr className="col-start-1 col-span-full lg:col-span-24 border-customGray"></hr>
            <h4 className="text-base text-customGray font-favorit col-span-3 my-4">
                Vancouver, Canada
            </h4>
            {/*<h4 className="text-base text-customGray font-favorit invisble lg:visible lg:col-start-5 lg:col-span-4 my-4">*/}
            {/*    Made with React and Next.js*/}
            {/*</h4>*/}
            <a href="mailto:webmaster@example.com" className="text-base text-customGray font-favorit invisible md:visible lg:visible lg:col-start-10 lg:col-span-4 my-4">
                <h4 >
                    Email: <span className="text-black">aluowan@sfu.ca</span>
                </h4>
            </a>

            <h4 className="text-base text-customGray font-favorit lg:col-start-24 md:col-start-12 col-start-6 lg:col-span-1 my-4 text-right">
                2024
            </h4>
        </footer>
    );
}

