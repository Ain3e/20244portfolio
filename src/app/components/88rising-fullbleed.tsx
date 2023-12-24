import Image from "next/image";

export default function A() {
    return(
            <div className="w-full">
                <Image
                    src="/img/88rising/88rising-thumbnail.png"
                    alt="a laptop"
                    width={3075}
                    height={1672}
                />
            </div>
    );
}

