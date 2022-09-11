import {motion} from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Formula One',
            description: 'Website with stats about formula one from 1950 to 2021. Driver/Constructor details, standings, circuits, statistics showing points per circuit, map with the location of each circuit and schedule',
            links: {
                preview: 'https://georgiosdoudouliakis.github.io/formula-one/',
                code: 'https://github.com/GeorgiosDoudouliakis/formula-one'
            },
            technologies: ["Angular 2+", "Angular Material", "Open Layers", "Apace Echarts"]
        },
        {
            id: 2,
            title: 'Softare Development Company Employees',
            description: 'Management system for software development companies (only for large devices)',
            links: {
                preview: 'https://software-dev-company-employees.firebaseapp.com/auth/login',
                code: 'https://github.com/GeorgiosDoudouliakis/software-development-company-employees'
            },
            technologies: ["Angular 2+", "Angular Material", "Firebase"]
        }
    ];

    return (
        <motion.section id="projects" className="text-center py-10 px-6 bg-zinc-800 md:py-14 lg:py-16" initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <div className="flex justify-center text-3xl mb-8">
                <span className="mr-3 text-slate-300">03.</span>
                <h2 className="text-orange-500">Projects</h2>
            </div>
            <p className="mb-4 text-slate-300 xl:text-lg">Here are some projects i have built</p>
            <section className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-2 lg:w-3/5 lg:mx-auto">
                {
                    projects.map((project) => (
                        <motion.article key={project.id} className="p-4 bg-zinc-900 rounded" initial={{ opacity: 0, scale: 0 }}
                                 whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2*(project.id + 0.5) }} viewport={{ once: true }}>
                            <div className="flex justify-between align-middle mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-500 w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                <div className="flex">
                                    <a href={project.links.preview} rel="noreferrer" target="_blank" className="w-5 h-5 mb-auto ml-2 text-slate-300 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                    <a href={project.links.code} rel="noreferrer" target="_blank" className="w-5 h-5 mb-auto ml-2 text-slate-300 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-xl mb-2 text-slate-300 md:text-left">{project.title}</h3>
                            <p className="text-sm text-white mb-5 md:text-left">{project.description}</p>
                            <ul className="block text-center md:text-left">
                                {
                                    project.technologies.map((tech, techId) => (
                                        <li key={techId} className="inline-block text-sm mr-3 mb-3 text-slate-500">{tech}</li>
                                    ))
                                }
                            </ul>
                        </motion.article>
                    ))
                }
            </section>
        </motion.section>
    )
}