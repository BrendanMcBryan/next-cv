import Image from "next/image";
import di_logo from "@/public/DesigningIntentLogo.webp"
export default function DILogo() {
  return (
    <div>
      <Image className="rounded-full overflow-hidden mx-auto" src={di_logo} alt="logo" width={200} height={200} />
    </div>

  );
}
