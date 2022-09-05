import {useEffect, useState} from "react";

export default function Header() {
    const [isOnMobile, setIsOnMobileState] = useState(false);
    const [isMenuOpen, setMenuState] = useState(false);

    useEffect(() => {
        window.matchMedia('(max-width: 767px)').matches ? setIsOnMobileState(true) : setIsOnMobileState(false);
    }, [])

    return (
        <header className="w-full bg-zinc-900 py-3 px-6 relative md:px-0">
            <div className="container flex justify-between items-center mx-auto">
                <div className="flex justify-center items-center w-10 h-10 bg-orange-500 text-lg text-white font-bold mr-6 rounded-sm">GD</div>
                <nav className={ `${isOnMobile ? (!isMenuOpen && "hidden") : "initial" } absolute top-16 left-0 bg-zinc-900 w-full h-fit md:relative md:top-auto md:left-auto md:w-auto md:h-auto`}>
                    <ul className="flex flex-col md:flex-row">
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#about" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">About</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#education" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">Education</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#experience" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">Experience</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#skills" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">Skills</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#projects" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">Projects</a>
                        </li>
                        <li className="text-center" onClick={() => setMenuState(false)}>
                            <a href="#resume" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:py-2 md:w-auto">Resume</a>
                        </li>
                    </ul>
                </nav>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer text-white md:hidden" onClick={() => setMenuState(!isMenuOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    );
}