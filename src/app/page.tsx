import AboutCard from "@/components/AboutCard";
import WhyChooseAfrovivo from "@/components/WhyChooseAfrovivo";
import Image from "next/image";
import { ForwardIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Values from "@/components/Values";
import ServicesCard from "@/components/Services";
import Blip from "@/components/Blip";
export default function Home() {
  return (
    <main className="space-y-48">
      <section className="flex flex-col items-center justify-center h-screen bg-[url('/bg-img.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
            zIndex: 0,
          }}
        />
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-end p-5 md:p-10 gap-3">
        <h1 className="text-white clash text-6xl font-medium md:w-3/4 "> Powering Africa&apos;s future one innovation at a time
</h1>
<p className="text-white w-full  md:w-1/2 clash ">Afrovivo Energy is an Africa-born, globally-minded energy company, driving progress through oil & gas innovation and renewable energy solutions.</p>
<button className="bg-orange-400 text-white py-2 px-4 rounded-full  leading-normal">Learn More</button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-10 p-5 md:p-10">
        <div className="flex flex-col  md:flex-row justify-center items-center gap-5">
<div className="flex flex-col  w-full md:w-1/2 justify-center items-start gap-3">
<h2 className="text-4xl font-semibold clash">Who We Are</h2>
<p className="text-md text-">
   Afrovivo Energy is a future-focused energy company committed to powering Africa’s growth through sustainable, reliable, and innovative energy solutions. Founded with a vision to bridge Africa’s energy gap, we operate at the intersection of oil & gas efficiency and renewable energy transformation.
We believe Africa’s energy future must be clean, accessible, and inclusive. That’s why we invest in solutions that meet today’s needs while shaping tomorrow’s opportunities — from mobile fuel delivery to large-scale solar infrastructure.

</p>
</div>
<div className="flex flex-col justify-center items-center w-full  md:w-1/2">
  <Image src="/img2.jpg" alt="Afrovivo Logo" width={400} height={100}  className="rounded-lg"/>
</div>
        </div>
<div className="flex justify-center items-center w-full gap-10 md:gap-20">
<AboutCard title="Our Mission" subtext=" To become Africa’s most trusted energy innovator—connecting communities, industries, and nations to a sustainable power future." Icon={<RocketLaunchIcon className="size-10 text-orange-900" />} />
<AboutCard title="Our Vision" subtext=" Deliver dependable energy today, while building the clean systems that will define tomorrow"  Icon={<ForwardIcon className="size-10 text-orange-900" />} />
</div>
 <div className='2-full flex flex-col justify-center items-start bg-orange-200 border border-orange-600 p-5 rounded-lg gap-5'>
      <SparklesIcon className="size-10 text-orange-900" />
      <h3 className='text-2xl text-orange-950 font-bold clash'>Our Values</h3>
     <div className="flex flex-col  md:flex-row justify-center items-start md:items-center gap-10">
<Values title="Innovation" subtext="We welcome fresh ideas that redefine Africa’s energy landscape.
"/>
<Values title="Integrity" subtext="We earn trust through honesty, transparency, and ethical conduct."/>
<Values title="Impact" subtext="We focus on meaningful change that uplifts communities and drives economic growth."/>
<Values title="Sustainability" subtext="Every solution we create considers the well-being of our planet."/>
     </div>
    </div>
      </section>
      <section className="p-10 flex flex-col justify-center items-center">
<h2 className="clash text-4xl font-semibold">What We Do</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10">
<ServicesCard title="Oil & Gas Solutions" subtext=" We keep Africa moving with efficient, high-quality fuel distribution—from on-demand delivery to bulk industrial supply. Our network ensures businesses and individuals have the fuel they need, when they need it.
"
image="/img-4.jpg"
/>
<ServicesCard title="Renewable Energy Development
" subtext=" We design and deliver solar plants, hybrid systems, and other green infrastructure that help our clients cut costs, reduce emissions, and secure a cleaner future.
"
image="/img-5.jpg"
/>
<ServicesCard title="

Energy Consulting & Project Development
" subtext="
 Governments, investors, and businesses turn to us for market insights, project planning, and strategies to adopt sustainable energy successfully.
"
image="img-6.jpg"
/>
<ServicesCard title="Strategic Partnerships
" subtext=" By collaborating with trusted partners locally and abroad, we open new markets, attract investment, and accelerate Africa’s energy transformation.
"
image="img-7.jpg"
/>
</div>

      </section>
      <section className="flex flex-col justify-center items-center gap-4 p-10">
        <h2 className="clash text-4xl font-semibold">Why Choose Afrovivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mt-10">
  <WhyChooseAfrovivo number="01" title="African Expertise, Global Standards">
          We understand the challenges and opportunities unique to Africa and apply world-class solutions.
        </WhyChooseAfrovivo>
        <WhyChooseAfrovivo number="02" title="Complete Project Delivery">
          We understand the challenges and opportunities unique to Africa and apply world-class solutions.
        </WhyChooseAfrovivo>
        <WhyChooseAfrovivo number="03" title="Innovation at the Core">
          We understand the challenges and opportunities unique to Africa and apply world-class solutions.
        </WhyChooseAfrovivo>
        <WhyChooseAfrovivo number="04" title="Sustainability as Standard">
          We understand the challenges and opportunities unique to Africa and apply world-class solutions.
        </WhyChooseAfrovivo>
        </div>
      
      </section>
       <section className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10">
<div className="flex flex-col w-full md:w-1/2 justify-center items-start gap-3">
<h2 className="text-4xl font-semibold clash">Our Markets</h2>
<p className="text-md text-">
  We&apos;re proudly headquartered in Ghana, with a growing footprint across West Africa. Through strong partnerships spanning Africa, Europe, Asia, and the Middle East, we bring the best global innovations home.
</p>
</div>
<div className="flex flex-col justify-center items-center w-full md:w-1/2">
  <Image src="/bg-img.jpg" alt="Afrovivo Logo" width={400} height={100} />
</div>
        </section>
        <section className="flex flex-col   justify-center items-center gap-10 bg-orange-500  w-3/4 mx-auto h-auto p-5 md:p-10 rounded-md">
        <div className="flex flex-col justify-center items-center gap-3">
<h2 className="text-4xl font-semibold clash text-white">Ready to Power The Future</h2>
<div className="flex flex-col justify-center items-center gap-4">
<p className="text-base text-white"> Work with Afrovivo International Ltd to access dependable energy solutions and unlock sustainable growth.</p>
<div className="flex justify-center items-start gap-4">
<button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm">Contact Us</button>
<button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm">Request A Proposal</button>

</div>
</div>
<div className="flex justify-center items-center">
<Image src="/img-1.jpg" alt="Afrovivo Logo" width={400} height={100} className="rounded-2xl" />
<Image src="/img-3.jpg" alt="Afrovivo Logo" width={400} height={100} className="rounded-2xl"/>
</div>

</div>
        </section>
        <section className="flex flex-col justify-center items-center gap-10 p-10">
          <div className="flex flex-col justify-center items-center gap-10">
<div className="flex flex-col justify-center items-start gap-3 w-full">
<h2 className="text-4xl font-semibold clash">Impact & Sustainability</h2>
<p className=" text-gray-900">For us, energy is more than power—it’s the key to unlocking education, healthcare, jobs, and equality. That’s why our projects aim to:
</p>
<div className="flex justify-center items-start gap-5">
  <Blip textSpan="Reduce carbon emissions" />
  <Blip textSpan="Create jobs in local communities." />
  <Blip textSpan="Expand energy access in areas that need it most." />
  </div>
</div>
<div className="flex flex-col justify-center items-start gap-2 w-full">
<h2 className="text-4xl font-semibold clash">Partnerships</h2>
<p className="text-gray-900 text-sm">We team up with:</p>
  <div className="flex justify-center items-start gap-5">
  <Blip textSpan="Global companies entering African energy markets." />
  <Blip textSpan="Global companies entering African energy markets." />
  <Blip textSpan="Global companies entering African energy markets." />
  </div>


</div>
          </div>
              <hr className="h-0.25 w-full bg-gray-200 border-none"/>
          </section>
      
         
    </main>
  );
}
