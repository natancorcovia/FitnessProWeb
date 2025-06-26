import logo from "../imagens/logo.png";

export default function Header() {
  return (
    <>
      {/* Logotipo à esquerda */}
      <div className="flex max-w-6xl items-center justify-between">
        <div className="w-1/4">
          <img src={logo} alt="Logo FitnessPro" className="h-auto w-48 pt-1" />
        </div>

        {/* Botoes de navegacao */}
        <nav className="flex flex-1 justify-center">
          <ul class="flex list-none gap-6 text-base font-bold text-[#5C5A5A]">
            <li>
              <a href="#" class="transition duration-200 hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#" class="transition duration-200 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="transition duration-200 hover:text-white">
                Stats & Reviews
              </a>
            </li>
            <li>
              <a href="#" class="transition duration-200 hover:text-white">
                Download
              </a>
            </li>
          </ul>
        </nav>

        {/* Botoes de cadastro e login */}
        <div className="flex w-1/4 justify-end gap-4">
          <button className="rounded-2xl border-2 border-white px-3 py-1 font-semibold text-white transition duration-200 hover:bg-zinc-800">
            Sign-up
          </button>
          <button className="rounded-2xl bg-[#E94A2B] px-3 py-1 font-semibold text-white transition duration-200 hover:bg-red-950">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
