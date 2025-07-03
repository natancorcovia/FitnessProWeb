export default function newSection({
  title,
  subtitle,
  description,
  src,
  reverse,
}) {
  return (
    <>
      <div className="sm:mt-8 sm:w-full lg:mx-auto lg:w-4/5">
        <section
          className={`flex flex-col items-center justify-between gap-10 px-4 md:flex-row lg:ml-7 lg:flex-row lg:justify-start lg:px-0 ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="w-5/6 font-[Poppins] md:w-1/2 lg:w-5/6">
            <h2 className="text-lg font-bold text-[#5C5A5A] sm:text-xl">
              {subtitle}
            </h2>
            <h1 className="my-4 text-3xl font-bold text-white sm:my-8 sm:text-5xl md:my-4 lg:my-4">
              {title}
            </h1>
            <p className="text-sm text-[#5C5A5A] sm:text-base md:text-sm">
              {description}
            </p>

            <div className="mt-6 flex w-full flex-col items-center gap-4 sm:my-20 md:mt-6 md:flex-row md:text-sm lg:my-6">
              <button className="w-full rounded-full bg-[#E94A2B] px-6 py-2 font-semibold text-white transition duration-200 hover:bg-red-950 sm:py-4 lg:py-3">
                Download App
              </button>

              <button className="w-full rounded-full border border-white px-6 py-2 font-semibold text-white transition duration-200 hover:bg-zinc-800 sm:py-4 lg:py-3">
                Book a Class
              </button>
            </div>
          </div>

          <div className="flex w-screen justify-center md:w-1/2 lg:w-full lg:justify-end">
            <img src={src} className="md:max-w-md md:pb-16 lg:pb-0" />
          </div>
        </section>
      </div>
    </>
  );
}
