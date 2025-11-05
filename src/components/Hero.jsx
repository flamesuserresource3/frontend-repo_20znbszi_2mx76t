import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[86vh] pt-28">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                Modern • Interactive • Professional
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Showcase Your Work with Confidence
              </h1>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed max-w-xl">
                A sleek portfolio for creators, developers, and designers. Crafted with responsive layouts, smooth interactions, and an immersive 3D hero.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-semibold shadow hover:opacity-90 transition"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="lg:col-span-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
