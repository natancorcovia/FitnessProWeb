import { athlene } from "../imagens/imagens"

export default function Testimonials(){
    return(
        <>
        <div>
            <hr className="mx-auto border-gray-400"/>
            <img src={athlene} alt="logo.athlene" className="w-[180px] flex justify-center mx-auto p-0 " />
            <h3 className="text-center font-bold text-[30px] mx-auto w-[800px] my-0 py-0">The greatest fitness app. It´s clear the makers behind this thing use it every week because it is so perfect.</h3>
            <hr className=" w-200 mx-auto mt-[50px] mt-[100px] border-gray-400"/>
        </div>
        </>
    )
}