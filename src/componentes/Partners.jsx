import { athlene, staminus, sportrix } from "../imagens/imagens";

export default function Partners() {
  return (
    <>
      <div className="mx-auto flex w-4/5 justify-center pt-14">
        <p className="text-center font-semibold lg:text-lg">
          We work with people from all over the world. Together with our
          partners!
        </p>
      </div>
      <div className="mx-auto -mt-4 flex w-4/5 items-center justify-center lg:-mt-8">
        <img src={athlene} alt="logo.athlene" className="h-auto w-28 md:w-36" />
        <img
          src={staminus}
          alt="logo.staminus"
          className="h-auto w-28 md:w-36"
        />
        <img
          src={sportrix}
          alt="logo.sportrix"
          className="h-auto w-28 md:w-36"
        />
      </div>
    </>
  );
}
