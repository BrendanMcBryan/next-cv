import DILogo from '@/app/ui/dilogo';
export default function TopSection() {
  return <>
    <section
      className="flex flex-col-reverse items-center bg-white w-full min-h-screen  md:flex-row justify-between"
    >

      <div className="p-12 w-full flex-1 flex flex-col justify-center  ">
        <h1 className="text-cyan-900 font-light text-3xl mb-2">brendan mcbryan</h1>
        <h2 className="text-light  text-slate-700 mb-4">designer and developer</h2>
        <p className="font-light text-slate-700">Hello. Thank you for visiting my site. I am an expert desinger with a history of creating digital and printed pieces for a wide audiens.
          below you will recent examples of my work. feel free to contacat me with and work requests</p>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <DILogo />
      </div>

    </section>





  </>
}