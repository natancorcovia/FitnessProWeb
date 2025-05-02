export default function Section({ title, subtitle, description, src, imgsize, reverse }){
    return(
    <>
    <div className="mb-[150px]">
        <section className={`flex items-center justify-between p-10 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="text-white font-[Poppins] w-[560px]" >

                <h2 className="font-bold text-[#5C5A5A] text-[20px]">{subtitle}</h2>
                <h1 className="text-7xl font-bold my-9">{title}</h1>
                <p className="text-[#5C5A5A]">{description}</p>

                <div className="flex gap-4 my-6">
                <button className=" cursor-pointer bg-[#E94A2B] hover:bg-red-950 text-white font-semibold py-2 px-6 rounded-full transition duration-200">
                    Download App
                </button>
                
                <button className="cursor-pointer border-2 hover:bg-zinc-800 text-white font-semibold py-4 px-6 rounded-full transition duration-200">
                    Book a Class
                </button>
                </div>
            </div>

            <div className="flex mr-[50px]">
                <img src={src} className={imgsize} />
            </div>
        </section>
    </div>
    </>
);
}