import Image from "next/image";

export default function Page() {
  return <>
    <p>header Page</p>
    <Image
      src="/DesigningIntentLogo.webp"
      alt="DI Logo"
      // className="dark:invert"
      width={100}
      height={100}
      priority
    /></>
}