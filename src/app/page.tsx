import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Brain,
  ListTodo,
  Zap,
  Shield,
  CloudCheck,
  Network,
  BadgeDollarSign,
  Rocket,
  Lightbulb,
  HeartHandshake,
  SearchCheck,
  GlobeLock,
} from "lucide-react";
import { LoadingProgress } from "@/components/LoadingProgress";
import { HomeGsap } from "@/components/HomeGsap";
import { ScheduleButton } from "@/components/ScheduleButton";

export default function Page() {
  return (
    <main>
      <HomeGsap>
        {/* Leonexia Hero Section */}
        <section className="h-auto w-full flex flex-col md:flex-row">
          {/* Left: Text Content */}
          <div
            id="left-col"
            className="opacity-0 p-5 flex flex-col gap-4 min-w-[20rem] md:w-[50%] md:justify-center md:p-10"
          >
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem]">
              Your End-to-End
              <span className="text-green-600"> Software Partner</span>
            </h1>
            <p className="text-[1.3rem] md:text-[2rem]">
              Our team builds reliable, user-focused solutions that optimize
              workflows, boost engagement, and transform how businesses deliver
              value.
            </p>
            <ScheduleButton
              className="group bg-black text-white border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
             transition-colors duration-300 
             hover:bg-white hover:text-green-600"
            />
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
                <Building2 size={30} />
              </div>
              <div className="w-full">
                <p className="text-[0.8rem]">Traditional Operations</p>
                <p className="text-[0.8rem]">
                  Manual Processes, Limited Insights
                </p>
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
                Website Development
              </h3>
              <p className="text-sm text-gray-500">Leonexia Implementation</p>

              <div className="flex justify-between mt-3">
                <div
                  id="assess"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                    <ListTodo className="text-blue-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Assess
                  </p>
                </div>

                <div
                  id="deploy"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100">
                    <Zap className="text-orange-500" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Deploy
                  </p>
                </div>

                <div
                  id="optimize"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100">
                    <Shield className="text-green-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Optimize
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
                  <CloudCheck size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Cloud Solutions</h4>
                  <p className="text-sm text-gray-500">
                    Scalable infrastructure, seamless integrations
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
                  <p className="text-blue-600 text-base">99.9%</p>
                  <p className="text-gray-500 text-xs">Uptime</p>
                </div>
                <div
                  id="stat-2"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-orange-500 text-base">50%</p>
                  <p className="text-gray-500 text-xs">Cost Savings</p>
                </div>
                <div
                  id="stat-3"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-green-600 text-base">24/7</p>
                  <p className="text-gray-500 text-xs">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section for Seo Benefits and Implementation Steps  */}
        <section className="flex flex-col gap-5 items-center mt-[4rem]">
          <div className="w-[18rem] text-center md:w-[50rem]">
            <h2 className="text-[2rem] md:text-[2.5rem]">
              <span className="text-green-600">Google SEO </span>
              Solutions for Modern Business
            </h2>
            <p className="mt-[1rem] text-[1.2rem]v md:text-[1.5rem]">
              Rank higher on Google, drive targeted traffic, and convert
              searches into customers. Stay ahead of competitors with proven SEO
              strategies designed for Google’s algorithms.
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
                <span className="font-semibold text-[1rem]">
                  More Google Traffic
                </span>
              </p>
              <p>Boost visibility and organic clicks with optimized pages.</p>
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
                  Turn search into measurable sales and leads.
                </span>
              </p>
              <p>Boost visibility and organic clicks with optimized pages.</p>
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
                  Internet Presence
                </span>
              </p>
              <p>
                Be discoverable around the clock with strong rankings across
                devices.
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

        {/* Section for Why Choose Leonexia */}
        <section className="mt-[10rem] flex flex-col items-center gap-[3rem] ">
          <div className="w-[18rem] md:w-[40rem] text-center ">
            <p className="text-[2rem] md:text-[2.5rem] ">
              Why Choose Leonexia?
            </p>
            <p className="mt-[1rem] text-[1.2rem] md:text-[1.5rem]">
              Your Trusted Partner in
              <span className="text-green-600"> Web Development & SEO</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:w-[90%] flex-wrap justify-center items-center gap-[3rem]">
            {/* Card 1 */}
            <div
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col items-center justify-center gap-4 p-[2rem] rounded-xl border border-transparent
       hover:border-green-300 hover:scale-[1.01] 
       transition-all duration-300 ease-in-out 
        text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-orange-100">
                <Rocket size={40} className="text-orange-600" />
              </div>

              <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
                Fast Delivery
              </p>
              <p className="md:text-[1.2rem]">
                Accelerated development cycles ensure your digital solutions are
                delivered on time without compromising quality.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col items-center justify-center gap-4 p-[2rem] rounded-xl border border-transparent
       hover:border-green-300 hover:scale-[1.01] 
       transition-all duration-300 ease-in-out 
    text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-blue-100">
                <SearchCheck size={40} className="text-blue-600" />
              </div>
              <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
                SEO-First Approach
              </p>
              <p className="md:text-[1.2rem]">
                Every project is engineered with SEO best practices baked in,
                helping your business achieve higher visibility and sustainable
                growth.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col items-center justify-center gap-4 p-[2rem] rounded-xl border border-transparent
       hover:border-green-300 hover:scale-[1.01] 
       transition-all duration-300 ease-in-out 
       text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-yellow-100">
                <Lightbulb size={40} className="text-yellow-600" />
              </div>
              <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
                Best Tech Stack
              </p>
              <p className="md:text-[1.2rem]">
                We leverage modern frameworks and industry-proven tools to build
                scalable, future-ready applications that stand the test of time.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col items-center justify-center gap-4 p-[2rem] rounded-xl border border-transparent
       hover:border-green-300 hover:scale-[1.01] 
       transition-all duration-300 ease-in-out 
       text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-purple-100">
                <GlobeLock size={40} className="text-purple-600" />
              </div>
              <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
                Secure Cloud Partner
              </p>
              <p className="md:text-[1.2rem]">
                Enterprise-grade security and cloud infrastructure ensure
                reliability, scalability, and peace of mind for mission-critical
                systems.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col items-center justify-center gap-4 p-[2rem] rounded-xl border border-transparent
       hover:border-green-300 hover:scale-[1.01] 
       transition-all duration-300 ease-in-out 
       text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-pink-100">
                <HeartHandshake size={40} className="text-pink-600" />
              </div>
              <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
                Long-Term Support
              </p>
              <p className="md:text-[1.2rem]">
                We provide continuous monitoring, proactive improvements, and
                post-launch care to keep your business ahead of the curve.
              </p>
            </div>

            <Link
              href="/schedule"
              className="shadow-lg w-[18rem] h-[21rem] md:h-[25rem] md:w-[23rem] flex flex-col  justify-center gap-6 p-[2rem] rounded-xl border border-transparent
     hover:border-green-300 hover:scale-[1.01] 
     transition-all duration-300 ease-in-out 
     cursor-pointer text-center"
            >
              <p className="font-semibold text-[1.2rem] md:text-[1.5rem] text-gray-900">
                Schedule Consultation
              </p>
              <p className="text-gray-600 text-center md:text-[1.2rem]">
                Book a strategy call with our team and let’s plan your project
                together.
              </p>
              <ArrowRight size={40} className="text-green-600" />
            </Link>
          </div>
        </section>
      </HomeGsap>
    </main>
  );
}
