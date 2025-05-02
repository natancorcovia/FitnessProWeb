import { athlene , staminus, sportrix } from "../imagens/imagens";


export default function Partners(){
    return(
        <>
        <div className="w-full flex justify-center mt-[150px]">
            <p class="font-bold text-[22px] mt-5">We work with people from all over the world. Together with our partners!</p>
        </div>
        <div className="w-[180px] flex justify-center mx-auto my-0 mb-48">
            <img src={athlene} alt="logo.athlene" />
            <img src={staminus} alt="logo.staminus" />
            <img src={sportrix} alt="logo.sportrix" />
        </div>
        </>
    );
}