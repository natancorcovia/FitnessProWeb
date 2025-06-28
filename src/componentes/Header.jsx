import logo from "../imagens/logo.png";

export default function NewHeader() {
  return (
    <>
      <div className="mx-auto flex h-44 w-4/5 items-center justify-center lg:justify-between">
        <div className="h-44 w-44 lg:mt-1 lg:flex lg:h-40 lg:w-40">
          <img src={logo} alt="" className="max-w-full" />
        </div>
        <div className="hidden justify-center lg:flex">
          <ul className="flex list-none items-center gap-6 text-base font-bold text-[#5C5A5A]">
            <li href="#" class="transition duration-200 hover:text-white">
              How it works
            </li>
            <li href="#" class="transition duration-200 hover:text-white">
              Features
            </li>
            <li href="#" class="transition duration-200 hover:text-white">
              {" "}
              Stats & Reviews
            </li>
            <li href="#" class="transition duration-200 hover:text-white">
              Download
            </li>
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
