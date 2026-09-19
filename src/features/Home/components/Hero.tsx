"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileCode2,
  FileJson,
  Palette,
  Sparkles,
  Trophy,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

type Token = [text: string, className: string];

const kw = "text-purple-350";
const str = "text-cyan-250";
const fn = "text-blue-350";
const prop = "text-blue-250";
const punc = "text-white/70";
const cmt = "text-white/35 italic";

const codeLines: Token[][] = [
  [["// Mulai perjalananmu hari ini 🚀", cmt]],
  [
    ["const ", kw],
    ["developer", prop],
    [" = {", punc],
  ],
  [
    ["  nama", prop],
    [": ", punc],
    ['"Kamu"', str],
    [",", punc],
  ],
  [
    ["  skill", prop],
    [": [", punc],
    ['"HTML"', str],
    [", ", punc],
    ['"CSS"', str],
    [", ", punc],
    ['"JavaScript"', str],
    ["],", punc],
  ],
  [
    ["  status", prop],
    [": ", punc],
    ['"Siap Kerja"', str],
    [",", punc],
  ],
  [["};", punc]],
  [],
  [
    ["function ", kw],
    ["belajar", fn],
    ["(materi) {", punc],
  ],
  [
    ["  return ", kw],
    ["`Menguasai ${materi} ✨`", str],
    [";", punc],
  ],
  [["}", punc]],
  [],
  [
    ["developer", prop],
    [".skill.", punc],
    ["forEach", fn],
    ["(", punc],
    ["belajar", fn],
    [");", punc],
  ],
];

const files = [
  { name: "index.html", icon: FileCode2, color: "text-orange-400" },
  { name: "style.css", icon: Palette, color: "text-blue-350" },
  { name: "script.js", icon: FileJson, color: "text-yellow-300", active: true },
];

