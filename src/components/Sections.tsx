// components/Sections.tsx
import { Code2, GraduationCap, Briefcase, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper.tsx';
import { AnimatedDiv } from './UI/AnimatedDiv';

const projects = [
  {
    title: "Urbanfix",
    period: "Aug 2023 - May 2024",
    description: "Developed an Android app connecting local workers with residents needing home services",
    technologies: "Java, Android Studio, Firebase"
  },
  {
    title: "SharkBark",
    period: "Mar 2024 - May 2024",
    description: "Built a Python-based shark detection system using deep learning and computer vision",
    technologies: "Python, TensorFlow, Keras"
  },
  {
    title: "SecMail",
    period: "Aug 2022 - May 2023",
    description: "Created a secure email platform with end-to-end encryption and Gmail-like UI",
    technologies: "ReactJS, Firebase"
  },
  {
    title: "Twig",
    period: "Sep 2021 - Apr 2022",
    description: "Developed a social content aggregator app combining Reddit and Instagram features",
    technologies: "Java, Firebase"
  }
];

export const About = () => (
  <SectionWrapper bg="dark">
    <AnimatedDiv type="slideUp">
      <h2 className="text-3xl font-bold mb-12">SUMMARY</h2>
    </AnimatedDiv>
    <AnimatedDiv type="slideUp" delay={0.2}>
      <p className="text-gray-300 text-lg">
        Computer Science undergraduate with hands-on experience in full-stack development and real-time data analysis. 
        Passionate about building scalable applications with clean UI and strong backend logic. Particularly skilled 
        in designing and maintaining robust, scalable, and secure databases. Currently interning at GUVNL, working 
        on enterprise-level tools and data management platforms.
      </p>
    </AnimatedDiv>
  </SectionWrapper>
);

export const Education = () => (
  <SectionWrapper>
    <AnimatedDiv type="slideUp">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <GraduationCap className="w-8 h-8 text-purple-500" />
        EDUCATION
      </h2>
    </AnimatedDiv>

    <div className="space-y-8">
      <AnimatedDiv type="slideLeft">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Navrachana University | B.Tech. - Computer Science & Engineering</h3>
          <p className="text-gray-400">2022 - 2025</p>
        </div>
      </AnimatedDiv>

      <AnimatedDiv type="slideRight">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">N.G. Patel Polytechnic, Bardoli | Diploma in Computer Science and Engineering, GTU</h3>
          <p className="text-gray-400">2022</p>
        </div>
      </AnimatedDiv>
    </div>
  </SectionWrapper>
);

export const Experience = () => (
  <SectionWrapper bg="dark">
    <AnimatedDiv type="slideUp">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <Briefcase className="w-8 h-8 text-purple-500" />
        PROFESSIONAL EXPERIENCE
      </h2>
    </AnimatedDiv>

    <div className="space-y-8">
      <AnimatedDiv type="slideUp">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Gujarat Urja Vikas Nigam Limited (GUVNL) | Intern | Current</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-gray-300">Firewall Log Analyzer:</h4>
              <ul className="list-disc list-inside text-gray-400 ml-4">
                <li>Developed a Cisco ASA log analyzer with JavaScript backend and TSX-based frontend</li>
                <li>Created intuitive dashboards for security monitoring and analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-300">Interactive 3D Substation Application:</h4>
              <ul className="list-disc list-inside text-gray-400 ml-4">
                <li>Built a cross-platform Flutter application for web, Android, and iOS platforms</li>
                <li>Implemented interactive 3D models allowing users to explore substations and interact with components</li>
                <li>Designed for internal company use, enhancing training and operational efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  </SectionWrapper>
);

export const Projects = () => (
  <SectionWrapper>
    <AnimatedDiv type="slideUp">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <Code2 className="w-8 h-8 text-cyan-500" />
        PROJECTS
      </h2>
    </AnimatedDiv>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <AnimatedDiv key={index} type="slideUp" delay={index * 0.1}>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.period}</p>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-gray-400 mt-2">Technologies: {project.technologies}</p>
          </div>
        </AnimatedDiv>
      ))}
    </div>
  </SectionWrapper>
);

export const Skills = () => (
  <SectionWrapper bg="dark">
    <AnimatedDiv type="slideUp">
      <h2 className="text-3xl font-bold mb-12">TECHNICAL SKILLS</h2>
    </AnimatedDiv>
    <div className="grid md:grid-cols-2 gap-8">
      <AnimatedDiv type="slideLeft">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'JavaScript', 'Python', 'SQL', 'TSX/JSX'].map((lang) => (
              <span key={lang} className="px-3 py-1 bg-gray-700 rounded-full">{lang}</span>
            ))}
          </div>
        </div>
      </AnimatedDiv>

      <AnimatedDiv type="slideRight">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'ReactJS', 'TensorFlow', 'Keras'].map((framework) => (
              <span key={framework} className="px-3 py-1 bg-gray-700 rounded-full">{framework}</span>
            ))}
          </div>
        </div>
      </AnimatedDiv>

      <AnimatedDiv type="slideLeft">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {['Firebase', 'PostgreSQL', 'Supabase'].map((db) => (
              <span key={db} className="px-3 py-1 bg-gray-700 rounded-full">{db}</span>
            ))}
          </div>
        </div>
      </AnimatedDiv>

      <AnimatedDiv type="slideRight">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {['REST APIs', 'Computer Vision', '3D Modeling'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  </SectionWrapper>
);

export const Contact = () => (
  <SectionWrapper>
    <div className="text-center">
      <AnimatedDiv type="slideUp">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
          <Mail className="w-8 h-8 text-cyan-500" />
          CONTACT
        </h2>
      </AnimatedDiv>

      <AnimatedDiv type="slideUp" delay={0.2}>
        <p className="text-gray-300 mb-8 text-lg">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </AnimatedDiv>

      <AnimatedDiv type="slideUp" delay={0.4}>
        <div className="flex justify-center gap-6">
          <a href="mailto:depparmar3@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-8 h-8" />
          </a>
          <a href="tel:+919725362234" className="text-gray-400 hover:text-white transition-colors">
            <Phone className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/deep-parmar-29363527a/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/DepParmar" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-8 h-8" />
          </a>
        </div>
      </AnimatedDiv>
    </div>
  </SectionWrapper>
);