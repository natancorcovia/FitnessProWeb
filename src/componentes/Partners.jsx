import { athlene, staminus, sportrix } from "../imagens/imagens";

export default function Partners() {
  return (
    <>
      <div className="flex w-full justify-center">
        <p class="text-5 mt-0 font-semibold">
          We work with people from all over the world. Together with our
          partners!
        </p>
      </div>
      <div className="mx-auto my-0 flex w-[180px] justify-center">
        <img src={athlene} alt="logo.athlene" />
        <img src={staminus} alt="logo.staminus" />
        <img src={sportrix} alt="logo.sportrix" />
      </div>
    </>
  );
}
