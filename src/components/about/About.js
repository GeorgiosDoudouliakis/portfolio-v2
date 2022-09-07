export default function About() {
    return (
      <section id="about" className="flex justify-center align-middle py-10 px-6 bg-zinc-800 md:py-14 md:px-0 lg:py-16">
            <div className="px-6 lg:flex lg:justify-center">
                <h2 className="text-center text-3xl mb-8 lg:text-left lg:mr-8 lg:w-1/5 xl:mr-0">
                    <span className="mr-3 text-slate-300">01.</span>
                    <span className="text-orange-500">About Me</span>
                </h2>
                <div className="text-center text-white lg:text-left lg:w-3/5">
                    <p className="pb-4 xl:text-lg">Hi! My name is George Doudouliakis and i am a Front End Web Developer located in Thessaloniki, GR. My enthusiasm for building websites brought me to the 'world' of <span className="text-slate-300">Front End Web Development</span> in early 2020. Started with simple websites and thereafter enhanced my  skills in <span className="text-slate-300">JavaScript</span>, i started learning <span className="text-slate-300">Angular 2+</span>.</p>
                    <p className="xl:text-lg">I'm passionate about what i do, i love solving problems and learning every day something new or enhance my existing skills. I try to write clean code in the best possible way in order to achieve better performance and coding experience with respect to user experience (UX).</p>
                </div>
            </div>
      </section>
    );
}