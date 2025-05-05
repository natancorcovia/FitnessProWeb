export default function Insights({ img , title , subtitle , description}){
    return(
        <div>
            <img src={img} className="w-[250px]" />
            <h1 className="text-7xl font-bold my-9">{title}</h1>
            <hr className="w-[500px] border-gray-400"/>
            <h2 className="font-bold text-[#5C5A5A] text-[20px]">{subtitle}</h2>
            <p className="text-[#5C5A5A]">{description}</p>
        </div>
    )
}