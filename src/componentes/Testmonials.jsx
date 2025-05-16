import { athlene } from "../imagens/imagens"

export default function Testimonials(){
    return(
        <>
        <div>
            <img src={athlene} alt="logo.athlene" className="w-36 flex justify-center mx-auto p-0 " />
            <h3 className="text-center font-bold text-[20px] mx-auto w-200 my-0 py-0">The greatest fitness app. It´s clear the makers behind this thing use it every week because it is so perfect.</h3>
        </div>
        </>
    )
}