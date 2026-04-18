import React from "react";
import profileImage from "./assets/profile.png";

const icons = {
  LinkedIn: "in",
  GitHub: "</>",
  Email: "@",
  Frontend: "<>",
  Backend: "{}",
  "Data & Tools": "[]",
  AI: "AI",
  Project: "*",
};

const heroParagraphs = [
  "I am a software engineer with over 4+ years of experience working across manufacturing technology, full-stack development, and live broadcast graphics systems. My work sits at the intersection of reliable engineering and real-world execution, whether that means digitizing plant operations for global manufacturers or delivering real-time data systems for high-pressure sports productions.",
  "I enjoy building practical solutions with MERN, .NET, Python, and AI-assisted development workflows. I am especially drawn to projects where software has to perform reliably in dynamic environments and where speed, ownership, and problem solving directly impact outcomes.",
];

const aboutParagraphs = [
  "My background spans two demanding domains: enterprise manufacturing systems and sports broadcast technology. In manufacturing, I have worked extensively with DELMIA Apriso MES to automate production, quality, maintenance, and warehouse workflows for large-scale global operations. In sports technology, I have built and supported systems that process live data, drive broadcast graphics, and help production teams deliver smooth on-air experiences across major events.",
  "Beyond writing code, I value understanding the environment in which software is used. That mindset has helped me work effectively with plant teams, global stakeholders, broadcasters, operators, and fast-moving production teams. I aim to build software that is not only technically sound, but also dependable when it matters most.",
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", ".NET", "Python", "REST APIs"],
  },
  {
    title: "Data & Tools",
    items: ["SQL Server", "MongoDB", "Git", "Figma"],
  },
];

