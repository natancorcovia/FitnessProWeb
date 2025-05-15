import logo from "../imagens/logo.png";

export default function Header(){
    return(
    <>
        <div className="flex items-center justify-between max-w-6xl ">
            <div className="w-1/4">
                <img src={logo} alt="Logo FitnessPro" className="w-45 h-auto pt-1" />
            </div>
            <nav className="flex-1 flex justify-center">
                <ul class="flex list-none gap-10 text-[20px] text-[#5C5A5A] font-bold">
                    <li><a href="#" class="hover:text-white transition duration-200">How it works</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Features</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Stats & Reviews</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Download</a></li>
                </ul>
            </nav>
            <div className="w-1/4 flex justify-end gap-4">
                <button className="px-4 py-1 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition duration-200">
                    Sign-up
                </button>
                <button className="px-4 py-1 bg-[#E94A2B] text-white rounded-2xl hover:bg-red-950 transition duration-200">
                    Login
                </button>
            </div>
        </div>
    </>
);
}