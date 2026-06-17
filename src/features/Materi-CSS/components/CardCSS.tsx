import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cssCard } from "@/features/Materi-CSS/data/data";

const CardHTML = () => {
  return (
    <>
      {cssCard.map(({ id, icon, title, desc, benefit, className, link }) => (
        <div key={id}>
          <Card
            className={`h-full w-full rounded-[32px] px-4 shadow-2xl ${className}`}
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
                  <Image src="/check.svg" alt="check" width={22} height={22} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex items-center justify-end border-none bg-transparent bg-none">
              <Link
                href={link}
                className="text-blue-550 gap-2= flex cursor-pointer items-center justify-end text-center text-lg font-bold"
              >
                Mulai Baca
                <ArrowRight />
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardHTML;
