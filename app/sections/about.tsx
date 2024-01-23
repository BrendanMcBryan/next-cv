export default function aboutSection() {
  const cardClass = " card flex flex-col bg-cyan-50  w-1/3 rounded-lg shadow-lg me-4 p-8 hover:bg-cyan-100"
  return <>
    <section
      className="flex flex-col items-start justify-start bg-slate-50 py-12 "
    >
      <div className="p-12 w-full flex-1 flex flex-col justify-start">
        <h2 className="text-2xl font-light mb-2">about brendan</h2>
        <p className="font-light text-slate-700">I have been working in design and development for years. From Printed documents, to virtual grand openings, my experience includes both printed and digital production across a wide range of mediums.</p>
      </div>
      <div className="p-12 w-full flex-1 flex flex-row ">
        <div className={cardClass}>
          <h3 className="font-medium text-slate-700">Designer</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
        </div>
        <div className={cardClass}>
          <h3 className="font-medium text-slate-700">developer</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
        </div>
        <div className={cardClass}>
          <h3 className="font-medium text-slate-700">toolkit</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
          <h3 className="font-medium text-slate-700"> art direction</h3>
        </div>
      </div>



    </section>
  </>
}