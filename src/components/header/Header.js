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
                <span className="text-md text-white font-bold p-2 border-2 border-orange-500 rounded-full lg:text-base">GD</span>
                <nav className={ `${isOnMobile ? (!isMenuOpen && "hidden") : "initial" } absolute top-16 left-0 bg-zinc-900 w-full h-fit border-y-2 border-zinc-700 md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:border-y-0`}>
                    <ul className="flex flex-col md:flex-row">
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#about" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:text-sm md:py-2 md:w-auto lg:text-base">About</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#experience" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:text-sm md:py-2 md:w-auto lg:text-base">Experience</a>
                        </li>
                        <li className="text-center md:mr-2" onClick={() => setMenuState(false)}>
                            <a href="#projects" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:text-sm md:py-2 md:w-auto lg:text-base">Projects</a>
                        </li>
                        <li className="text-center" onClick={() => setMenuState(false)}>
                            <a href="#resume" className="inline-block text-white w-full py-4 px-4 font-bold cursor-pointer hover:text-orange-500 md:text-sm md:py-2 md:w-auto lg:text-base">Resume</a>
                        </li>
                    </ul>
                </nav>
                { !isMenuOpen ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer text-white md:hidden" onClick={() => setMenuState(!isMenuOpen)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer text-white md:hidden" onClick={() => setMenuState(!isMenuOpen)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )
                }
            </div>
        </header>
    );
}