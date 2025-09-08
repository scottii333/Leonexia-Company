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
    <main className="">
      <HomeGsap>
        {/* Leonexia Hero Section  */}
        <section className="h-auto w-full  flex flex-col md:flex-row">
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
            className="opacity-0 pb-20 h-[auto] min-w-[auto] md:w-[50%]  border bg-grid flex gap-3 flex-col items-center  "
          >
            {/* Top Section with building icon + loading bar */}
            <div
              id="top-section"
              className="opacity-0 mt-10 flex gap-2 p-1 w-[80%] h-[4.5rem]"
            >
              {/* Building Icon */}
              <div className="bg-gray-200 rounded-md p-2 w-[4rem] h-[4rem] flex items-center justify-center">
                <Building2 className="" size={30} />
              </div>
              <div className="w-full">
                <p className="text-[0.8rem]">Traditional Operations</p>
                <p className="text-[0.8rem]">
                  Manual Processes, Limited Insights
                </p>
                {/* Loading Bar */}
                <LoadingProgress target={50} />
              </div>
            </div>
            {/* Middle Section with lines and circle */}
            <div
              id="middle-section"
              className="opacity-0 flex items-center justify-center w-[80%] "
            >
              {/* Left line */}
              <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-300 via-orange-500/70 to-orange-500" />

              {/* Circle with brain icon */}
              <div className="mx-4 w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center">
                <Brain size={28} className="text-white" />
              </div>

              {/* Right line */}
              <div className="h-[2px] flex-1 bg-gradient-to-r from-orange-500 via-orange-500/70 to-green-500" />
            </div>

            {/* Bottom Section with 2 cards */}
            <div
              id="bottom-left"
              className="opacity-0 w-[80%] bg-white/70 rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                Website Development
              </h3>
              <p className="text-sm text-gray-500">Leonexia Implementation</p>

              {/* Features */}
              <div className="flex justify-between mt-3">
                {/* Assess */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                    <ListTodo className="text-blue-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Assess
                  </p>
                </div>

                {/* Deploy */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100">
                    <Zap className="text-orange-500" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Deploy
                  </p>
                </div>

                {/* Optimize */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100">
                    <Shield className="text-green-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Optimize
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card with cloud icon + title + progress + stats */}
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
                  <h3 className="font-semibold text-lg">
                    AI-Powered Enterprise
                  </h3>
                  <p className="text-sm text-gray-500">
                    Automated workflows, intelligent insights
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <LoadingProgress color="bg-gradient-to-r from-red-500 via-orange-500 to-green-500" />
              </div>

              {/* Stats */}
              <div className="flex justify-between mt-4 text-sm font-semibold">
                <div className="text-center">
                  <p className="text-blue-600 text-base">3x</p>
                  <p className="text-gray-500 text-xs">Efficiency</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-500 text-base">60%</p>
                  <p className="text-gray-500 text-xs">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-green-600 text-base">24/7</p>
                  <p className="text-gray-500 text-xs">Automation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeGsap>
    </main>
  );
}
