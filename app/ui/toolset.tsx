import {
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiJavascript,
  SiSquarespace,
  SiWordpress,
  SiAdobe,
  SiAdobeacrobatreader,
  SiTypescript, SiAdobexd, SiWix
} from "react-icons/si";
import { PiCodeSimpleBold } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { TbWorldCode } from "react-icons/tb";


export default function ToolSet() {
  const icon_class = "text-2xl me-1 text-pink-600"
  const group_class = "text-3xl text-cyan-900 me-3"
  return <div className="flex flex-col mt-4">
    <div id="designtools" className="flex flex-row items-center">
      <SiAdobe className={group_class} />
      <SiAdobeindesign className={icon_class} />
      <SiAdobeillustrator className={icon_class} />
      <SiAdobephotoshop className={icon_class} />
      <SiAdobexd className={icon_class} />
      <SiAdobeacrobatreader className={icon_class} />

    </div>
    <div id="webtools" className="flex flex-row">
      <TbWorldCode className={group_class} />

      <SiWordpress className={icon_class} />
      <SiSquarespace className={icon_class} />
      <SiWix className={icon_class} />
    </div>
    <div id="developertools" className="flex flex-row">
      <TbWorldCode className={group_class} />
      <SiJavascript className={icon_class} />
      <SiTypescript className={icon_class} />
      <SiWordpress className={icon_class} />
      <SiSquarespace className={icon_class} />
    </div>
  </div>
}