import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* 3D Scene pinned to the right */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Spline
          scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950" />

      {/* Floating accents */}
      <motion.span
        className="pointer-events-none absolute left-10 top-40 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="pointer-events-none absolute right-24 top-24 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              className="lg:col-span-6 xl:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg:white/5 dark:bg-white/5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Modern • Interactive • Professional
              </motion.span>
              <motion.h1
                className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Elevate Your Portfolio with Immersive 3D
              </motion.h1>
              <motion.p
                className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                A sleek, animated portfolio for creators, developers, and designers. Crafted with responsive layouts, smooth micro-interactions, and a Spline-powered 3D hero.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-semibold shadow hover:opacity-90 transition"
                >
                  Lihat Proyek
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  Hubungi Saya
                </a>
              </motion.div>

              {/* Floating labels near CTA */}
              <div className="relative mt-10">
                <motion.div
                  className="absolute -left-2 -top-3 select-none"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs border border-neutral-200 dark:border-neutral-800">
                    Realtime 3D
                  </span>
                </motion.div>
                <motion.div
                  className="absolute left-40 -top-6 select-none"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs border border-neutral-200 dark:border-neutral-800">
                    Smooth Animations
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Spacer column for 3D on large screens */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 hidden sm:flex items-center gap-2 text-neutral-500">
            <div className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm"
            >
              Scroll untuk melihat lebih banyak
            </motion.span>
          </div>
        </div>
      </div>

      {/* Non-blocking top-right caption for 3D object */}
      <div className="pointer-events-none absolute right-3 top-28 hidden lg:block">
        <span className="rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs border border-neutral-200 dark:border-neutral-800">
          Interactive Keyboard — drag to explore
        </span>
      </div>
    </section>
  );
}
