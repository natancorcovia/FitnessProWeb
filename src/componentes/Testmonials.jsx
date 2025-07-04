import { athlene } from "../imagens/imagens";

export default function Testimonials() {
  return (
    <>
      <div className="relative mx-auto mb-32 h-40 w-4/5">
        <img src={athlene} alt="logo.athlene" className="mx-auto max-w-36" />
        <h3 className="absolute -inset-0 flex items-center justify-center pt-28 text-center text-sm font-bold sm:pt-24">
          The greatest fitness app. It´s clear the makers behind this thing use
          it every week because it is so perfect.
        </h3>
      </div>
    </>
  );
}
