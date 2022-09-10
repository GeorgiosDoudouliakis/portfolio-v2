import './EmailWrapper.css';
import {motion} from "framer-motion";

const EmailWrapper = () => {
    return (
        <motion.div className="fixed bottom-0 left-0.5 lg:left-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
            <a href="mailto: dudugeorge89@gmailc.com" className="text-sm mb-2 rotate-180 text-slate-300 email hover:text-orange-500">dudugeorge89@gmail.com</a>
            <div className="w-0.5 h-16 ml-2.5 bg-orange-500"></div>
        </motion.div>
    )
}

export default EmailWrapper;