"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const linkGroups = [
  {
    title: "Courses",
    links: [
      { label: "HTML", href: "/materi/html" },
      { label: "CSS", href: "/materi/css" },
      { label: "JavaScript", href: "/materi/javascript" },
    ],
  },
  {
    title: "Feature",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Learning Path", href: "/#roadmap" },
      { label: "Mengapa Arkava", href: "/#mengapa" },
    ],
  },
];

const socials = [
  {
    icon: "/insta.svg",
    alt: "Instagram",
    label: "@fahrypp",
    href: "https://instagram.com/fahrypp",
  },
  {
    icon: "/gmail.svg",
    alt: "Email",
    label: "m.fahry.pratama.putra@gmail.com",
    href: "mailto:m.fahry.pratama.putra@gmail.com",
  },
  {
    icon: "/wa.svg",
    alt: "WhatsApp",
    label: "089651622100",
    href: "https://wa.me/6289651622100",
  },
];

const brand = "ARKAVA".split("");

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: container.current, start: "top 85%" },
          })
          .from(".ft-line", { scaleX: 0, duration: 1, ease: "power2.inOut" })
          .from(
            ".ft-col",
            { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.12 },
            "-=0.6",
          )
          .from(
            ".ft-link",
            { x: -12, autoAlpha: 0, duration: 0.4, stagger: 0.04 },
            "-=0.4",
          )
          .from(".ft-bottom", { y: 10, autoAlpha: 0, duration: 0.5 }, "-=0.2");

        gsap.from(".ft-letter", {
          yPercent: 100,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: { trigger: ".ft-brand", start: "top 95%" },
        });
      });
    },
    { scope: container },
  );

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      ref={container}
      className="bg-black-950 relative w-full overflow-hidden pt-16"
    >
      <div className="ft-line via-blue-450 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent shadow-[0_0_20px_rgba(77,142,255,0.8)]" />
      <div className="bg-blue-650/20 pointer-events-none absolute -top-40 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div className="ft-col space-y-5">
          <Image
            src="/arkava.svg"
            alt="Arkava"
            width={163}
            height={71}
            className="h-auto w-36 brightness-125 drop-shadow-[0_0_12px_rgba(77,142,255,0.4)]"
          />
          <p className="font-jakarta-500 max-w-xs text-sm leading-relaxed text-white/60">
            Empowering the next generation of web developers — belajar terarah
            dari baris kode pertama hingga siap kerja.
          </p>
        </div>

        {linkGroups.map(({ title, links }) => (
          <div key={title} className="ft-col space-y-4">
            <p className="font-jakarta-700 text-blue-350 text-sm tracking-widest uppercase">
              {title}
            </p>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label} className="ft-link">
                  <Link
                    href={href}
                    className="group font-jakarta-500 inline-flex items-center gap-1 text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative">
                      {label}
                      <span className="bg-blue-350 absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="ft-col space-y-4">
          <p className="font-jakarta-700 text-blue-350 text-sm tracking-widest uppercase">
            Ikuti Kami
          </p>
          <ul className="space-y-3">
            {socials.map(({ icon, alt, label, href }) => (
              <li key={alt} className="ft-link">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-black-750 bg-black-850/50 hover:border-blue-450/40 hover:bg-black-850 flex items-center gap-3 rounded-xl border px-3 py-2 transition-[border-color,background-color,translate] duration-300 hover:translate-x-1"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image src={icon} alt={alt} width={20} height={20} />
                  </span>
                  <span className="font-jakarta-500 truncate text-sm text-white/70 group-hover:text-white">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ft-bottom border-black-750 relative mx-auto mt-14 flex max-w-6xl flex-col-reverse items-center justify-between gap-4 border-t px-6 pt-6 sm:flex-row">
        <p className="font-jakarta-500 text-sm text-white/50">
          &copy; {new Date().getFullYear()} Arkava Education. All rights
          reserved.
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="group font-jakarta-600 border-black-750 hover:border-blue-450/50 flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
        >
          Kembali ke atas
          <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>

      {/* Teks brand besar */}
      <div
        aria-hidden
        className="ft-brand pointer-events-none mt-6 flex justify-center overflow-hidden select-none"
      >
        {brand.map((letter, i) => (
          <span
            key={i}
            className="ft-letter font-jakarta-800 from-blue-450/25 inline-block bg-linear-to-b to-transparent bg-clip-text text-[22vw] leading-[0.8] text-transparent md:text-[16vw]"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
