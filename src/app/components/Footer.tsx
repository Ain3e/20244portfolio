export default function Footer() {
    return(
        <footer className="mx-8 grid grid-cols-24 gap-x-5 antialiased gap-y-0 mt-20">
            <hr className="col-start-1 col-span-24 border-customGray"></hr>
            <h4 className="text-base text-customGray font-favorit col-span-3 my-4">
                Vancouver, Canada
            </h4>
            <h4 className="text-base text-customGray font-favorit col-start-5 col-span-4 my-4">
                Made with React and Next.js
            </h4>
            <h4 className="text-base text-customGray font-favorit col-start-10 col-span-4 my-4">
                Email: aaluowan@gmail.com
            </h4>
            <h4 className="text-base text-customGray font-favorit col-start-24 col-span-1 my-4">
                2024
            </h4>
        </footer>
    );
}

