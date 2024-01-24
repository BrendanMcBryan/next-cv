
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
const { projects } = require("@/app/lib/starterdata");
// import { fetchProjects } from '@/app/lib/data'
export default function Projects() {
  // const projects = await fetchProjects();
  // console.log(projects);
  const renderProjects = projects.map((item: {
    name: string; title: string;
  }, index: Key) => {
    return (
      <article key={index} className="flex flex-col w-full mx-auto max-w-[1200px] bg-slate-400 border-slate-800 mb-1 p-12">
        <h1 className="text-xl">{item.name}</h1>
        <h2 className="text-sm">{item.title}</h2>

      </article>
    )

  });
  // console.log(renderProjects);

  return (<section
    className="flex flex-col w-full mx-auto justify-start  py-12 "
  >{renderProjects}</section>)


}
