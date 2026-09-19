"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "roadmap", label: "Roadmap", href: "/#roadmap" },
  { id: "mengapa", label: "Mengapa Arkava", href: "/#mengapa" },
];

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const moveIndicator = (id: string, instant = false) => {
    const link = linkRefs.current[id];
    if (!link || !indicator.current) return;
    gsap.to(indicator.current, {
      x: link.offsetLeft,
      width: link.offsetWidth,
      autoAlpha: 1,
      duration: instant ? 0 : 0.45,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    moveIndicator(active);
  }, [active]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(container.current, { autoAlpha: 1 });
        moveIndicator(active, true);
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(container.current, { autoAlpha: 1 });

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".nav-shell", { y: -80, autoAlpha: 0, duration: 0.8 })
          .from(
            ".nav-logo",
            { x: -20, autoAlpha: 0, rotate: -8, duration: 0.6 },
            "-=0.4",
          )
          .from(
            ".nav-item",
            { y: -12, autoAlpha: 0, duration: 0.4, stagger: 0.08 },
            "-=0.3",
          )
          .from(
            ".nav-cta",
            { scale: 0.8, autoAlpha: 0, duration: 0.5, ease: "back.out(2)" },
            "-=0.2",
          )
          .add(() => moveIndicator(active, true));

        gsap.fromTo(
          ".nav-shine",
          { xPercent: -150 },
          {
            xPercent: 250,
            duration: 1.2,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 2.5,
            delay: 1.5,
          },
        );
      });

      menuTl.current = gsap
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .fromTo(
          ".nav-mobile",
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration: 0.4 },
        )
        .from(
          ".nav-mobile-item",
          { x: -16, autoAlpha: 0, duration: 0.3, stagger: 0.06 },
          "-=0.2",
        )
        .to(".burger-top", { y: 6, rotate: 45, duration: 0.3 }, 0)
        .to(".burger-mid", { autoAlpha: 0, duration: 0.2 }, 0)
        .to(".burger-bot", { y: -6, rotate: -45, duration: 0.3 }, 0);
    },
    { scope: container },
  );

  useEffect(() => {
    if (open) menuTl.current?.play();
    else menuTl.current?.reverse();
  }, [open]);

  return (
    <div ref={container} className="invisible px-4 pt-4">
      <div className="nav-shell mx-auto w-full max-w-6xl">
        <div
          className={`rounded-3xl border backdrop-blur-xl transition-[background-color,border-color,box-shadow,padding] duration-500 ${
            scrolled
              ? "bg-black-950/80 border-blue-450/25 shadow-blue-650/20 px-4 py-2 shadow-lg"
              : "bg-black-950/40 border-white/10 px-5 py-3"
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <Link href="/#home" className="nav-logo shrink-0">
              <Image
                src="/arkava.svg"
                alt="Arkava"
                width={200}
                height={87}
                priority
                className="h-auto w-24 brightness-125 drop-shadow-[0_0_12px_rgba(77,142,255,0.45)] md:w-32"
              />
            </Link>

            <div
              className="relative hidden items-center gap-1 md:flex"
              onMouseLeave={() => moveIndicator(active)}
            >
              <span
                ref={indicator}
                className="bg-blue-450/15 border-blue-450/30 invisible absolute top-0 left-0 h-full rounded-full border shadow-[0_0_20px_rgba(77,142,255,0.25)]"
              />
              {navLinks.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  onMouseEnter={() => moveIndicator(id)}
                  onClick={() => setActive(id)}
                  className={`nav-item font-jakarta-600 relative z-10 rounded-full px-5 py-2 text-sm transition-colors duration-300 ${
                    active === id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="nav-cta">
                <Link
                  href="/materi"
                  className="group font-jakarta-700 from-blue-650 via-blue-550 to-blue-450 shadow-blue-550/30 hover:shadow-blue-450/50 relative flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r px-5 py-2.5 text-sm text-white shadow-lg transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="nav-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent" />
                  Mulai Belajar
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <button
                type="button"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border border-white/10 md:hidden"
              >
                <span className="burger-top h-0.5 w-5 rounded-full bg-white" />
                <span className="burger-mid h-0.5 w-5 rounded-full bg-white" />
                <span className="burger-bot h-0.5 w-5 rounded-full bg-white" />
              </button>
            </div>
          </div>

          <div className="nav-mobile invisible h-0 overflow-hidden md:hidden">
            <div className="flex flex-col gap-1 pt-3 pb-2">
              {navLinks.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={() => {
                    setActive(id);
                    setOpen(false);
                  }}
                  className={`nav-mobile-item font-jakarta-600 rounded-xl px-4 py-3 text-sm ${
                    active === id
                      ? "bg-blue-450/15 text-white"
                      : "text-white/60"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
