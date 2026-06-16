import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between gap-16 bg-[#f4f4f4] p-12">
      <div className="flex w-[40%] flex-col justify-between">
        <Image src="/arkava.svg" alt="arkava logo" width={163} height={71} />
        <p className="w-[80%]">
          &copy; {new Date().getFullYear()} Arkava Education. Empowering the
          next generation of web developers.
        </p>
      </div>
      <div className="flex w-[25%] flex-col justify-between gap-3 text-lg">
        <p className="text-blue-550 font-bold">Courses</p>
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
      </div>
      <div className="flex w-[25%] flex-col justify-between gap-3 text-lg">
        <p className="text-blue-550 font-bold">Feature</p>
        <a href="">Home</a>
        <a href="">Learning Path</a>
        <a href="">Mengapa Arkava</a>
      </div>
      <div className="flex w-[40%] flex-col justify-between gap-3 text-lg">
        <p className="text-blue-550 font-bold">Ikuti Kami</p>
        <Link href="" target="_blank" className="flex items-center gap-2">
          <Image src="/insta.svg" alt="instagram" width={24} height={24} />
          <p>@fahrypp</p>
        </Link>
        <Link href="" target="_blank" className="flex items-center gap-2">
          <Image src="/gmail.svg" alt="email" width={24} height={24} />
          <p>m.fahry.pratama.putra@gmail.com</p>
        </Link>
        <Link href="" target="_blank" className="flex items-center gap-2">
          <Image src="/wa.svg" alt="whatsapp" width={24} height={24} />
          <p>089651622100</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
