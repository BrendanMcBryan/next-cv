
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
      <div key={index} className="bg-slate-600 p-12 hover:bg-slate-400">
        <h1 className="text-xl">{item.name}</h1>
        <h2 className="text-sm">{item.title}</h2>

      </div>
    )

  });
  // console.log(renderProjects);

  return (<div>{renderProjects}</div>)


}
