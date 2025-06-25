export default function Section({
  title,
  subtitle,
  description,
  src,
  imgsize,
  reverse,
}) {
  return (
    <>
      <div>
        <section
          className={`flex flex-col-reverse items-center justify-between gap-10 px-4 md:flex-row md:px-10 ${reverse ? "md:flex-row-reverse" : ""}`}
        >
          <div className="w-full font-[Poppins] text-white md:max-w-xl">
            <h2 className="text-base font-bold text-[#5C5A5A] md:text-xl">
              {subtitle}
            </h2>
            <h1 className="my-6 text-4xl font-bold md:text-6xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-xs text-[#5C5A5A] md:text-lg">{description}</p>

            <div className="my-6 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#E94A2B] px-6 py-2 font-semibold text-white transition duration-200 hover:bg-red-950">
                Download App
              </button>

              <button className="rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition duration-200 hover:bg-zinc-800">
                Book a Class
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <img src={src} className={imgsize} />
          </div>
        </section>
      </div>
    </>
  );
}
