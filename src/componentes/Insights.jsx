export default function Insights({ img , title , subtitle , description}){
    return(
        <div className="w-1/4">
            <img src={img} className="w-2/4 flex p-0 m-0" />
            <div className="ml-9">
                <h1 className="text-5xl font-semibold mt-0 mb-5">{title}</h1>
                <hr className="w-full border-gray-400"/>
                <h2 className="font-bold text-[#5C5A5A] text-3">{subtitle}</h2>
                <p className="text-[#5C5A5A]">{description}</p>
            </div>
        </div>
    )
}