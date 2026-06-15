import Image from "next/image";

const Navbar = () => {
  return (
    <div className="text-xl shadow-xl">
      <div className="mx-auto flex w-[95%] items-center justify-between">
        <Image
          src="arkava.svg"
          alt="logo"
          width={200}
          height={200}
          className="h-auto w-20 md:w-50"
        />
        <div className="flex cursor-pointer items-center justify-between gap-12">
          <p>Home</p>
          <p>Roadmap</p>
          <p>Mengapa Arkava</p>
        </div>
        <button className="flex w-full max-w-50 cursor-pointer items-center justify-end text-white">
          <p className="bg-blue-550 w-[70%] rounded-[18px] py-3">Mulai</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
