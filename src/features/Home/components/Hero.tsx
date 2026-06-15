import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid min-h-screen grid-cols-2 items-center justify-center">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold">
          Kuasai Web Development{" "}
          <span className="text-blue-550">
            <br />
            dari Nol
          </span>
        </h1>
        <p className="w-[90%] text-xl">
          Jelajahi dunia pengembangan web melalui pembelajaran yang terstruktur,
          praktik langsung, dan proyek yang mencerminkan kebutuhan dunia nyata.
        </p>
        <button className="bg-blue-550 w-full max-w-60 cursor-pointer rounded-[18px] py-3 text-2xl text-white">
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
