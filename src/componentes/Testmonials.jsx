import { athlene } from "../imagens/imagens";

export default function Testimonials() {
  return (
    <>
      <div className="mx-auto mt-20 h-40 w-4/5">
        <img src={athlene} alt="logo.athlene" className="mx-auto max-w-36" />
        <h3 className="-mt-10 flex items-center justify-center text-center text-sm font-bold lg:text-lg">
          The greatest fitness app. It´s clear the makers behind this thing use
          it every week because it is so perfect.
        </h3>
      </div>
    </>
  );
}
