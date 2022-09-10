import {motion} from "framer-motion";

export default function About() {
    const technologies = ["HTML5", "CSS3", "JavaScript", "TypeScript", "SCSS", "Git", "Angular 2+", "Angular JS", "React (currently learning)"];

    return (
      <motion.section id="about" className="text-center py-10 px-6 bg-zinc-800 md:py-14 lg:py-16" initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>
          <div className="container mx-auto">
            <div className="flex justify-center text-3xl mb-8">
                <span className="mr-3 text-slate-300">01.</span>
                <h2 className="text-orange-500">About Me</h2>
            </div>
            <div className="text-white mx-auto lg:w-3/5">
                <p className="mb-4 xl:text-lg">Hi! My name is George Doudouliakis and i am a Front End Web Developer located in Thessaloniki, GR. My enthusiasm for building websites brought me to the 'world' of <span className="text-slate-300">Front End Web Development</span> in early 2020. Started with simple websites and thereafter enhanced my  skills in <span className="text-slate-300">JavaScript</span>, i started learning <span className="text-slate-300">Angular 2+</span>.</p>
                <p className="mb-4 xl:text-lg">I'm passionate about what i do, i love solving problems and learning every day something new or enhance my existing skills. I try to write clean code in the best possible way in order to achieve better performance and coding experience with respect to user experience (UX).</p>
                <p className="mb-4 xl:text-lg">Technologies i use:</p>
                <ul>
                    {
                        technologies.map((technology, index) => <li key={index} className="inline-flex align-middle mr-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <span className="text-slate-300 text-sm md:text-base">{technology}</span>
                        </li>)
                    }
                </ul>
            </div>
          </div>
      </motion.section>
    );
}