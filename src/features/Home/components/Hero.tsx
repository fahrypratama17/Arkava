import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid min-h-screen grid-cols-2 items-center justify-center">
      <div className="space-y-8">
        <h1 className="font-jakarta-700 text-5xl leading-[1.15]">
          Bangun Karier Tech Impian:{" "}
          <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            <br />
            Dari Baris Kode Pertama Hingga Siap Kerja
          </span>
        </h1>
        <p className="font-jakarta-400 w-[70%] text-base">
          Pelajari fondasi HTML, keindahan CSS, dan kecanggihan JavaScript
          melalui kurikulum terarah, latihan koding langsung di browser, serta
          portofolio nyata yang dilirik rekruter.
        </p>
        <button className="font-jakarta-500 bg-blue-550 w-full max-w-40 cursor-pointer rounded-[18px] py-3 text-base text-white">
          Jelajahi Materi
        </button>
      </div>
      <div>
        <Image src="hero.svg" alt="hero" width={750} height={500} />
      </div>
    </section>
  );
};

export default Hero;
