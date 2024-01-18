import Image from "next/image";
import di_logo from "@/public/DesigningIntentLogo.webp"
export default function DILogo() {
  return (
    <div
      className="flex flex-col items-center"
    >
      <Image  className="" src={di_logo} alt="logo" width={100} height={100}/>
      <p className=" text-cyan-300">designinging intent</p>
    </div>
  );
}
