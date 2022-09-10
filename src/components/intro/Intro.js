import me from './me.png';
import {motion} from "framer-motion";

const Intro = () => {
    return (
        <motion.section className="flex justify-center align-middle py-10 px-6 bg-zinc-900 md:px-0 md:py-14 lg:py-16" initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <div className="container">
                <h1 className="text-2xl text-center text-white mb-2 md:text-3xl lg:text-4xl">GEORGE DOUDOULIAKIS</h1>
                <p className="text-center text-base text-slate-300 md:text-lg">Welcome to my portfolio!</p>
                <div className="flex flex-col justify-center md:flex-row">
                    <div className="w-52 h-52 mb-6 mx-auto md:mx-0 md:mb-0 md:ml-0">
                        <img src={me} className="w-full h-full object-cover object-center" alt="George Doudouliakis" title="George Doudouliakis" width="200" height="200" />
                    </div>
                    <div className="self-end mx-auto md:mx-0">
                        <p className="text-base text-center text-white mb-8 md:text-lg md:text-left lg:text-xl xl:text-2xl">
                            <span>I'm a Front End Web Developer,</span>
                            <br/>
                            <span>based in Thessaloniki (GR)</span>
                        </p>
                        <div className="flex justify-center text-orange-500 mb-3 md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span className="text-sm ml-4 md:text-base">+30 6945108388</span>
                        </div>
                        <div className="flex justify-center text-orange-500 md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <span className="text-sm ml-4 md:text-base">dudugeorge89@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Intro;