import Clock from "@/app/components/Clock";

export default function Footer() {
    return(
        <footer className="mx-8 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-24 gap-x-5 antialiased gap-y-0 mt-20 ">
            <hr className="col-start-1 col-span-full lg:col-span-24 border-customGray"></hr>
            {/*<h4 className="text-base text-customGray font-favorit invisble lg:visible lg:col-start-5 lg:col-span-4 my-4">*/}
            {/*    Made with React and Next.js*/}
            {/*</h4>*/}
            <a href="mailto:webmaster@example.com" className="text-base font-favoritmono invisible md:visible lg:visible lg:col-start-1 lg:col-span-4 my-4">
                <h4 >
                    CONTACT: <span className="text-black">ALUOWAN@SFU.CA</span>
                </h4>
            </a>

            <div className="font-favoritmono text-base lg:col-start-9 col-span-6 my-4">
                <Clock/>
            </div>

            <h4 className="text-base font-favoritmono lg:col-start-20 md:col-start-12 col-start-12 my-4 col-span-full text-right">
                LAST UPDATED: 2024-01-23
            </h4>

        </footer>
    );
}

