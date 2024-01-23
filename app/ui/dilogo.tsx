import Image from "next/image";
import di_logo from "@/public/DesigningIntentLogo.webp"
export default function DILogo() {
  return (
    <div>
      <Image className=" animate-slide-up rounded-full overflow-hidden mx-auto" src={di_logo} alt="logo" width={244} height={244} />
    </div>

  );
}
