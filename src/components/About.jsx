import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-6 order-2 lg:order-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I craft digital products that balance aesthetics, performance, and usability. My focus areas include frontend engineering, design systems, and delightful micro-interactions. I enjoy turning complex problems into simple, beautiful interfaces.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
                <p className="text-3xl font-extrabold">6+</p>
                <p className="text-sm text-neutral-500">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
                <p className="text-3xl font-extrabold">30+</p>
                <p className="text-sm text-neutral-500">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-6 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20" />
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundImage: 'radial-gradient(20rem 20rem at 10% 20%, rgba(99,102,241,0.25), transparent), radial-gradient(18rem 18rem at 80% 40%, rgba(217,70,239,0.22), transparent), radial-gradient(22rem 22rem at 50% 90%, rgba(34,211,238,0.22), transparent)', backgroundRepeat: 'no-repeat' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
