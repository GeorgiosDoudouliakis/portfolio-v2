import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function GoTop() {
    const [canShowArrow, setCanShowArrow] = useState(false);
    const goTop = () => window.scrollTo(0, 0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setCanShowArrow(true) : setCanShowArrow(false);
        })
    },[])

    return (
        <>
            {
                canShowArrow &&
                    <motion.div className="fixed bottom-4 inline-flex justify-center w-8 h-8 p-1 text-zinc-900
                        bg-orange-500 rounded cursor-pointer hover:bg-zinc-800 hover:text-orange-500" onClick={() => goTop()} initial={{ opacity: 0, right: -100 }}
                        animate={{ opacity: 1, right: 16, transition: { duration: 0.5 } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                        </svg>
                    </motion.div>
            }
        </>
    )
}