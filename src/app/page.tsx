
export default function Home() {
  return (
    <main className="space-y-48">
     <section className="min-h-screen flex flex-col justify-center items-center  bg-[url('/hero-section-bg.jpg')] bg-cover bg-center">
      <div className="bg-black/40 bg-opacity-20  rounded-lg h-screen w-full flex flex-col justify-center items-start p-10">
      <h1 className="text-5xl font-bold text-white clash w-3/5 tracking-wide">Powering Africa's future. Driving global energy investments</h1>
      <p className="text-white text-base w-3/5 mt-3">Afrovivo International Ltd is a next-generation energy investment and infrastructure company,
building the bridge between global capital and Africa’s fast-growing oil, gas, and renewable
energy markets.</p>
<div className="flex space-x-6">
  <button className=" text-white text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-white/20 border border-white/50 hover:bg-white hover:text-black">
    Explore our strategy
  </button>
  <button className=" text-black text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-white hover:bg-orange-400 hover:text-white">
    Partner With Us
  </button>
</div>
        </div>
     </section>
         
    </main>
  );
}
