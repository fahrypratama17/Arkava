import { jalurData } from "@/features/Home/data/data";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import Image from "next/image";

const PilihJalur = () => {
  return (
    <section className="section mx-auto mt-20 min-h-screen w-[95%]">
      <div className="mb-20 flex flex-col gap-8">
        <h1 className="text-center text-5xl font-bold">
          Mengapa Memilih <span className="text-blue-550">Jalur Arkava?</span>
        </h1>
        <p className="mx-auto w-[80%] text-center text-xl">
          Arkava dirancang untuk membuat proses belajar web development menjadi
          lebih terarah. Materi disusun secara bertahap, dipadukan dengan
          latihan dan proyek nyata agar setiap konsep dapat dipahami sekaligus
          diterapkan.
        </p>
      </div>
      <div className="grid grid-cols-[1.5fr_0.8fr] gap-8">
        {jalurData.map(({ id, icon, title, desc }) => (
          <Card
            className={`${id === 1 ? "border-t-blue-550 border-t-4" : ""}${id === 2 ? "bg-blue-550 text-white" : ""} ${id === 3 ? "border-t-purple-550 col-span-2 border-t-4" : ""} relative p-8 shadow-xl`}
            key={id}
          >
            <CardHeader>
              <Image src={icon} alt={title} width={62} height={62} />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="text-lg">{desc}</p>
              {id === 1 && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="bg-blue-550 h-full w-full rounded-full" />
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="bg-blue-550 h-full w-[60%] rounded-full" />
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="bg-blue-550 h-full w-[35%] rounded-full" />
                  </div>
                </div>
              )}
              {id === 3 && (
                <div className="absolute right-4 bottom-4">
                  <Image
                    src="hero-file.svg"
                    alt="file-image"
                    width={169}
                    height={169}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PilihJalur;
