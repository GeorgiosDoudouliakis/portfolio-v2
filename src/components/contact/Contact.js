export default function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center align-middle py-10 px-6 bg-zinc-900 md:py-14 md:px-0 lg:py-16">
            <h2 className="text-center text-3xl mb-8">
                <span className="mr-3 text-slate-300">04.</span>
                <span className="text-orange-500">Contact</span>
            </h2>
            <p className="text-center text-white w-80 mx-auto mb-8 md:w-96 xl:text-lg">If you want to discuss something you can text me anytime. I will try to respond as soon as possible!</p>
            <a href="mailto: dudugeorge89@gmail.com" className="font-bold inline-flex text-orange-500 py-2 px-4 mx-auto cursor-pointer border-2 border-orange-800 rounded hover:text-white hover:bg-orange-800 md:text-sm md:py-2 lg:text-base">
                <span className="mr-2">Talk to me</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                </svg>
            </a>
        </section>
    )
}