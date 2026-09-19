"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, MapIcon, Rocket } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const floatingTags = [
  { text: "<html>", className: "top-10 left-8 md:left-16 -rotate-12" },
  { text: "{ css }", className: "top-16 right-8 md:right-20 rotate-6" },
  { text: "( ) => {}", className: "bottom-12 left-10 md:left-24 rotate-6" },
  { text: "</>", className: "right-10 bottom-16 md:right-28 -rotate-6" },
];

const CTA = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: container.current, start: "top 75%" },
          })
          .from(".cta-box", { y: 60, scale: 0.96, autoAlpha: 0, duration: 0.9 })
          .from(
            ".cta-item",
            { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.12 },
            "-=0.5",
          )
          .from(
            ".cta-tag",
            { scale: 0, autoAlpha: 0, duration: 0.5, stagger: 0.08 },
            "-=0.4",
          );

        gsap.utils.toArray<HTMLElement>(".cta-tag").forEach((tag, i) => {
          gsap.to(tag, {
            y: i % 2 === 0 ? -12 : 12,
            duration: 2.5 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="my-24">
      <div className="cta-box from-blue-750 via-blue-550 to-blue-650 border-blue-350/30 relative overflow-hidden rounded-[32px] border bg-linear-to-br px-6 py-20 text-center text-white shadow-[0_30px_80px_-20px_rgba(37,115,230,0.6)] md:px-20 md:py-28">
        {/* Pola grid & cahaya */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[40px_40px]" />
        <div className="bg-blue-250/30 pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full blur-[100px]" />

        {floatingTags.map(({ text, className }) => (
          <span
            key={text}
            className={`cta-tag font-jakarta-700 pointer-events-none absolute hidden rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-sm sm:block ${className}`}
          >
            {text}
          </span>
        ))}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8">
          <span className="cta-item font-jakarta-600 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">
            <Rocket className="size-4" />
            Saatnya Mulai
          </span>

          <h2 className="cta-item font-jakarta-700 text-4xl leading-tight md:text-5xl">
            Setiap Developer Berawal dari{" "}
            <span className="text-blue-250">Satu Langkah</span>
          </h2>

          <p className="cta-item font-jakarta-500 text-base text-white/80 md:text-lg">
            Perjalanan belajar menjadi lebih terarah dengan materi yang disusun
            secara bertahap, diperkaya latihan dan proyek yang membantu mengubah
            pemahaman menjadi keterampilan.
          </p>

          <div className="cta-item flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/materi"
              className="group font-jakarta-700 text-blue-650 flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base shadow-lg transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(255,255,255,0.6)]"
            >
              Jelajahi Materi Sekarang
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#roadmap"
              className="font-jakarta-700 flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base text-white transition-[translate,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <MapIcon className="size-5" />
              Lihat Roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
