export default function About() {
    const technologies = ["HTML5", "CSS3", "JavaScript", "TypeScript", "SCSS", "Git", "Angular 2+", "Angular JS", "React (currently learning)"];

    return (
      <section id="about" className="flex justify-center align-middle py-10 px-6 bg-zinc-800 md:py-14 md:px-0 lg:py-16">
            <div className="px-6 lg:flex lg:justify-center">
                <h2 className="text-center text-3xl mb-8 lg:text-left lg:mr-8 lg:w-1/5 xl:mr-0">
                    <span className="mr-3 text-slate-300">01.</span>
                    <span className="text-orange-500">About Me</span>
                </h2>
                <div className="text-center text-white lg:text-left lg:w-3/5">
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
      </section>
    );
}