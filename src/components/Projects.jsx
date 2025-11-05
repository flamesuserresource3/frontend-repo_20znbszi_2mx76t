import { ArrowUpRight, Code, Palette, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'Immersive portfolio experience with Spline and React. Responsive, accessible, and fast.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: 'https://github.com/',
    icon: Cpu,
  },
  {
    title: 'Design System Kit',
    description: 'Reusable UI components following shadcn patterns and Radix primitives.',
    tags: ['Design System', 'Accessibility', 'Radix'],
    link: 'https://github.com/',
    icon: Palette,
  },
  {
    title: 'Developer Toolbox',
    description: 'CLI + web dashboard for streamlining dev workflows and project scaffolding.',
    tags: ['Node', 'Automation', 'DX'],
    link: 'https://github.com/',
    icon: Code,
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition overflow-hidden"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition" />
        </div>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">A selection of work that blends technology and design.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            Contact me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
