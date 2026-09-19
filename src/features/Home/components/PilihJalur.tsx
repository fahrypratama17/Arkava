"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, Play, Sparkles } from "lucide-react";
import { jalurData } from "@/features/Home/data/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const modules = [
  {
    tag: "HTML",
    name: "Struktur & Semantik",
    value: 100,
    color: "bg-orange-400",
  },
  { tag: "CSS", name: "Layout & Responsif", value: 60, color: "bg-blue-450" },
  { tag: "JS", name: "Logika & DOM", value: 35, color: "bg-yellow-300" },
];

const snippets = [
  "<h1>Halo Dunia!</h1>",
  "<button>Klik Aku</button>",
  '<p class="glow">Keren!</p>',
];

const projects = [
  { name: "Landing Page", accent: "from-blue-550 to-blue-350" },
  { name: "To-Do App", accent: "from-purple-550 to-purple-350" },
  { name: "Dashboard", accent: "from-cyan-450 to-cyan-250" },
];

const projectSpread = [
  { x: -1, rotate: -9, y: 18 },
  { x: 0, rotate: 0, y: 0 },
  { x: 1, rotate: 9, y: 18 },
];

const projectTypes = [
  "Landing Page",
  "Portfolio Website",
  "To-Do App",
  "Weather App",
  "Dashboard",
  "E-Commerce",
];

const headingWords = ["Mengapa", "Memilih", "Jalur", "Arkava?"];

const cardBase =
  "pj-card group border-black-750 relative overflow-hidden rounded-[28px] border p-6 md:p-8";

const Spotlight = () => (
  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(500px_circle_at_var(--mx,50%)_var(--my,50%),rgba(77,142,255,0.15),transparent_60%)] group-hover:opacity-100" />
);

