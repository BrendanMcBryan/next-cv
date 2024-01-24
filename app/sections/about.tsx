import { MdCrop, MdOutlineCode, MdOutlineBuild } from "react-icons/md";

import ToolSet from '@/app/ui/toolset'
export default function aboutSection() {
  const cardClass = " card flex flex-1 flex-col justify-between bg-cyan-50 rounded-lg shadow-lg mb-12 mx-0 py-8 px-4 hover:bg-cyan-100"
  const titleClass = "font-extralight text-center text-5xl text-slate-700 mb-auto"
  const liClass = " text-slate-700"
  const iconClass = " text-5xl text-center text-cyan-300 mx-auto mb-3 "
  return <>
    <section
      className="flex flex-col items-start justify-start  py-12 "
    >
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div className="p-12 w-full flex-1 flex flex-col justify-start">
          <h2 className="text-2xl font-light mb-2">about brendan</h2>
          <p className="font-light text-slate-700">I have been working in design and development for years. From Printed documents, to virtual grand openings, my experience includes both printed and digital production across a wide range of mediums.</p>
        </div>
        <div className="p-12 w-full flex flex-col md:flex-row md:columns-3 gap-12 bg-red justify-between">
          <div className={cardClass}>
            <MdCrop className={iconClass} />
            <h3 className="font-extralight text-center text-5xl text-slate-700 mb-8
            ">design</h3>
            <ul className="list-disc text-center list-inside marker:text-pink-600">
              <li className=" text-slate-700">direction of branding campaigns
              </li>
              <li className={liClass}>graphics & layout for print production
              </li>
              <li className={liClass}>presentation & deck design
              </li>
              <li className={liClass}>maintenence and expansion of identity
              </li>
            </ul>
          </div>
          <div className={cardClass}>
            <MdOutlineCode className={iconClass} />

            <h3 className={titleClass}>developer</h3>
            <ul className="list-disc text-center list-inside marker:text-pink-600">
              <li className=" text-slate-700">direction of branding campaigns
              </li>
              <li className={liClass}>graphics & layout for print production
              </li>
              <li className={liClass}>presentation & deck design
              </li>
              <li className={liClass}>maintenence and expansion of identity
              </li>
            </ul>
          </div>
          <div className={cardClass}>
            <MdOutlineBuild className={iconClass} />
            <h3 className={titleClass}>toolkit</h3>
            <ToolSet />

          </div>
        </div>
      </div>



    </section >
  </>
}