const titleWords = "Bangun Karier Tech Impian:".split(" ");
const gradientWords = "Dari Baris Kode Pertama Hingga Siap Kerja".split(" ");

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const progressText = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(container.current, { autoAlpha: 1 });
        if (progressText.current) progressText.current.textContent = "78%";
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(container.current, { autoAlpha: 1 });

        const progress = { value: 0 };
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
          .from(
            ".hero-word",
            {
              yPercent: 60,
              autoAlpha: 0,
              rotate: 4,
              filter: "blur(8px)",
              duration: 0.8,
              stagger: 0.05,
            },
            "-=0.2",
          )
          .from(".hero-desc", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4")
          .fromTo(
            ".hero-cta",
            { y: 20, autoAlpha: 0, scale: 0.95 },
            { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.12 },
            "-=0.3",
          )
          .from(
            ".hero-feature",
            { y: 10, autoAlpha: 0, duration: 0.4, stagger: 0.1 },
            "-=0.3",
          )
          .from(
            ".hero-ide",
            {
              x: 60,
              rotateY: -12,
              autoAlpha: 0,
              duration: 1,
              ease: "power4.out",
            },
            0.3,
          )
          .from(
            ".hero-file",
            { x: -10, autoAlpha: 0, duration: 0.3, stagger: 0.08 },
            "-=0.5",
          );

        gsap.utils.toArray<HTMLElement>(".hero-code-line").forEach((line) => {
          const chars = Math.max(line.textContent?.length ?? 1, 1);
          tl.fromTo(
            line,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: Math.min(chars * 0.025, 0.7),
              ease: `steps(${Math.min(chars, 30)})`,
            },
          );
        });

        tl.from(".hero-cursor", { autoAlpha: 0, duration: 0.1 })
          .from(".hero-terminal", { y: 15, autoAlpha: 0, duration: 0.5 })
          .from(
            ".hero-card",
            {
              scale: 0.6,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "back.out(1.8)",
            },
            "-=0.2",
          )
          .from(
            ".hero-progress-bar",
            { width: 0, duration: 1.2, ease: "power2.out" },
            "<",
          )
          .fromTo(
            progress,
            { value: 0 },
            {
              value: 78,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                if (progressText.current) {
                  progressText.current.textContent = `${Math.round(progress.value)}%`;
                }
              },
            },
            "<",
          );

        gsap.to(".hero-cursor", {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: "steps(1)",
        });
        gsap.to(".hero-float-a", {
          y: -14,
          repeat: -1,
          yoyo: true,
          duration: 2.6,
          ease: "sine.inOut",
        });
        gsap.to(".hero-float-b", {
          y: 12,
          repeat: -1,
          yoyo: true,
          duration: 3.2,
          ease: "sine.inOut",
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      id="home"
      ref={container}
      className="invisible relative grid min-h-screen grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:gap-8"
    >
      <div className="space-y-8">
        <div className="hero-badge border-blue-450/30 bg-blue-450/10 font-jakarta-600 text-blue-250 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="bg-cyan-250 absolute inline-flex size-full animate-ping rounded-full opacity-75" />
            <span className="bg-cyan-250 relative inline-flex size-2 rounded-full" />
          </span>
          Yuk, mulai belajar coding hari ini — gratis!
          <Sparkles className="text-purple-350 size-4" />
        </div>

        <h1 className="font-jakarta-700 text-4xl leading-[1.15] text-white filter-[drop-shadow(0_0_6px_rgba(77,142,255,0.55))_drop-shadow(0_0_24px_rgba(37,115,230,0.45))] lg:text-5xl">
          {titleWords.map((word, i) => (
            <span key={i} className="hero-word inline-block">
              {word}&nbsp;
            </span>
          ))}
          <br />
          {gradientWords.map((word, i) => (
            <span
              key={i}
              className="hero-word from-blue-450 via-blue-250 to-blue-350 inline-block bg-linear-to-r bg-clip-text pb-1 text-transparent"
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p className="hero-desc font-jakarta-500 text-base text-white/80 lg:w-[80%]">
          Pelajari fondasi HTML, keindahan CSS, dan kecanggihan JavaScript
          melalui kurikulum terarah, latihan koding langsung di browser, serta
          portofolio nyata yang dilirik rekruter.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="hero-cta">
            <Link
              href="/materi"
              className="group font-jakarta-700 from-blue-650 via-blue-550 to-blue-450 shadow-blue-550/30 hover:shadow-blue-450/50 flex w-fit items-center gap-2 rounded-[32px] bg-linear-to-r px-6 py-4 text-base text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Jelajahi Materi Sekarang
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 lg:size-5" />
            </Link>
          </div>
          <div className="hero-cta">
            <Link
              href="#roadmap"
              className="font-jakarta-700 border-blue-450/40 bg-blue-450/5 hover:border-blue-350 hover:bg-blue-450/15 flex w-fit items-center gap-2 rounded-[32px] border px-6 py-4 text-base text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen className="text-blue-350 size-4 lg:size-5" />
              Lihat Kurikulum
            </Link>
          </div>
        </div>

        <ul className="font-jakarta-500 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {["Kurikulum terarah", "Praktik di browser", "Portofolio nyata"].map(
            (item) => (
              <li key={item} className="hero-feature flex items-center gap-2">
                <CheckCircle2 className="text-cyan-250 size-4" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="relative perspective-distant">
        <div className="hero-ide border-black-750 bg-black-950/90 relative overflow-hidden rounded-2xl border shadow-2xl shadow-black/50 backdrop-blur">
          <div className="border-black-750 bg-black-850 flex items-center gap-2 border-b px-4 py-3">
            <span className="size-3 rounded-full bg-[#FF5F57]" />
            <span className="size-3 rounded-full bg-[#FEBC2E]" />
            <span className="size-3 rounded-full bg-[#28C840]" />
            <span className="font-jakarta-500 mx-auto pr-12 text-xs text-white/50">
              arkava — belajar-coding
            </span>
          </div>

          <div className="flex">
            <aside className="border-black-750 bg-black-850/50 hidden w-40 shrink-0 border-r py-3 sm:block">
              <p className="font-jakarta-600 px-4 pb-2 text-[10px] tracking-widest text-white/40 uppercase">
                Explorer
              </p>
              {files.map(({ name, icon: Icon, color, active }) => (
                <div
                  key={name}
                  className={`hero-file font-jakarta-500 flex items-center gap-2 px-4 py-1.5 text-xs ${
                    active
                      ? "bg-blue-450/15 border-blue-450 border-l-2 text-white"
                      : "text-white/60"
                  }`}
                >
                  <Icon className={`size-3.5 ${color}`} />
                  {name}
                </div>
              ))}
            </aside>

            <div className="min-w-0 flex-1">
              <div className="border-black-750 flex border-b">
                <div className="border-blue-450 bg-black-950 font-jakarta-500 flex items-center gap-2 border-t-2 px-4 py-2 text-xs text-white">
                  <FileJson className="size-3.5 text-yellow-300" />
                  script.js
                </div>
              </div>

              <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
                {codeLines.map((tokens, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 shrink-0 pr-4 text-right text-white/25 select-none">
                      {i + 1}
                    </span>
                    <span className="hero-code-line inline-block whitespace-pre">
                      {tokens.length === 0
                        ? " "
                        : tokens.map(([text, cls], j) => (
                            <span key={j} className={cls}>
                              {text}
                            </span>
                          ))}
                    </span>
                    {i === codeLines.length - 1 && (
                      <span className="hero-cursor bg-blue-350 ml-0.5 inline-block h-5 w-0.5 self-center" />
                    )}
                  </div>
                ))}
              </pre>

              <div className="hero-terminal border-black-750 bg-black-850/60 border-t px-4 py-3 font-mono text-xs">
                <p className="text-white/40">$ node script.js</p>
                <p className="text-cyan-250">✓ Menguasai HTML ✨</p>
                <p className="text-cyan-250">✓ Menguasai CSS ✨</p>
                <p className="text-cyan-250">✓ Menguasai JavaScript ✨</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-float-a absolute -top-6 -right-2 lg:-right-6">
          <div className="hero-card border-black-750 bg-black-850/90 w-48 rounded-xl border p-3 shadow-xl backdrop-blur">
            <div className="font-jakarta-600 mb-2 flex items-center justify-between text-xs text-white">
              <span>Progres Belajar</span>
              <span ref={progressText} className="text-blue-350">
                78%
              </span>
            </div>
            <div className="bg-black-750 h-2 overflow-hidden rounded-full">
              <div className="hero-progress-bar from-blue-450 to-purple-450 h-full w-[78%] rounded-full bg-linear-to-r" />
            </div>
          </div>
        </div>

        <div className="hero-float-b absolute -bottom-8 -left-2 lg:-left-8">
          <div className="hero-card border-black-750 bg-black-850/90 flex items-center gap-3 rounded-xl border p-3 pr-5 shadow-xl backdrop-blur">
            <div className="from-purple-550 to-blue-550 flex size-10 items-center justify-center rounded-lg bg-linear-to-br">
              <Trophy className="size-5 text-white" />
            </div>
            <div>
              <p className="font-jakarta-700 text-sm text-white">
                Tantangan Selesai!
              </p>
              <p className="font-jakarta-500 text-xs text-white/60">
                Semua tes berhasil lulus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
