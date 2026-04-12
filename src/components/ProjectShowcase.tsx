import CarbonFiber from './UI/CarbonFiber';
import { AnimatedDiv } from './UI/AnimatedDiv';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    id: 1,
    title: "Urbanfix",
    tagline: "Service marketplace",
    period: "Aug 2023 - May 2024",
    description: "Developed an Android app connecting local workers with residents needing home services. Features real-time location tracking, secure payments, and verified worker profiles.",
    technologies: ["Java", "Android Studio", "Firebase", "Google Maps API"],
    impact: "50+ active users, 100+ completed services",
    color: "from-cyan-500/25 to-blue-600/20",
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: "SharkBark",
    tagline: "AI detection system",
    period: "Mar 2024 - May 2024",
    description: "Built a Python-based shark detection system using deep learning and computer vision. Real-time video analysis with 94% accuracy.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    impact: "94% detection accuracy, <200ms latency",
    color: "from-emerald-500/20 to-cyan-500/20",
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: "SecMail",
    tagline: "Secure communication",
    period: "Aug 2022 - May 2023",
    description: "Created a secure email platform with end-to-end encryption, Gmail-like UI, and privacy-first architecture.",
    technologies: ["ReactJS", "Firebase", "Encryption APIs"],
    impact: "End-to-end encrypted messaging",
    color: "from-orange-500/20 to-amber-500/20",
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 4,
    title: "Twig",
    tagline: "Content aggregator",
    period: "Sep 2021 - Apr 2022",
    description: "Developed a social content aggregator app combining Reddit and Instagram features with smart feed algorithms.",
    technologies: ["Java", "Firebase", "Social APIs"],
    impact: "Real-time feed aggregation",
    color: "from-fuchsia-500/20 to-pink-600/20",
    liveUrl: '#',
    codeUrl: '#'
  }
];

export const ProjectShowcase = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 py-24 md:px-8">
      {/* Dual texture background: Carbon fiber base + silk overlay */}
      <div className="absolute inset-0">
        <CarbonFiber speed={2} scale={2.5} color="#0a0a0a" waveAmplitude={0.08} rotation={0.4} />
      </div>

      {/* Layered gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.1),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header */}
        <AnimatedDiv type="slideUp" className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-100/80">Selected Work</p>
          <h2 className="mb-4 font-['Space_Grotesk'] text-4xl font-semibold tracking-[0.14em] text-white md:text-5xl">
            FEATURED PROJECTS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Showcasing real-world applications built with modern tech, clean architecture, and a focus on user experience.
          </p>
        </AnimatedDiv>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedDiv
              key={project.id}
              type="slideUp"
              delay={index * 0.1}
              className="group"
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/25 hover:shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
              >
                
                {/* Accent gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-widest text-gray-300 mb-3">
                      {project.tagline}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.period}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact/Stats */}
                  <div className="mb-6 p-3 rounded-lg border border-white/10 bg-white/5">
                    <p className="text-cyan-300 text-sm font-medium">{project.impact}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-gray-200 transition-all duration-200 group-hover:border-white/30 group-hover:bg-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex gap-3 border-t border-white/10 pt-4">
                    <a href={project.liveUrl} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                    <a href={project.codeUrl} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
