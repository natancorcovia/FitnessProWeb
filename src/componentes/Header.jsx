import logo from "../assets/logo.png";

export default function NewHeader() {
  return (
    <>
      <div className="mx-auto flex h-44 w-4/5 items-center justify-center lg:justify-between">
        <div className="h-44 w-44 lg:mt-1 lg:flex lg:h-40 lg:w-40">
          <img src={logo} alt="" className="max-w-full" />
        </div>
        <div className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-6 text-base font-bold text-[#5C5A5A]">
            {["How it works", "Features", "Stats & Reviews", "Download"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer transition duration-200 hover:text-white"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <div className="ml-auto flex gap-3">
            <button className="rounded-xl border-[1px] border-white px-3 py-1 font-semibold text-white transition duration-200 hover:bg-zinc-800">
              Sign-up
            </button>
            <button className="rounded-xl bg-[#E94A2B] px-3 py-1 font-semibold text-white transition duration-200 hover:bg-red-950">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
