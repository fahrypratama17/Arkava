"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, MapIcon, Rocket } from "lucide-react";
import { cardData } from "@/features/Home/data/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const accents: Record<
  number,
  { level: string; text: string; bar: string; glow: string; ring: string }
> = {
  1: {
    level: "Pemula",
    text: "text-orange-400",
    bar: "from-orange-500 to-orange-300",
    glow: "rgba(249,115,22,0.18)",
    ring: "border-orange-400/40 bg-orange-400/10",
  },
  2: {
    level: "Menengah",
    text: "text-blue-350",
    bar: "from-blue-550 to-blue-250",
    glow: "rgba(77,142,255,0.2)",
    ring: "border-blue-350/40 bg-blue-350/10",
  },
  3: {
    level: "Lanjutan",
    text: "text-yellow-300",
    bar: "from-yellow-500 to-yellow-200",
    glow: "rgba(250,204,21,0.16)",
    ring: "border-yellow-300/40 bg-yellow-300/10",
  },
};

const headingWords = "Jalur Pembelajaran Web Development".split(" ");

const Roadmap = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.utils
          .toArray<HTMLElement>(".rm-node")
          .forEach((node) => node.classList.add("is-active"));
      });

      mm.add(
        {
          isDesktop:
            "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          isMobile:
            "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { isDesktop, isMobile } = ctx.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };
          if (!isDesktop && !isMobile) return;

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: { trigger: ".rm-header", start: "top 80%" },
            })
            .from(".rm-badge", {
              scale: 0.5,
              autoAlpha: 0,
              duration: 0.6,
              ease: "back.out(2)",
            })
            .from(
              ".rm-word",
              {
                yPercent: 80,
                autoAlpha: 0,
                rotateX: -60,
                filter: "blur(6px)",
                duration: 0.8,
                stagger: 0.08,
              },
              "-=0.3",
            )
            .from(".rm-intro", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4");

          gsap.fromTo(
            ".rm-progress",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".rm-timeline",
                start: "top center",
                end: "bottom center",
                scrub: 0.6,
              },
            },
          );

          gsap.fromTo(
            ".rm-comet",
            { y: 0 },
            {
              y: () =>
                container.current?.querySelector<HTMLElement>(".rm-track")
                  ?.offsetHeight ?? 0,
              ease: "none",
              scrollTrigger: {
                trigger: ".rm-timeline",
                start: "top center",
                end: "bottom center",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );

          gsap.utils.toArray<HTMLElement>(".rm-step").forEach((step, i) => {
            const fromLeft = isDesktop && i % 2 === 0;
            const dir = fromLeft ? -1 : 1;
            const q = gsap.utils.selector(step);
            const node = q(".rm-node")[0];

            ScrollTrigger.create({
              trigger: node,
              start: "center center",
              onEnter: () => {
                node.classList.add("is-active");
                gsap.fromTo(
                  node,
                  { scale: 0.6 },
                  { scale: 1, duration: 0.9, ease: "elastic.out(1, 0.4)" },
                );
                gsap.fromTo(
                  q(".rm-node-ring"),
                  { scale: 1, autoAlpha: 0.8 },
                  { scale: 2.2, autoAlpha: 0, duration: 1, ease: "power2.out" },
                );
              },
              onLeaveBack: () => node.classList.remove("is-active"),
            });

            gsap
              .timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  trigger: step,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
                },
              })
              .from(q(".rm-card"), {
                x: dir * (isDesktop ? 140 : 50),
                rotateY: dir * -25,
                autoAlpha: 0,
                filter: "blur(10px)",
                duration: 0.9,
              })
              .from(
                q(".rm-connector"),
                { scaleX: 0, duration: 0.4, ease: "power2.inOut" },
                "-=0.6",
              )
              .from(
                q(".rm-bar"),
                { scaleX: 0, duration: 0.6, ease: "power2.inOut" },
                "-=0.4",
              )
              .from(
                q(".rm-icon"),
                {
                  scale: 0,
                  rotate: -180,
                  duration: 0.7,
                  ease: "back.out(1.8)",
                },
                "-=0.5",
              )
              .from(
                q(".rm-level"),
                { x: 20, autoAlpha: 0, duration: 0.4 },
                "-=0.4",
              )
              .from(
                q(".rm-text"),
                { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1 },
                "-=0.3",
              )
              .from(
                q(".rm-benefit"),
                { x: -20, autoAlpha: 0, duration: 0.4, stagger: 0.1 },
                "-=0.2",
              )
              .from(
                q(".rm-cta"),
                { y: 10, autoAlpha: 0, duration: 0.4 },
                "-=0.1",
              );

            gsap.fromTo(
              q(".rm-bignum"),
              { yPercent: 30 },
              {
                yPercent: -30,
                ease: "none",
                scrollTrigger: { trigger: step, scrub: true },
              },
            );
          });

          gsap
            .timeline({
              scrollTrigger: { trigger: ".rm-finish", start: "top 80%" },
            })
            .from(".rm-finish-icon", {
              scale: 0,
              rotate: -90,
              duration: 0.8,
              ease: "back.out(2)",
            })
            .from(
              ".rm-finish-text",
              { y: 15, autoAlpha: 0, duration: 0.5, stagger: 0.1 },
              "-=0.3",
            );

          gsap.to(".rm-finish-icon", {
            y: -6,
            repeat: -1,
            yoyo: true,
            duration: 1.6,
            ease: "sine.inOut",
          });
        },
      );

      const cleanups = gsap.utils
        .toArray<HTMLElement>(".rm-tilt")
        .map((card) => {
          const rotX = gsap.quickTo(card, "rotationX", {
            duration: 0.5,
            ease: "power3.out",
          });
          const rotY = gsap.quickTo(card, "rotationY", {
            duration: 0.5,
            ease: "power3.out",
          });

          const onMove = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            card.style.setProperty("--mx", `${px * 100}%`);
            card.style.setProperty("--my", `${py * 100}%`);
            rotY((px - 0.5) * 10);
            rotX((0.5 - py) * 10);
          };
          const onLeave = () => {
            rotX(0);
            rotY(0);
          };

          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          return () => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          };
        });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="roadmap"
      className="section mx-auto min-h-screen scroll-mt-28 py-24"
    >
      <div className="rm-header mx-auto flex max-w-3xl flex-col items-center gap-6 text-center perspective-midrange">
        <span className="rm-badge border-blue-450/30 bg-blue-450/10 font-jakarta-600 text-blue-250 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-[0_0_24px_rgba(77,142,255,0.25)]">
          <MapIcon className="size-4" />
          Roadmap Belajar
        </span>
        <h2 className="font-jakarta-700 text-4xl leading-tight text-white md:text-5xl">
          {headingWords.map((word, i) => (
            <span
              key={i}
              className={`rm-word inline-block ${
                i >= 2
                  ? "from-blue-450 via-blue-250 to-blue-350 bg-linear-to-r bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>
        <p className="rm-intro font-jakarta-500 text-base text-white/70 md:text-lg">
          Setiap website besar berawal dari satu baris kode. Pelajari fondasi
          web development secara bertahap dan berkembang hingga mampu membangun
          aplikasi modern dengan standar industri.
        </p>
      </div>

      <div className="rm-timeline relative mx-auto mt-24 max-w-6xl">
        <div className="rm-track pointer-events-none absolute top-0 bottom-0 left-6 w-1 -translate-x-1/2 rounded-full bg-white/10 md:left-1/2">
          <div className="rm-progress from-blue-450 via-blue-350 to-purple-450 absolute inset-0 origin-top rounded-full bg-linear-to-b shadow-[0_0_16px_rgba(77,142,255,0.8)]" />
          <div className="rm-comet bg-blue-250 absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_4px_rgba(129,170,255,0.9)]" />
        </div>

        <div className="flex flex-col gap-20">
          {cardData.map(({ id, icon, title, desc, benefit, link }, i) => {
            const accent = accents[id] ?? accents[2];
            const isLeft = i % 2 === 0;

            return (
              <div
                key={id}
                className="rm-step grid grid-cols-[3rem_1fr] items-center gap-x-6 md:grid-cols-[1fr_4rem_1fr]"
              >
                <div className="col-start-1 row-start-1 flex justify-center md:col-start-2">
                  <div className="rm-node border-black-750 bg-black-850 font-jakarta-700 [&.is-active]:border-blue-350 [&.is-active]:bg-blue-550 relative z-10 flex size-12 items-center justify-center rounded-full border-2 text-lg text-white/40 transition-[background-color,border-color,color,box-shadow] duration-500 md:size-14 [&.is-active]:text-white [&.is-active]:shadow-[0_0_28px_rgba(77,142,255,0.7)]">
                    <span className="rm-node-ring border-blue-350 pointer-events-none absolute inset-0 rounded-full border-2 opacity-0" />
                    {String(id).padStart(2, "0")}
                  </div>
                </div>

                <div
                  className={`relative col-start-2 row-start-1 perspective-distant ${
                    isLeft ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
                  <div
                    className={`rm-connector from-blue-450/80 absolute top-1/2 -left-6 hidden h-px w-6 bg-linear-to-l to-transparent sm:block ${
                      isLeft
                        ? "origin-left md:-right-6 md:left-auto md:origin-right md:bg-linear-to-r"
                        : "origin-right"
                    }`}
                  />

                  <div className="rm-card">
                    <div
                      className="rm-tilt group border-black-750 bg-black-850/70 hover:border-blue-450/40 relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 transform-3d hover:shadow-[0_20px_60px_-15px_rgba(77,142,255,0.35)] md:p-8"
                      style={{
                        backgroundImage: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), ${accent.glow}, transparent 60%)`,
                      }}
                    >
                      <div
                        className={`rm-bar absolute inset-x-0 top-0 h-1 origin-left bg-linear-to-r ${accent.bar}`}
                      />
                      <span className="rm-bignum font-jakarta-800 pointer-events-none absolute -right-2 -bottom-8 text-[9rem] leading-none text-white/4 select-none">
                        {String(id).padStart(2, "0")}
                      </span>

                      <div className="relative flex items-start justify-between gap-4">
                        <div
                          className={`rm-icon flex size-16 items-center justify-center rounded-2xl border ${accent.ring}`}
                        >
                          <Image
                            src={`/${icon}`}
                            alt={title}
                            width={40}
                            height={40}
                          />
                        </div>
                        <span
                          className={`rm-level font-jakarta-600 rounded-full border px-3 py-1 text-xs ${accent.ring} ${accent.text}`}
                        >
                          Tahap {id} · {accent.level}
                        </span>
                      </div>

                      <div className="relative mt-6 space-y-3">
                        <h3 className="rm-text font-jakarta-700 text-2xl text-white md:text-3xl">
                          {title}
                        </h3>
                        <p className="rm-text font-jakarta-500 text-base text-white/70">
                          {desc}
                        </p>
                      </div>

                      <ul className="relative mt-6 space-y-3">
                        {benefit.map((item) => (
                          <li
                            key={item}
                            className="rm-benefit font-jakarta-500 flex items-center gap-3 text-sm text-white/85 md:text-base"
                          >
                            <CheckCircle2
                              className={`size-5 shrink-0 ${accent.text}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="rm-cta relative mt-8 flex justify-end">
                        <Link
                          href={link}
                          className="group/btn font-jakarta-700 from-blue-650 to-blue-450 shadow-blue-550/30 flex items-center gap-2 rounded-full bg-linear-to-r px-5 py-3 text-sm text-white shadow-lg transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          Jelajahi Materi
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rm-finish mt-20 flex flex-col items-center gap-3 text-center">
        <div className="rm-finish-icon from-purple-550 to-blue-550 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br shadow-[0_0_40px_rgba(158,75,237,0.5)]">
          <Rocket className="size-8 text-white" />
        </div>
        <p className="rm-finish-text font-jakarta-700 text-2xl text-white">
          Siap Kerja!
        </p>
        <p className="rm-finish-text font-jakarta-500 max-w-md text-white/60">
          Selesaikan ketiga tahap dan bangun portofolio yang siap dilirik
          rekruter.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;
