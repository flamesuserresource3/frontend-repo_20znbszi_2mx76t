import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">Let’s collaborate</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Have a project in mind?</h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">I’m open for freelance work, product collaborations, and full-time opportunities.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold">
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="p-8 sm:p-12 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 dark:from-indigo-500/20 dark:via-fuchsia-500/20 dark:to-cyan-400/20">
              <form className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                  <input type="text" placeholder="Your name" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                  <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="mt-2 inline-flex justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-semibold">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
