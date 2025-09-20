"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, BanknotesIcon, BriefcaseIcon, BuildingLibraryIcon, ChartBarIcon, ClockIcon, GlobeAltIcon, LinkIcon, UsersIcon } from "@heroicons/react/24/outline";
import { TeamCard } from "@/components/TeamCard";
import ExpandableDropdown from "@/components/ExpandableDropdown";
import WhyCard from "@/components/WhyCard";
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
            <section className="min-h-screen flex flex-col justify-center items-center  bg-[url('/hero-section-bg.jpg')] bg-cover bg-center">
              <div className="bg-black/40 bg-opacity-20  rounded-lg h-screen w-full flex flex-col justify-center items-start p-10">
                <h1 className="text-5xl font-bold text-white clash w-3/5 tracking-wide">
                  Powering Africa&apos;s future. Driving global energy
                  investments
                </h1>
                <p className="text-white text-base w-3/5 mt-4">
                  Afrovivo International Ltd is a next-generation energy
                  investment and infrastructure company, building the bridge
                  between global capital and Africa’s fast-growing oil, gas, and
                  renewable energy markets.
                </p>
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

            <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto " id="about">
              <span className=" clash font-normal text-4xl w-1/2 text-center">
                Creating{" "}
                <span className="text-orange-950 italic gambariano  font-semibold">
                  {" "}
                  sustainable energy value
                </span>{" "}
                beyond investments
              </span>

              <div className="flex flex-col justify-center items-center w-full mt-10">
                <div className="flex justify-center items-center w-full">
                  <div className="w-1/2 flex flex-col justify-center items-start gap-3">
                    <h2 className="text-3xl font-semibold">Who We Are</h2>
                    <p>
                      Afrovivo International Ltd is a registered limited
                      liability company headquartered in Ghana with a mission to
                      unlock Africa’s energy potential. We specialize in oil and
                      gas infrastructure projects, joint ventures, and strategic
                      acquisitions that fuel growth across West Africa
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-center ">
                    <Image
                      src="/team.jpg"
                      alt="Afrovivo Logo"
                      width={400}
                      height={200}
                      className="rounded-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10 w-full mt-26 place-items-center">
                <div className="flex flex-col justify-center items-start gap-2">
            <Image src="/vision.jpg" alt="Vision" width={400} height={200} className="rounded-sm" />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p>To become Africa’s leading energy investment house — mobilizing capital, accelerating
infrastructure, and creating sustainable value for investors, governments, and communities</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
            <Image src="/mission.jpg" alt="Mission" width={400} height={200} className="rounded-sm" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p>To provide innovative investment solutions that drive energy security, economic transformation,
and long-term prosperity in Africa</p>
                </div>
                </div>
              </div>
            </section>

            <section className="h-auto p-10 flex flex-col justify-center items-start w-full" id="our-focus">
              <h1 className="text-black text-4xl font-semibold mb-10">
                Our Focus
              </h1>
              <div className="flex justify-center items-center w-full">
                <ExpandableDropdown
                // title="Our Services & Solutions"
                />
              </div>
            </section>

            <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto bg-white" id="why-afrovivo">
        <div className="flex flex-col justify-center items-center w-full mt-10">
<h1 className="text-black text-4xl font-semibold">Why Afrovivo ?</h1>
        </div>
        <div className="grid grid-cols-4 gap-10 w-full mt-10 place-items-center">
          <WhyCard title="Deep Market Expertise" description="We understand Africa’s regulatory, financial, and operational landscapes" icon={<ChartBarIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Global Standards" description="We structure deals with institutional-grade rigor and governance" icon={<GlobeAltIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Strategic Partnerships" description="We build joint ventures that bring global players into African markets." icon={<LinkIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Long-term Value Creation" description="Our focus is not only short-term returns, but sustainable impact." icon={<ClockIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />

        </div>
            </section>
            <section className="flex  flex-col justify-start items-start  bg-orange-800 text-white h-auto p-10 min-h-[50vh] gap-10" id="our-leadership">
              <div className="flex justify-center items-start ">
                <div className="flex flex-col justify-center gap-4 items-start w-1/2">
                  <h1 className="text-4xl font-semibold"> Our Leadership </h1>
                  {/*<Image
                      src="/team.jpg"
                      alt=""
                      width={400}
                      height={500}
                      className="rounded-sm"
                    />*/}
                </div>
                <div className="flex flex-col justify-center gap-4 items-start w-1/2">
                  <p className="mt-5 text-base w-4/5">
                    Afrovivo’s leadership team combines expertise in{" "}
                    <span className="font-semibold">
                      energy, finance, and global markets
                    </span>
                    . Our C-Suite and advisors include seasoned professionals
                    with experience in capital markets, oil & gas operations,
                    and strategic development across Africa and beyond.
                  </p>
                  <button
                    className="bg-white text-black cursor-pointer text-sm flex justify-center items-center gap-2  px-4 py-3 rounded-sm"
                    onClick={() => setShowTeam(!showTeam)}
                  >
                    <UsersIcon className="w-5 h-5" />
                    Meet Our Team
                  </button>
                </div>
              </div>
              {showTeam && (
                <div className="w-full grid grid-cols-4 place-items-start">
                  <TeamCard name="John Doe" role="CEO" image="/person.jpg" />
                  <TeamCard name="Jane Smith" role="CTO" image="/person.jpg" />
                  <TeamCard
                    name="Mike Johnson"
                    role="CFO"
                    image="/person.jpg"
                  />
                  <TeamCard name="Emily Davis" role="COO" image="/person.jpg" />
                </div>
              )}
            </section>
                <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto bg-white" id="investors-and-partners">
        <div className="flex flex-col justify-center items-center gap-2 w-full mt-10">
<h1 className="text-black text-4xl font-semibold">Investors & Partners</h1>
<p className="text-base text-gray-700">We work with</p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full mt-10 place-items-center">
          <WhyCard title="Institutional Investors"  icon={<ChartBarIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Development Finance Institutions (DFIs)"  icon={<GlobeAltIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Private Equity Funds"  icon={<BanknotesIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Sovereign Wealth Funds"  icon={<BriefcaseIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Family Offices & HNWIs"  icon={<UsersIcon  className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />
          <WhyCard title="Government & Regulatory Agencies"  icon={<BuildingLibraryIcon className="w-10 h-10 bg-orange-200 text-orange-600 p-2 rounded-md"/>} />

        </div>
        <div>
          <button className="flex flex-co justify-center items-center gap-2 bg-orange-950 text-white hover:bg-orange-700 px-4 py-3 rounded-sm text-sm cursor-pointer mt-4">
            Explore partnership opportunities
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
