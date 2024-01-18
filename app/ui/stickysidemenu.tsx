import { IoDocument, IoImages } from "react-icons/io5";

export default function StickMenu() {
  return (<>
    <aside className="flex flex-col p-3 bg-pink-500 fixed right-0 top-1/3">

      <IoDocument className="text-white mb-2 hover:animate-pulse text-xl" />
      <IoImages className="text-white hover:animate-pulse text-xl" />

    </aside>
  </>)
}