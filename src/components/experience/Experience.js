import {motion} from "framer-motion";

export default function Experience() {
    const experience = [
        {
            period: {
                from: "March 2022",
                to: "Present"
            },
            jobTitle: "Front End Web Developer",
            company: {
                name: "Schoox, Inc",
                url: "https://www.schoox.com/"
            },
            technologies: ["AngularJS", "Angular 2+", "Bootstrap", "Tailwind", "NG-ZORRO"]
        },
        {
            period: {
                from: "April 2021",
                to: "January 2022"
            },
            jobTitle: "Front End Web Developer",
            company: {
                name: "KissMyButton",
                url: "https://kissmybutton.gr/"
            },
            technologies: ["Angular 2+", "Angular Material"]
        }
    ];

    return (
        <motion.section id="experience" className="text-center py-10 px-6 bg-zinc-900 md:py-14 lg:py-16" initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <div className="flex justify-center text-3xl mb-8">
                <span className="mr-3 text-slate-300">02.</span>
                <h2 className="text-orange-500">Experience</h2>
            </div>
            <section>
                {
                    experience.map((exp, expId) => (
                        <article key={expId} className="mb-8">
                            <span className="block text-center w-56 mb-3 mx-auto text-slate-300 md:text-left md:inline-block md:mx-0 md:mb-0">{exp.period.from} - {exp.period.to}</span>
                            <div className="inline-flex flex-col w-80 p-4 bg-zinc-800 rounded md:ml-16">
                                <h3 className="text-center text-slate-300 md:text-left">{exp.jobTitle}</h3>
                                <a href={exp.company.url} target="_blank" className="text-center mb-5 text-orange-500 hover:underline md:text-left">@{exp.company.name}</a>
                                <ul className="inline-flex flex-wrap justify-center md:justify-start">
                                    {
                                        exp.technologies.map((tech, techId) => (
                                            <li key={techId} className="inline-flex text-sm text-white mr-3 mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 mr-1 text-orange-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                                <span>{tech}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </article>
                    ))
                }
            </section>
        </motion.section>
    )
}