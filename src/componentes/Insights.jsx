export default function Insights({ img , title , subtitle , description}){
    return(
        <div className="w-1/4 flex flex-col items-center text-center px-4 my-0">
            <img src={img} className="w-14 h-14 mb-4" />
            <h1 className="ext-4xl font-bold mb-2">{title}</h1>
            <hr className="w-full border-gray-500 mb-2"/>
            <h2 className="text-lg text-[#5C5A5A] font-semibold my-2">{subtitle}</h2>
            <p className="text-xs text-[#5C5A5A]">{description}</p>
        </div>
    )
}
