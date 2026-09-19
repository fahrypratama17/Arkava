import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="grid min-h-screen grid-cols-2 items-center justify-center">
      <div className="space-y-8">
        <h1 className="font-jakarta-700 text-5xl leading-[1.15] text-white">
          Bangun Karier Tech Impian:{" "}
          <span className="from-blue-450 via-blue-250 to-blue-350 bg-linear-to-r bg-clip-text text-transparent">
            <br />
            Dari Baris Kode Pertama Hingga Siap Kerja
          </span>
        </h1>
        <p className="font-jakarta-400 w-[70%] text-base text-white">
          Pelajari fondasi HTML, keindahan CSS, dan kecanggihan JavaScript
          melalui kurikulum terarah, latihan koding langsung di browser, serta
          portofolio nyata yang dilirik rekruter.
        </p>
        <button className="font-jakarta-700 bg-blue-550 flex w-fit cursor-pointer items-center gap-2 rounded-[18px] px-4 py-3 text-base text-white">
          Jelajahi Materi Sekarang{" "}
          <ArrowRight size={24} className="size-4 font-bold lg:size-5" />
        </button>
      </div>
      <div>
        <Image src="hero.svg" alt="hero" width={750} height={500} />
      </div>
    </section>
  );
};

export default Hero;
