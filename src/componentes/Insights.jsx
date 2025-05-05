export default function Insights({ img , title , subtitle , description}){
    return(
        <div>
            <img src={img} className="w-[250px]" />
            <h1 className="text-7xl font-bold my-9">{title}</h1>
            <hr className="w-[500px]  border-gray-400"/>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    )
}