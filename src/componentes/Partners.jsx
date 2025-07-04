import { athlene, staminus, sportrix } from "../imagens/imagens";

export default function Partners() {
  return (
    <>
      <div className="mx-auto mt-20 flex w-4/5 justify-center">
        <p className="text-center font-semibold">
          We work with people from all over the world. Together with our
          partners!
        </p>
      </div>
      <div className="mx-auto flex w-4/5 items-center justify-center">
        <img src={athlene} alt="logo.athlene" className="h-auto w-28" />
        <img src={staminus} alt="logo.staminus" className="h-auto w-28" />
        <img src={sportrix} alt="logo.sportrix" className="h-auto w-28" />
      </div>
    </>
  );
}
