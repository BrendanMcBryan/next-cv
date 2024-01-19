import { IoDocument, IoImages } from "react-icons/io5";
import DILogo from "@/public/DesigningIntentLogo.webp";
import Image from "next/image";
export default function StickMenu() {
  return (<>
    <aside className="flex flex-col p-3 bg-pink-500 fixed right-0  rounded-l-lg hover:shadow-lg ">
      <Image className=" hover:animate-pulse" src={DILogo} alt="DI logo" width={20} height={20} />
      <IoDocument className="text-white my-2 hover:animate-pulse text-xl" />
      <IoImages className="text-white hover:animate-pulse text-xl" />

    </aside>
  </>)
}