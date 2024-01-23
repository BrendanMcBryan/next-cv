import DILogo from '@/app/ui/dilogo';
import ToolSet from '@/app/ui/toolset'
export default function TopSection() {
  return (
    <section
      className="flex flex-col-reverse items-center w-full min-h-screen  md:flex-row justify-between  before:absolute before:h-full before:w-[480px] before:-translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-400 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#01e6ff] after:dark:opacity-60 before:lg:h-[360px] z-[-1]"
    >

      <div className="p-12 w-full flex-1 flex flex-col justify-center  ">
        <h1 className="text-cyan-900 font-light text-3xl mb-2">brendan mcbryan</h1>
        <h2 className="text-light  text-slate-700 mb-4">designer and developer</h2>
        <p className="font-light text-slate-700">Expert desinger with a history of creating digital and printed pieces for a wide audiens.
          below you will recent examples of my work. feel free to contacat me with and work requests</p>
        <ToolSet />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="animate-slide-up"><DILogo/></div>
      </div>

    </section>
  )

}