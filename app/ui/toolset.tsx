import {
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiJavascript,
  SiSquarespace,
  SiWordpress,
  SiAdobe,
  SiAdobeacrobatreader,
  SiTypescript, SiAdobexd, SiWix, SiTailwindcss, SiNextdotjs, SiHtml5, SiCsswizardry, SiFigma, SiBootstrap, SiMicrosoftoffice, SiAsana, SiSlack, SiApple
} from "react-icons/si";
import { PiCodeSimpleBold, PiOfficeChair } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { TbWorldCode } from "react-icons/tb";
import { FaGoogleDrive } from "react-icons/fa";


export default function ToolSet() {
  const icon_class = "text-xl me-1 text-pink-600"

  const group_class = "text-3xl text-cyan-900 me-4"

  return <div className="flex flex-col mt-4">
    <div id="designtools" className="flex flex-row items-center mb-3">
      <SiAdobe className={group_class} />

      <SiAdobeindesign className={icon_class} />
      <SiAdobeillustrator className={icon_class} />
      <SiAdobephotoshop className={icon_class} />
      <SiAdobexd className={icon_class} />
      <SiAdobeacrobatreader className={icon_class} />
    </div>

    <div id="developertools" className="flex flex-row items-center mb-3">
      <PiCodeSimpleBold className={group_class} />

      <SiJavascript className={icon_class} />
      <SiTypescript className={icon_class} />
      <SiTailwindcss className={icon_class} />
      <SiBootstrap className={icon_class} />
      <SiNextdotjs className={icon_class} />
      <SiHtml5 className={icon_class} />
      <SiCsswizardry className={icon_class} />
    </div>

    <div id="webtools" className="flex flex-row items-center mb-3">
      <TbWorldCode className={group_class} />

      <SiWordpress className={icon_class} />
      <SiSquarespace className={icon_class} />
      <SiWix className={icon_class} />
      <SiFigma className={icon_class} />
    </div>
    <div id="officeadmintools" className="flex flex-row items-center mb-3">
      <PiOfficeChair className={group_class} />

      <SiMicrosoftoffice className={icon_class} />
      <FaGoogleDrive className={icon_class} />
      <SiApple className={icon_class} />
      <SiAsana className={icon_class} />
      <SiSlack className={icon_class} />

    </div>
  </div>
}