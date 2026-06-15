import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { cardData } from "@/features/Home/data/data";
import Image from "next/image";
import Link from "next/link";

const Roadmap = () => {
  return (
    <section className="section mx-auto min-h-screen w-[95%]">
      <div className="mx-auto flex w-[70%] flex-col gap-8 text-center">
        <p className="bg-blue-450 mx-auto w-full max-w-75 rounded-[80px] py-3 text-3xl font-bold shadow-xl">
          Roadmap
        </p>
        <h1 className="text-5xl font-bold">
          Jalur Pembelajaran Web Development
        </h1>
        <p className="text-xl">
          Setiap website besar berawal dari satu baris kode. Pelajari fondasi
          web development secara bertahap dan berkembang hingga mampu membangun
          aplikasi modern dengan standar industri.
        </p>
      </div>
      <div className="mt-30">
        <div className="relative mx-auto mt-30">
          <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gray-300" />

          {cardData.map(
            ({ id, icon, title, desc, benefit, className, link }) => (
              <div
                key={id}
                className={`relative mb-20 flex ${
                  id % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="bg-blue-550 absolute left-1/2 z-10 mt-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-xl font-bold text-white">
                  {id}
                </div>

                <Card
                  className={`w-[45%] rounded-[32px] px-4 shadow-2xl ${className}`}
                  key={id}
                >
                  <CardHeader>
                    <Image src={icon} alt={title} width={62} height={62} />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="text-lg">{desc}</p>
                    {benefit.map((item, index) => (
                      <div className="flex gap-2" key={index}>
                        <Image
                          src="check.svg"
                          alt="check"
                          width={22}
                          height={22}
                        />
                        <p className="text-lg">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="flex items-center justify-end border-none bg-transparent bg-none">
                    <Link
                      href={link}
                      className="bg-blue-550 w-full max-w-40 cursor-pointer rounded-[18px] py-3 text-center text-lg text-white"
                    >
                      Jelajahi Materi
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
