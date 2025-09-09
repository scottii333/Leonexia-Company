import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  Brain,
  Globe,
  Palette,
  MonitorSmartphone,
  SquareDashedMousePointer,
  CaseSensitive,
  Network,
  BadgeDollarSign,
  CloudCheck,
} from "lucide-react";
import { LoadingProgress } from "@/components/LoadingProgress";
import { HomeGsap } from "@/components/HomeGsap";
import Link from "next/link";

export default function WebServicesPage() {
  return (
    <main className="">
      <HomeGsap>
        {/* ✅ Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-green-600 font-semibold">
                Web Development
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Leonexia Web Development Section */}
        <section className="h-auto w-full flex flex-col md:flex-row">
          {/* Left: Text Content */}
          <div
            id="left-col"
            className="opacity-0 p-5 flex flex-col gap-4 min-w-[20rem] md:w-[50%] md:justify-center md:p-10"
          >
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem] leading-tight">
              Grow Your Business with
              <span className="text-green-600"> a Modern Website</span>
            </h1>

            <p className="text-[1.3rem] md:text-[2rem] text-gray-700">
              We design and develop fast, responsive, and user-friendly websites
              that help businesses build credibility, attract customers, and
              drive long-term growth.
            </p>

            <Link
              href="/schedule"
              className="group bg-black text-white border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
     transition-colors duration-300 
     hover:bg-white hover:text-green-600"
            >
              Schedule a Consultation
              <ArrowRight
                className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
                size={16}
              />
            </Link>
          </div>

          {/* Right: Grid Background */}
          <div
            id="right-col"
            className="opacity-0 pb-20 h-auto min-w-auto md:w-[50%] border bg-grid flex gap-3 flex-col items-center"
          >
            {/* Top Section */}
            <div
              id="top-section"
              className="opacity-0 mt-10 flex gap-2 p-1 w-[80%] h-[4.5rem]"
            >
              <div className="bg-gray-200 rounded-md p-2 w-[4rem] h-[4rem] flex items-center justify-center">
                <SquareDashedMousePointer size={30} />
              </div>
              <div className="w-full">
                <p className="text-[0.8rem]">Wireframe</p>
                <p className="text-[0.8rem]">Structure Layout Planning</p>
                {/* First Loader */}
                <LoadingProgress id="progress-1" target={40} />
              </div>
            </div>

            {/* Middle Section */}
            <div
              id="middle-section"
              className="opacity-0 flex items-center justify-center w-[80%]"
            >
              <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-300 via-orange-500/70 to-orange-500" />
              <div className="mx-4 w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center">
                <Brain size={28} className="text-white" />
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-orange-500 via-orange-500/70 to-green-500" />
            </div>

            {/* Bottom Section Left */}
            <div
              id="bottom-left"
              className="opacity-0 w-[80%] bg-white/70 rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Visual Design
              </h3>
              <p className="text-sm text-gray-500">Brand-aligned aesthetics</p>

              <div className="flex justify-between mt-3">
                <div
                  id="assess"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                    <Palette className="text-blue-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Palette
                  </p>
                </div>

                <div
                  id="deploy"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100">
                    <CaseSensitive className="text-orange-500" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Typography
                  </p>
                </div>

                <div
                  id="optimize"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100">
                    <MonitorSmartphone className="text-green-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Responsive
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section Right */}
            <div
              id="bottom-right"
              className="opacity-0 w-[80%] p-4 rounded-xl border bg-white/70 shadow-sm"
            >
              {/* Header with icon + title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600">
                  <Globe size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Live Website</h4>
                  <p className="text-sm text-gray-500">
                    Secure, Fast, SEO-Optimized
                  </p>
                </div>
              </div>

              {/* Second Loader */}
              <div className="mt-4">
                <LoadingProgress
                  id="progress-2"
                  color="bg-gradient-to-r from-red-500 via-orange-500 to-green-500"
                />
              </div>

              {/* Stats */}
              <div className="flex justify-between mt-4 text-sm font-semibold">
                <div
                  id="stat-1"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-blue-600 text-base">95.0%</p>
                  <p className="text-gray-500 text-xs">Page Speed</p>
                </div>
                <div
                  id="stat-2"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-orange-500 text-base">40%</p>
                  <p className="text-gray-500 text-xs">Higher CVR</p>
                </div>
                <div
                  id="stat-3"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-green-600 text-base">100%</p>
                  <p className="text-gray-500 text-xs">Mobile Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section for Seo Benefits and Implementation Steps  */}
        <section className="flex flex-col gap-5 items-center mt-[4rem]">
          <div className="w-[18rem] text-center md:w-[50rem]">
            <h2 className="text-[2rem] md:text-[2.5rem]">
              Crafted for <span className="text-green-600">Performance</span>
            </h2>
            <p className="mt-[1rem] text-[1.2rem] md:text-[1.5rem]">
              Every click optimized for results. Every page built for
              visibility. We engineer digital experiences that rank higher and
              convert better.
            </p>
          </div>

          <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-[1.5rem]">
            <div
              className="w-[18rem] h-[18rem] shadow-lg rounded-md 
             border border-transparent 
             hover:border-green-300 hover:scale-[1.01] 
             transition-all duration-300 ease-in-out 
            flex flex-col items-center justify-center p-[2rem] text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-green-100">
                <Network className="text-green-600" size={35} />
              </div>
              <p className="mt-2 text-[1.3rem] font-bold ">
                60% <br />
                <span className="font-semibold text-[1rem]">More Traffic</span>
              </p>
              <p>
                Increased visibility through optimized rankings and keyword
                targeting.
              </p>
            </div>
            <div
              className="w-[18rem] h-[18rem] shadow-lg rounded-md 
             border border-transparent 
             hover:border-green-300 hover:scale-[1.01] 
             transition-all duration-300 ease-in-out 
              flex flex-col items-center justify-center p-[2rem] text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-green-100">
                <BadgeDollarSign className="text-green-600" size={35} />
              </div>
              <p className="mt-2 text-[1.3rem] font-bold ">
                10x <br />
                <span className="font-semibold text-[1rem]">
                  Higher Conversions
                </span>
              </p>
              <p>
                Turn clicks into customers with persuasive, data-driven SEO
                design.
              </p>
            </div>
            <div
              className="w-[18rem] h-[18rem] shadow-lg rounded-md 
             border border-transparent 
             hover:border-green-300 hover:scale-[1.01] 
             transition-all duration-300 ease-in-out 
             flex flex-col items-center justify-center p-[2rem] text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-green-100">
                <CloudCheck className="text-green-600" size={35} />
              </div>
              <p className="mt-2 text-[1.3rem] font-bold ">
                24/7 <br />
                <span className="font-semibold text-[1rem]">
                  Online Presence
                </span>
              </p>
              <p>
                Always visible, always accessible—on every device and platform.
              </p>
            </div>
          </div>

          <div
            className="border border-gray-300 rounded-xl 
             hover:border-green-300 hover:scale-[1.01] 
             transition-all duration-300 ease-in-out 
             shadow-lg w-[90%] h-[auto] p-[2rem] mt-[10rem] flex flex-col  gap-10 items-center"
          >
            <div className="text-center mb-[2rem]">
              <h5 className="text-[2rem] md:text-[2.5rem] mb-3">
                Quick <span className="text-green-600">SEO</span> Implementation
              </h5>
              <p className="text-[1rem] md:text-[1.2rem]">
                From website build and SEO audit to measurable ranking
                improvements in 4–6 weeks.
              </p>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row justify-center gap-[5rem] mb-[2rem]">
              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  01
                </p>
                <p className="font-semibold text-[1.3rem]">Assess</p>
                <p className="text-[1rem]">
                  Audit your site and identify SEO opportunities.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  02
                </p>
                <p className="font-semibold text-[1.3rem]">Design</p>
                <p className="text-[1rem]">
                  Create a modern, responsive design with SEO in mind.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  03
                </p>
                <p className="font-semibold text-[1.3rem]">Develop & Deploy</p>
                <p className="text-[1rem]">
                  Build a fast, secure site with on-page SEO optimization.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  04
                </p>
                <p className="font-semibold text-[1.3rem]">Optimize</p>
                <p className="text-[1rem]">
                  Track performance, refine SEO, and scale results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HomeGsap>
    </main>
  );
}
