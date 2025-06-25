export default function Insights({ img, title, subtitle, description }) {
  return (
    <div className="my-0 flex w-1/4 flex-col items-center px-4 text-center">
      <img src={img} className="mb-4 h-14 w-14" />
      <h1 className="ext-4xl mb-2 font-bold">{title}</h1>
      <hr className="mb-2 w-full border-gray-500" />
      <h2 className="my-2 text-lg font-semibold text-[#5C5A5A]">{subtitle}</h2>
      <p className="text-xs text-[#5C5A5A]">{description}</p>
    </div>
  );
}
