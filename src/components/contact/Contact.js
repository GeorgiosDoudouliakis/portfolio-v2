export default function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center align-middle py-10 px-6 bg-zinc-900 md:py-14 md:px-0 lg:py-16">
            <h2 className="text-center text-3xl mb-8">
                <span className="mr-3 text-slate-300">04.</span>
                <span className="text-orange-500">Contact</span>
            </h2>
            <p className="text-center text-white w-80 mx-auto mb-8 md:w-96 xl:text-lg">If you want to discuss something you can text me anytime. I will try to respond as soon as possible!</p>
            <a href="mailto: dudugeorge89@gmail.com" className="font-bold text-orange-500 py-2 px-4 mx-auto cursor-pointer border-2 border-orange-800 rounded hover:text-white hover:bg-orange-800 md:text-sm md:py-2 lg:text-base">Talk to me</a>
        </section>
    )
}