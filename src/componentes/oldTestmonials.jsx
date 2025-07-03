import { athlene } from "../imagens/imagens";

export default function Testimonials() {
  return (
    <>
      <div>
        <img
          src={athlene}
          alt="logo.athlene"
          className="mx-auto flex w-36 justify-center p-0"
        />
        <h3 className="w-200 mx-auto my-0 py-0 text-center text-[20px] font-bold">
          The greatest fitness app. It´s clear the makers behind this thing use
          it every week because it is so perfect.
        </h3>
      </div>
    </>
  );
}
