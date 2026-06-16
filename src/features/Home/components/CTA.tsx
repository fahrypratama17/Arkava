import Link from "next/link";

const CTA = () => {
  return (
    <section className="section bg-blue-550 flex min-h-screen flex-col items-center justify-center gap-12 rounded-[32px] p-20 text-center text-white">
      <h1 className="text-5xl font-bold">
        Setiap Developer Berawal dari Satu Langkah
      </h1>
      <p className="w-[70%] text-xl">
        Perjalanan belajar menjadi lebih terarah dengan materi yang disusun
        secara bertahap, diperkaya latihan dan proyek yang membantu mengubah
        pemahaman menjadi keterampilan.
      </p>
      <Link
        href=""
        className="text-blue-550 rounded-[18px] bg-white p-3 text-3xl font-bold"
      >
        Jelajahi Materi Sekarang
      </Link>
    </section>
  );
};

export default CTA;
