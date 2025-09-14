"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UsersIcon } from "@heroicons/react/24/outline";
import { TeamCard } from "@/components/TeamCard";
import ExpandableDropdown from "@/components/ExpandableDropdown";
export default function Home() {
  const [showTeam, setShowTeam] = useState(false);

  const [siteIsComplete, setSiteIsComplete] = useState(false);

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

            <section className="flex flex-col justify-center items-center gap-3 p-10 h-auto ">
              <span className=" clash font-normal text-4xl w-1/2 text-center">
                Creating{" "}
                <span className="text-orange-600 italic gambariano  font-semibold">
                  {" "}
                  sustainable energy value
                </span>{" "}
                beyond investments
              </span>

              <div className="flex flex-col justify-center items-center w-full mt-10">
                <div className="flex justify-between items-center w-full">
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
              </div>
            </section>

            <section className="h-auto p-10 flex flex-col justify-center items-start w-full">
              <h1 className="text-black text-4xl font-semibold mb-10">
                Our Focus
              </h1>
              <div className="flex justify-center items-center w-full">
                <ExpandableDropdown
                // title="Our Services & Solutions"
                />
              </div>
            </section>
            <section className="flex  flex-col justify-start items-start  bg-blue-950 text-white h-auto p-10 gap-10">
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
          </main>
        </>
      )}
    </>
  );
}
