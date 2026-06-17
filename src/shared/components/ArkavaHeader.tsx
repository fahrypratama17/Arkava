import Image from "next/image";

const ArkavaHeader = () => {
  return (
    <div className="bg-white text-xl shadow-sm">
      <div className="mx-auto flex w-[95%] items-center justify-between">
        <Image
          src="/arkava.svg"
          alt="logo"
          width={200}
          height={200}
          className="h-auto w-20 md:w-40"
        />
      </div>
    </div>
  );
};

export default ArkavaHeader;
