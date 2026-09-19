import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white text-xl shadow-xl">
      <div className="mx-auto flex w-[95%] items-center justify-between">
        <Image
          src="arkava.svg"
          alt="logo"
          width={200}
          height={200}
          className="h-auto w-20 md:w-40"
        />
        <div className="flex cursor-pointer items-center justify-between gap-12 text-base">
          <p>Home</p>
          <p>Roadmap</p>
          <p>Mengapa Arkava</p>
        </div>
        <Link
          href="/materi"
          className="flex w-full max-w-50 cursor-pointer items-center justify-end text-white"
        >
          <span className="bg-blue-550 w-[50%] rounded-[18px] py-2 text-center text-base">
            Mulai
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
