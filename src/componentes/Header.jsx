import logo from "../imagens/logo.png";

export default function Header(){
    return(
    <>
        <div className="flex items-center justify-between max-w-6xl mb-[70px]">
            <div>
                <img src={logo} alt="Logo FitnessPro" className="w-45 h-auto pt-1" />
            </div>
            <nav>
                <ul class="flex list-none gap-10 text-[20px] text-[#5C5A5A] font-bold">
                    <li><a href="#" class="hover:text-white transition duration-200">How it works</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Features</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Stats & Reviews</a></li>
                    <li><a href="#" class="hover:text-white transition duration-200">Download</a></li>
                </ul>
            </nav>
        </div>
    </>
);
}