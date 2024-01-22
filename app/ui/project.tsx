import Image from "next/image";
import di_logo from "@/public/DesigningIntentLogo.webp"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
export default function Project(props: { title: string }) {
  return (
    <div className="project flex p-24 justify-start w-screen">
      <h1 className="text-2xl">{props.title}</h1>
    </div>

  );
}
