"use client";
import React, {  useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, BanknotesIcon, BriefcaseIcon, BuildingLibraryIcon, ChartBarIcon, ClockIcon, GlobeAltIcon, LinkIcon, UsersIcon } from "@heroicons/react/24/outline";
import { TeamCard } from "@/components/TeamCard";
import ExpandableDropdown from "@/components/ExpandableDropdown";
import WhyCard from "@/components/WhyCard";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/content/siteContent";
export default function Home() {
  const [showTeam, setShowTeam] = useState(false);

  const [siteIsComplete, setSiteIsComplete] = useState(true);

  return (
    <>
      {!siteIsComplete ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-center">
            Site Under Construction
          </h1>
          <p className="text-center mt-4">
            We are currently working on improving our website.
          </p>
        </div>
      ) : (
        <>
          <main className="space-y-20">
            <section className="min-h-screen flex flex-col justify-center items-center  bg-[url('/energy-fund.jpg')] bg-cover bg-center">
              <div className="bg-black/50 bg-opacity-20   h-screen w-full flex flex-col justify-center items-start p-10">
                <Reveal>
                  <h1 className="text-5xl font-bold text-white clash md:w-3/5 tracking-wide">
                    {siteContent.home.hero.title}
                  </h1>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-white text-base md:w-3/5 mt-4">
                    {siteContent.home.hero.sub}
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="flex space-x-6">
                    <button className=" text-white text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-orange-400  hover:bg-white hover:text-black" onClick={() => { window.location.href = '/energy-fund/#strategy' }}>
                      {siteContent.home.hero.primaryCta}
                    </button>
                    <button className=" text-black text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-white hover:bg-orange-400 hover:text-white" onClick={() => { window.location.href = 'mailto:info@afrovivointernational.com?subject=Partner%20With%20the%20Fund' }}>
                      {siteContent.home.hero.secondaryCta}
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto scroll-mt-28" id="about">
              <span className=" clash font-normal text-4xl md:w-1/2 text-center">
                {siteContent.home.about.banner.pre}{" "}
                <span className="text-orange-950 italic gambariano  font-semibold">
                  {siteContent.home.about.banner.emphasis}
                </span>{" "}
                {siteContent.home.about.banner.post}
              </span>

              <div className="flex flex-col justify-center items-center w-full mt-10">
                <Reveal as="div" id="who-we-are" className="flex md:flex-row flex-col-reverse justify-center items-center w-full scroll-mt-28">
                  <div className="md:w-1/2 flex flex-col justify-center items-start gap-3">
                    <h2 className="text-3xl font-semibold">{siteContent.home.about.whoWeAre.heading}</h2>
                    <p>
                      {siteContent.home.about.whoWeAre.body}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-center ">
                    <Image
                      src="/team.jpg"
                      alt="Afrovivo Logo"
                      width={400}
                      height={200}
                      className="rounded-sm md:w-0 w-full"
                    />
                  </div>
                </Reveal>
        <div id="mission-and-vision" className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-26 place-items-center scroll-mt-28">
        <Reveal as="div" className="flex flex-col justify-center items-start gap-2">
            <Image src="/vision.jpg" alt="Vision" width={400} height={200} className="rounded-sm" />
            <h3 className="text-2xl font-semibold">{siteContent.home.about.vision.heading}</h3>
            <p>{siteContent.home.about.vision.body}</p>
        </Reveal>
        <Reveal as="div" className="flex flex-col justify-center items-start gap-2" delay={120}>
            <Image src="/mission.jpg" alt="Mission" width={400} height={200} className="rounded-sm" />
            <h3 className="text-2xl font-semibold">{siteContent.home.about.mission.heading}</h3>
            <p>{siteContent.home.about.mission.body}</p>
        </Reveal>
                </div>
              </div>
            </section>

            <section className="h-auto p-10 flex flex-col justify-center items-start w-full scroll-mt-28" id="our-focus">
              <h1 className="text-black text-4xl font-semibold mb-10">
                {siteContent.home.focus.heading}
              </h1>
              <div className="flex justify-center items-center w-full">
                <ExpandableDropdown
                // title="Our Services & Solutions"
                />
              </div>
            </section>

            <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto bg-white scroll-mt-28" id="why-afrovivo">
        <div className="flex flex-col justify-center items-center w-full mt-10">
<h1 className="text-black text-4xl font-semibold">{siteContent.home.why.heading}</h1>
        </div>
        <Reveal as="div" className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full mt-10 place-items-center">
          <WhyCard title={siteContent.home.why.items[0].title} description={siteContent.home.why.items[0].description} icon={<ChartBarIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title={siteContent.home.why.items[1].title} description={siteContent.home.why.items[1].description} icon={<GlobeAltIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title={siteContent.home.why.items[2].title} description={siteContent.home.why.items[2].description} icon={<LinkIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title={siteContent.home.why.items[3].title} description={siteContent.home.why.items[3].description} icon={<ClockIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
        </Reveal>
            </section>
            <section className="flex  flex-col justify-start items-start  bg-orange-800 text-white h-auto p-10 min-h-[50vh] gap-10 scroll-mt-28" id="our-leadership">
              <div className="flex md:flex-row flex-col justify-center items-start ">
                <div className="flex flex-col justify-center gap-4 items-start md:w-1/2">
                  <h1 className="text-4xl font-semibold"> {siteContent.home.leadership.heading} </h1>
                  {/*<Image
                      src="/team.jpg"
                      alt=""
                      width={400}
                      height={500}
                      className="rounded-sm"
                    />*/}
                </div>
                <div className="flex flex-col justify-center gap-4 items-start md:w-1/2">
                  <p className="mt-5 text-base md:w-4/5">
                    {siteContent.home.leadership.lead}
                  </p>
                  <button
                    className="bg-white text-black cursor-pointer text-sm flex justify-center items-center gap-2  px-4 py-3 rounded-sm"
                    onClick={() => setShowTeam(!showTeam)}
                  >
                    <UsersIcon className="w-5 h-5" />
                    {siteContent.home.leadership.teamCta}
                  </button>
                </div>
              </div>
              {showTeam && (
                <Reveal as="div" className="w-full grid grid-cols-1 md:grid-cols-4 place-items-start">
                  {siteContent.home.leadership.team.map((m) => (
                    <TeamCard key={m.name} name={m.name} role={m.role} image={m.image} />
                  ))}
                </Reveal>
              )}
            </section>
                <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto bg-white scroll-mt-28" id="investors-and-partners">
        <div className="flex flex-col justify-center items-center gap-2 w-full mt-10">
<h1 className="text-black text-4xl font-semibold">{siteContent.home.investors.heading}</h1>
<p className="text-base text-gray-700">{siteContent.home.investors.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-10  place-items-start md:place-items-center">
                    <WhyCard title={siteContent.home.investors.items[0].title}  icon={<BuildingLibraryIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
                    <WhyCard title={siteContent.home.investors.items[1].title}  icon={<GlobeAltIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
                    <WhyCard title={siteContent.home.investors.items[2].title}  icon={<BanknotesIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
                    <WhyCard title={siteContent.home.investors.items[3].title}  icon={<BriefcaseIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
                    <WhyCard title={siteContent.home.investors.items[4].title}  icon={<UsersIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
                    <WhyCard title={siteContent.home.investors.items[5].title}  icon={<ChartBarIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
        </div>
        <div>
          <button className="flex flex-co justify-center items-center gap-2 bg-orange-950 text-white hover:bg-orange-700 px-4 py-3 rounded-sm text-sm cursor-pointer mt-4">
            {siteContent.home.investors.cta}
             <ArrowRightIcon className="w-4 h-4 text-white"/>
            </button>
           
        </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