const timeline = [
  {
    company: "wTVision",
    role: "Software Development Engineer",
    label: "Live Productions",
    duration: "Nov 2024 - Present",
    bullets: [
      "Build MERN applications and Python data pipelines for sports workflows.",
      "Integrate live feeds, WebSockets, and graphics tooling for on-air delivery.",
      "Support venue deployments and operator-facing systems under live deadlines.",
    ],
    details: [
      "At wTVision, I work on sports broadcast and real-time graphics systems where software reliability directly affects live productions. My role includes developing MERN stack applications for sports data management, building Python-based data pipelines, integrating external APIs and WebSocket feeds, and supporting internal .NET applications used in graphics workflows.",
      "I also work with VizRT scripting in Visual Basic to connect live data with on-screen broadcast graphics and automate operator tasks. Beyond development, I travel to live venues, deploy systems on site, train operators, and handle last-minute client requirements during major events. This has given me hands-on experience across IPL, international cricket, tennis, golf, kabaddi, and other live sports productions where fast decisions and stable systems are essential.",
      "In this environment, I regularly use AI tools such as ChatGPT, Cursor AI, and Claude to accelerate debugging, stress testing, and solution design, helping me move quickly while maintaining quality under pressure.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Associate System Engineer",
    label: "Industry 4.0",
    duration: "Dec 2021 - Nov 2024",
    bullets: [
      "Implemented DELMIA Apriso MES solutions for global manufacturing plants.",
      "Automated production, maintenance, quality, and warehouse processes.",
      "Worked across UAT, deployment, and production support with distributed teams.",
    ],
    details: [
      "During my time at TCS, I worked on MES implementation for one of the world's largest steel wire transformation and coating manufacturers. My work focused on automating critical manufacturing processes across production, quality, maintenance, and warehouse operations using DELMIA Apriso.",
      "I supported large-scale operations across Europe and China plants, collaborated with global teams during deployment and UAT cycles, and contributed to production support in live operational environments. This role strengthened my understanding of industrial systems, business process digitization, and the importance of building software that improves efficiency while reducing manual intervention.",
    ],
  },
  {
    company: "Head Field Solutions Pvt. Ltd.",
    role: "Technical Recruiting",
    label: "US IT Recruiter",
    duration: "Feb 2020 - Apr 2020",
    bullets: [
      "Joined during my 3rd year of B.Tech to strengthen communication skills and improve English fluency.",
      "Worked as a US IT recruiter, designing and executing recruitment strategies for technical roles.",
      "Sourced, screened, and evaluated candidates based on client requirements.",
      "Collaborated with clients and internal teams to understand hiring needs.",
      "Gained experience working across multiple US time zones from India.",
    ],
    details: [
      "Head Field Solutions Pvt. Ltd. | Feb 2020 - Apr 2020 | Noida, India (On-site)",
      "This experience helped me build communication confidence early in my career while learning how to operate in a client-facing, deadline-driven environment.",
    ],
  },
];

const projectHighlights = [
  {
    title: "Broadcast Graphics Automation",
    description:
      "My work has included end-to-end MES automation for global manufacturing environments, where the goal was to digitize and streamline plant-level operations across multiple business functions. I have also contributed to sports broadcast systems that depend on real-time data processing, low-latency communication, and visually accurate graphics rendering for live audiences.",
  },
  {
    title: "Manufacturing Digitization",
    description:
      "Another key area of my experience is VizRT graphics automation, where I have scripted workflows that map live data to broadcast graphics and reduce manual intervention for operators. Alongside that, I have been involved in live event deployments and on-ground system execution, helping teams run reliable technical setups in time-sensitive production environments.",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-gautam327",
  },
  {
    label: "GitHub",
    href: "https://github.com/vishal327",
  },
  {
    label: "Email",
    href: "mailto:vishalgautam271999@gmail.com",
  },
];

const skillParagraphs = [
  "My technical skill set includes Python, JavaScript, C#, and Java, with practical development experience across the MERN stack and .NET ecosystems. I work with technologies such as DELMIA Apriso MES, VizRT, REST APIs, and WebSockets, and I am comfortable building applications that rely on real-time data exchange and reliable backend integration.",
  "I have also worked with SQL Server, MySQL, and PostgreSQL for data-driven systems, and I actively incorporate modern AI tools such as ChatGPT, Cursor AI, and Claude Sonnet into my workflow for faster development, debugging, and experimentation. My strengths lie in ownership, adaptability, and the ability to deliver calmly in high-pressure production settings.",
];

const contactParagraph =
  "I am open to software engineering opportunities involving full-stack development, manufacturing systems, real-time applications, AI-assisted workflows, and broadcast technology. If you would like to discuss a role, project, or collaboration, feel free to reach out by email or connect with me through GitHub and LinkedIn.";

function Panel({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-[28px] border border-cyan-400/30 bg-slate-950/70 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_18px_80px_rgba(15,23,42,0.7)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_26px_90px_rgba(8,47,73,0.55)] ${className}`}
    >
      {title ? <h2 className="text-2xl font-semibold text-white">{title}</h2> : null}
      {children}
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_24%),linear-gradient(to_bottom,_rgba(15,23,42,0.98),_rgba(2,8,23,1))]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

        <main className="relative mx-1 px-1 py-5 sm:mx-2 sm:px-2 lg:mx-2 lg:px-2 lg:py-6">
          <section className="w-full rounded-[34px] border border-cyan-400/20 bg-slate-950/60 px-6 py-7 shadow-[0_30px_120px_rgba(2,8,23,0.85)] backdrop-blur-xl sm:px-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Software Engineer Portfolio
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Vishal Gautam
                </h1>
                <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
                  Software Engineer | AI-Augmented Developer | .NET & MERN Stack
                </p>
                <div className="mt-5 space-y-4 max-w-3xl">
                  {heroParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-300 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2">
                    India
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2">
                    4+ Years Experience
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2">
                    Manufacturing + Broadcast Tech
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 xl:min-w-[260px] xl:items-end">
                <div className="flex flex-wrap items-center gap-3 xl:justify-end">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-[11px] text-cyan-300">
                        {icons[link.label]}
                      </span>
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="rounded-full border border-cyan-300/60 bg-slate-950/80 p-2 shadow-[0_0_40px_rgba(56,189,248,0.28)]">
                  <img
                    src={profileImage}
                    alt="Vishal Gautam"
                    className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.55fr)]">
            <div className="grid gap-6">
              <Panel title="About Me" className="h-auto">
                <div className="mt-4 space-y-4">
                  {aboutParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-300 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Panel>

              <Panel title="AI-Driven Workflow">
                <div className="mt-4 space-y-3 text-slate-300">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-sm font-bold tracking-[0.2em] text-cyan-300">
                    {icons.AI}
                  </div>
                  <p className="text-sm leading-7 sm:text-base">
                    I use ChatGPT, Claude, and Cursor to accelerate debugging,
                    stress testing, refactoring, and solution design while
                    keeping production quality standards high.
                  </p>
                </div>
              </Panel>

              <Panel title="Tech Stack">
                <div className="mt-4 space-y-4">
                  {skillParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-300 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  {stackGroups.map((group) => (
                    <div key={group.title}>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xs font-semibold text-cyan-300">
                          {icons[group.title]}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-xl border border-slate-700 bg-slate-900/85 px-3 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="grid gap-6">
              <Panel title="Experience Timeline" className="h-auto">
                <div className="mt-5 space-y-6">
                  {timeline.map((item, index) => (
                    <div key={item.company} className="relative pl-7">
                      {index !== timeline.length - 1 ? (
                        <span className="absolute left-[7px] top-6 h-[calc(100%+18px)] w-px bg-slate-700" />
                      ) : null}
                      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">{item.company}</h3>
                        <span className="rounded-full border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-300">
                          {item.label}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-cyan-300">
                        {item.role}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">{item.duration}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                      <div className="mt-4 space-y-4">
                        {item.details.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-7 text-slate-300"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>

          <div className="mt-6 grid gap-6">
            <Panel title="Project Highlights">
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {projectHighlights.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-sm font-semibold text-cyan-300">
                        {icons.Project}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Contact & Collaboration" className="h-full">
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {contactParagraph}
              </p>

              <div className="mt-5 grid gap-4 text-sm text-slate-300 sm:grid-cols-3 sm:text-base">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:vishalgautam271999@gmail.com"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    vishalgautam271999@gmail.com
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/vishal327"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    github.com/vishal327
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/vishal-gautam327"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    linkedin.com/in/vishal-gautam327
                  </a>
                </p>
              </div>

              <a
                href="mailto:vishalgautam271999@gmail.com"
                className="mt-6 inline-flex rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
              >
                Let&apos;s Build Something Together
              </a>
            </Panel>
          </div>
        </main>
      </div>
    </div>
  );
}