const PilihJalur = () => {
  const container = useRef<HTMLElement>(null);
  const codeText = useRef<HTMLSpanElement>(null);

  const [structured, interactive, portfolio] = jalurData;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const spreadX = (isDesktop: boolean) => (isDesktop ? 150 : 80);

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 768px)",
        },
        (ctx) => {
          const { reduce, isDesktop } = ctx.conditions as {
            reduce: boolean;
            isDesktop: boolean;
          };

          if (reduce) {
            projectSpread.forEach(({ x, rotate, y }, i) =>
              gsap.set(`.pj-project-${i}`, {
                x: x * spreadX(isDesktop),
                rotate,
                y,
              }),
            );
            return;
          }

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: { trigger: ".pj-header", start: "top 80%" },
            })
            .from(".pj-badge", {
              scale: 0.5,
              autoAlpha: 0,
              duration: 0.6,
              ease: "back.out(2)",
            })
            .from(
              ".pj-word",
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
            .from(".pj-intro", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4");

          gsap
            .timeline({
              defaults: { ease: "power4.out" },
              scrollTrigger: { trigger: ".pj-grid", start: "top 75%" },
            })
            .fromTo(
              ".pj-card",
              { clipPath: "inset(100% 0% 0% 0% round 28px)", y: 60 },
              {
                clipPath: "inset(0% 0% 0% 0% round 28px)",
                y: 0,
                duration: 1.1,
                stagger: 0.18,
              },
            )
            .from(
              ".pj-icon",
              {
                scale: 0,
                rotate: -120,
                duration: 0.7,
                stagger: 0.18,
                ease: "back.out(1.8)",
              },
              "-=0.9",
            )
            .from(
              ".pj-text",
              { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.06 },
              "-=0.8",
            );

          const moduleTl = gsap.timeline({
            scrollTrigger: { trigger: ".pj-modules", start: "top 80%" },
          });
          gsap.utils.toArray<HTMLElement>(".pj-module").forEach((mod, i) => {
            const q = gsap.utils.selector(mod);
            const value = modules[i].value;
            const counter = { v: 0 };
            const label = q(".pj-percent")[0];
            label.textContent = "0%";

            moduleTl
              .from(
                mod,
                { x: -30, autoAlpha: 0, duration: 0.5, ease: "power3.out" },
                i * 0.25,
              )
              .from(
                q(".pj-bar"),
                { width: 0, duration: 1.2, ease: "power2.out" },
                i * 0.25 + 0.2,
              )
              .to(
                counter,
                {
                  v: value,
                  duration: 1.2,
                  ease: "power2.out",
                  onUpdate: () => {
                    label.textContent = `${Math.round(counter.v)}%`;
                  },
                },
                "<",
              );

            if (value === 100) {
              moduleTl.from(
                q(".pj-check"),
                {
                  scale: 0,
                  rotate: -90,
                  duration: 0.5,
                  ease: "back.out(2.5)",
                },
                ">-0.1",
              );
            }
          });

          const loop = gsap.timeline({ repeat: -1, paused: true });
          snippets.forEach((text, i) => {
            const typed = { n: 0 };
            const erased = { n: text.length };
            const write = (n: number) => {
              if (codeText.current)
                codeText.current.textContent = text.slice(0, Math.round(n));
            };

            loop
              .to(typed, {
                n: text.length,
                duration: text.length * 0.05,
                ease: "none",
                onUpdate: () => write(typed.n),
              })
              .fromTo(
                ".pj-run",
                { scale: 1 },
                {
                  scale: 0.85,
                  duration: 0.12,
                  yoyo: true,
                  repeat: 1,
                  ease: "power1.inOut",
                },
                "+=0.2",
              )
              .fromTo(
                `.pj-preview-${i}`,
                { autoAlpha: 0, y: 12, scale: 0.9 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: "back.out(2)",
                },
              )
              .to(`.pj-preview-${i}`, {
                autoAlpha: 0,
                y: -12,
                duration: 0.3,
                delay: 1.4,
              })
              .to(
                erased,
                {
                  n: 0,
                  duration: text.length * 0.02,
                  ease: "none",
                  onUpdate: () => write(erased.n),
                },
                "<",
              );
          });

          gsap.set(".pj-preview", { autoAlpha: 0 });
          if (codeText.current) codeText.current.textContent = "";
          ScrollTrigger.create({
            trigger: ".pj-editor",
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
          });

          gsap.to(".pj-caret", {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.45,
            ease: "steps(1)",
          });

          projectSpread.forEach(({ x, rotate, y }, i) => {
            gsap.fromTo(
              `.pj-project-${i}`,
              { x: 0, rotate: 0, y: 30, scale: 0.9 },
              {
                x: x * spreadX(isDesktop),
                rotate,
                y,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: ".pj-projects",
                  start: "top 85%",
                  end: "center 45%",
                  scrub: 0.8,
                },
              },
            );
          });

          gsap.to(".pj-marquee", {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
          });
        },
      );

      const cleanups = gsap.utils
        .toArray<HTMLElement>(".pj-card")
        .map((card) => {
          const onMove = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${e.clientX - r.left}px`);
            card.style.setProperty("--my", `${e.clientY - r.top}px`);
          };
          card.addEventListener("pointermove", onMove);
          return () => card.removeEventListener("pointermove", onMove);
        });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="mengapa"
      className="section mx-auto mt-20 min-h-screen scroll-mt-28 py-24"
    >
      <div className="pj-header mx-auto mb-16 flex max-w-3xl flex-col items-center gap-6 text-center perspective-midrange">
        <span className="pj-badge border-purple-450/30 bg-purple-450/10 font-jakarta-600 text-purple-250 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-[0_0_24px_rgba(183,109,255,0.25)]">
          <Sparkles className="size-4" />
          Kenapa Arkava
        </span>
        <h2 className="font-jakarta-700 text-4xl leading-tight text-white md:text-5xl">
          {headingWords.map((word, i) => (
            <span
              key={word}
              className={`pj-word inline-block ${
                i >= 2
                  ? "from-blue-450 via-blue-250 to-purple-350 bg-linear-to-r bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>
        <p className="pj-intro font-jakarta-500 text-base text-white/70 md:text-lg">
          Arkava dirancang untuk membuat proses belajar web development menjadi
          lebih terarah. Materi disusun secara bertahap, dipadukan dengan
          latihan dan proyek nyata agar setiap konsep dapat dipahami sekaligus
          diterapkan.
        </p>
      </div>

      <div className="pj-grid grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className={`${cardBase} bg-black-850/70`}>
          <Spotlight />
          <div className="relative">
            <div className="pj-icon border-blue-450/30 bg-blue-450/10 flex size-14 items-center justify-center rounded-2xl border">
              <Image
                src={`/${structured.icon}`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <h3 className="pj-text font-jakarta-700 mt-6 text-2xl text-white md:text-3xl">
              {structured.title}
            </h3>
            <p className="pj-text font-jakarta-500 mt-3 text-base text-white/70">
              {structured.desc}
            </p>

            <div className="pj-modules mt-8 space-y-3">
              {modules.map(({ tag, name, value, color }) => (
                <div
                  key={tag}
                  className="pj-module border-black-750 bg-black-950/60 flex items-center gap-4 rounded-2xl border p-3"
                >
                  <span className="font-jakarta-700 bg-black-750 flex size-10 shrink-0 items-center justify-center rounded-xl text-[11px] text-white">
                    {tag}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-jakarta-600 mb-2 flex items-center justify-between text-sm text-white">
                      <span className="truncate">{name}</span>
                      <span className="pj-percent text-white/60">{value}%</span>
                    </div>
                    <div className="bg-black-750 h-2 overflow-hidden rounded-full">
                      <div
                        className={`pj-bar h-full rounded-full ${color}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                  <span
                    className={`pj-check flex size-7 shrink-0 items-center justify-center rounded-full ${
                      value === 100
                        ? "bg-cyan-250 text-black-950"
                        : "border-black-750 border"
                    }`}
                  >
                    {value === 100 && (
                      <Check className="size-4" strokeWidth={3} />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${cardBase} from-blue-650 via-blue-550 to-blue-750 border-blue-450/40 bg-linear-to-br`}
        >
          <Spotlight />
          <div className="relative flex h-full flex-col">
            <div className="pj-icon flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Image
                src={`/${interactive.icon}`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <h3 className="pj-text font-jakarta-700 mt-6 text-2xl text-white md:text-3xl">
              {interactive.title}
            </h3>
            <p className="pj-text font-jakarta-500 mt-3 text-base text-white/80">
              {interactive.desc}
            </p>

            <div className="pj-editor bg-black-950/80 mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:mt-auto">
              <div className="bg-black-850 flex items-center justify-between border-b border-white/10 px-4 py-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="size-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="pj-run font-jakarta-700 bg-cyan-250 text-black-950 flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px]">
                  <Play className="size-2.5 fill-current" />
                  Run
                </span>
              </div>
              <div className="flex h-12 items-center px-4 font-mono text-[13px]">
                <span className="text-white/30 select-none">1&nbsp;&nbsp;</span>
                <span ref={codeText} className="text-cyan-250 whitespace-pre">
                  {snippets[0]}
                </span>
                <span className="pj-caret bg-blue-350 ml-0.5 inline-block h-4 w-0.5" />
              </div>
              <div className="relative flex h-20 items-center justify-center border-t border-white/10 bg-white/3">
                <span className="font-jakarta-500 absolute top-2 left-3 text-[10px] tracking-widest text-white/30 uppercase">
                  Preview
                </span>
                <span className="pj-preview pj-preview-0 font-jakarta-800 absolute text-2xl text-white">
                  Halo Dunia!
                </span>
                <span className="pj-preview pj-preview-1 font-jakarta-700 bg-blue-550 invisible absolute rounded-lg px-4 py-2 text-sm text-white shadow-lg">
                  Klik Aku
                </span>
                <span className="pj-preview pj-preview-2 font-jakarta-700 text-cyan-250 invisible absolute text-xl drop-shadow-[0_0_10px_rgba(76,215,246,0.8)]">
                  Keren!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${cardBase} bg-black-850/70 md:col-span-2`}>
          <Spotlight />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="pj-icon border-purple-450/30 bg-purple-450/10 flex size-14 items-center justify-center rounded-2xl border">
                <Image
                  src={`/${portfolio.icon}`}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="pj-text font-jakarta-700 mt-6 text-2xl text-white md:text-3xl">
                {portfolio.title}
              </h3>
              <p className="pj-text font-jakarta-500 mt-3 text-base text-white/70">
                {portfolio.desc}
              </p>
            </div>

            <div className="pj-projects relative h-56 md:h-64">
              {projects.map(({ name, accent }, i) => (
                <div
                  key={name}
                  className={`pj-project-${i} absolute top-6 left-1/2 w-40 -translate-x-1/2 md:w-48 ${
                    i === 1 ? "z-10" : ""
                  }`}
                >
                  <div className="border-black-750 bg-black-950 overflow-hidden rounded-xl border shadow-2xl transition-[translate,box-shadow] duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(77,142,255,0.4)]">
                    <div className="bg-black-850 flex gap-1 px-2 py-1.5">
                      <span className="size-1.5 rounded-full bg-white/30" />
                      <span className="size-1.5 rounded-full bg-white/30" />
                      <span className="size-1.5 rounded-full bg-white/30" />
                    </div>
                    <div className="space-y-2 p-3">
                      <div
                        className={`h-12 rounded-md bg-linear-to-br ${accent}`}
                      />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                      <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        <div className="bg-black-750 h-5 rounded" />
                        <div className="bg-black-750 h-5 rounded" />
                        <div className="bg-black-750 h-5 rounded" />
                      </div>
                    </div>
                    <p className="font-jakarta-600 border-black-750 border-t px-3 py-2 text-xs text-white">
                      {name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="pj-marquee flex w-max">
              {[...projectTypes, ...projectTypes].map((type, i) => (
                <span
                  key={i}
                  className="font-jakarta-600 border-black-750 bg-black-950/60 mr-3 rounded-full border px-4 py-2 text-sm whitespace-nowrap text-white/70"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilihJalur;
