import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Brain,
  ListTodo,
  Zap,
  Shield,
  CloudCheck,
} from "lucide-react";
import { LoadingProgress } from "@/components/LoadingProgress";
import { HomeGsap } from "@/components/HomeGsap";

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
            <Link
              href="/schedule"
              className="group bg-black text-white border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
             transition-colors duration-300 
             hover:bg-white hover:text-green-600"
            >
              Schedule Consultation
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
                  <h3 className="font-semibold text-lg">Cloud Solutions</h3>
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
      </HomeGsap>
    </main>
  );
}
