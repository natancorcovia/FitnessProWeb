export default function Section({ title, subtitle, description, src, imgsize, reverse }){
    return(
    <>
    <div className="mb-36">
        <section className={`flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-white font-[Poppins] w-full md:max-w-xl" >

                <h2 className="font-bold text-[#5C5A5A] text-lg md:text-xl">{subtitle}</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold my-6">{title}</h1>
                <p className="text-[#5C5A5A] text-base md:text-lg">{description}</p>

                <div className="flex flex-col sm:flex-row gap-4 my-6">
                <button className="bg-[#E94A2B] hover:bg-red-950 text-white font-semibold py-2 px-6 rounded-full transition duration-200">
                    Download App
                </button>
                
                <button className="border-2 border-white hover:bg-zinc-800 text-white font-semibold py-2 px-6 rounded-full transition duration-200">
                    Book a Class
                </button>
                </div>
            </div>

            <div className="w-full flex justify-center md:justify-end">
                <img src={src} className={imgsize} />
            </div>
        </section>
    </div>
    </>
);
}