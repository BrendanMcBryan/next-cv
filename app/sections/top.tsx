import DILogo from '@/app/ui/dilogo';
import ToolSet from '@/app/ui/toolset'
export default function TopSection() {
  return (

    <section
      className="flex flex-col justify-center w-full min-h-screen bg-red-200"
    >
      <div className="flex flex-col-reverse items-center max-w-[1200px] mx-auto bg-blue-200 md:flex-row justify-between ">

        <div className="p-12 w-full flex-1 flex flex-col justify-center  ">
          <h1 className="text-cyan-900 font-light text-3xl mb-2">brendan mcbryan</h1>
          <h2 className="text-light  text-slate-700 mb-4">designer and developer</h2>
          <p className="font-light text-slate-700">Expert desinger with a history of creating digital and printed pieces for a wide audiens.
            below you will recent examples of my work. feel free to contacat me with and work requests</p>
          <ToolSet />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className=' overflow-hidden py-26'><DILogo /></div>
        </div>
      </div>
    </section>

  )

}