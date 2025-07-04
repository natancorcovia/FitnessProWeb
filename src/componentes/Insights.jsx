export default function Insights({ img, title, subtitle, description }) {
  return (
    <div className="flex flex-col text-center">
      <img src={img} className="h-auto w-20 lg:-mx-6" />
      <h1 className="font-bold lg:text-left lg:text-4xl">{title}</h1>
      <hr className="my-8 w-11/12 border-gray-900" />
      <h2 className="text-start font-semibold text-[#5C5A5A] lg:text-lg">
        {subtitle}
      </h2>
      <p className="pt-4 text-start text-xs text-[#5C5A5A]">{description}</p>
    </div>
  );
}
