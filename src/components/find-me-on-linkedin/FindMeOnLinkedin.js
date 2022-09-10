import {motion} from "framer-motion";

export default function FindMeOnLinkedin() {
    return (
        <motion.p className="text-center text-white py-6 bg-zinc-800" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            Also you can find me on <a href="https://www.linkedin.com/in/georgios-doudouliakis-b97a5b19a/" target="_blank" rel="noreferrer" className="underline hover:text-orange-500">LinkedIn</a>
        </motion.p>
    )
}