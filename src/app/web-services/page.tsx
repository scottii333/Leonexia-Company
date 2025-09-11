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
  Code,
  CircleCheckBig,
  ShoppingCart,
  ArrowDown,
} from "lucide-react";
import { ScheduleButton } from "@/components/ScheduleButton";
import { LoadingProgress } from "@/components/LoadingProgress";
import { HomeGsap } from "@/components/HomeGsap";
import Link from "next/link";

export default function WebServicesPage() {
  return (
    <main>
      <HomeGsap>
        {/* ✅ Breadcrumbs */}
        <Breadcrumb className="p-[2rem]">
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

            <ScheduleButton
              className="group bg-black text-white border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
             transition-colors duration-300 
             hover:bg-white hover:text-green-600"
              withArrow={false} // disable default arrow
            >
              Schedule a Consultation
              <ArrowRight
                className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
                size={16}
              />
            </ScheduleButton>
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

        {/* Section for Benefits and what we offer and Implementation Steps */}
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

          <div className=" h-[auto] w-[auto] p-[1rem] flex flex-col justify-center items-center text-center  mt-[5rem]">
            <p className="text-[2rem]">
              What <span className="text-green-600">We Offer</span>
            </p>
            <p className="text-[1.2rem] md:text-[1.5rem] mt-[1rem] md:w-[60%]">
              From interactive prototypes to full-scale digital solutions, we
              bring your vision to life with innovative design and
              development—whether it’s e-commerce, service-based platforms, or
              custom business websites.
            </p>
          </div>

          {/* Service Offerings */}
          <div className="mt-[3rem] w-full flex flex-col gap-[5rem] justify-center items-center">
            {/* Card 1 */}
            <div className="hover:border-green-300 hover:scale-[1.01] transition-all duration-300 ease-in-out border border-gray-300 rounded-xl h-[auto] w-[90%] relative bg-white shadow-md flex flex-col md:flex-row p-[1rem] gap-[1rem] ">
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 
                 bg-gradient-to-r from-green-500 via-lime-500 to-emerald-600
                 text-white text-xs md:text-lg font-semibold 
                 px-10 py-3 rounded-full shadow-lg tracking-wide"
              >
                Most Popular
              </div>

              <div className="flex flex-col gap-[1rem] w-full md:w-[70%]">
                <div className="flex items-center ">
                  <div className="bg-green-500 min-w-[5rem]  h-[5rem] m-[1rem] rounded-md flex items-center justify-center">
                    <Code size={30} className="text-white " />
                  </div>

                  <div>
                    <p className="text-[1.5rem]">Next.js Development</p>
                    <p>
                      High-performance websites built with Next.js, React, and
                      modern tools. Perfect for startups, services, and growing
                      businesses.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>Custom Next.js websites</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>GSAP animations</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>Responsive design systems</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>API & third-party integrations</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>SEO & performance optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>UI/UX design & prototyping</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>Workflow automation included</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-green-500 shrink-0"
                    />
                    <p>1yr support included</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1rem] md:justify-center w-full md:w-[30%]">
                <p className="text-[1.5rem] md:text-[2rem] font-semibold">
                  Custom Quote
                </p>
                <ScheduleButton
                  className="cursor-pointer group bg-green-600 text-white border border-green-600 p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.1em] md:w-[18rem] 
              transition-colors duration-300
              hover:bg-white hover:text-green-600 hover:border-green-600"
                  withArrow={false} // disable default arrow
                >
                  Schedule a Consultation
                  <ArrowRight
                    className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
                    size={16}
                  />
                </ScheduleButton>
                <p>Free Consultation included*</p>
              </div>
            </div>

            {/* Card 2 */}

            <div className="hover:border-orange-300 hover:scale-[1.01] transition-all duration-300 ease-in-out border border-gray-300 rounded-xl h-[auto] w-[90%] relative bg-white shadow-md flex flex-col md:flex-row p-[1rem] gap-[1rem]">
              <div
                className="absolute -top-6  left-1/2 -translate-x-1/2 
                 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                 text-white text-xs md:text-lg font-semibold 
                px-10 py-3 rounded-full shadow-lg tracking-wide"
              >
                Best Value
              </div>

              <div className="flex flex-col gap-[1rem] w-full md:w-[70%]">
                <div className="flex  items-center ">
                  <div className="bg-orange-500 min-w-[5rem]  h-[5rem] m-[1rem]  rounded-md flex items-center justify-center">
                    <ShoppingCart size={30} className="text-white " />
                  </div>

                  <div>
                    <p className="text-[1.5rem]">E-commerce Solutions</p>
                    <p>
                      Custom e-commerce platforms tailored for maximum
                      conversions and scalability. Built with Next.js,
                      integrated with secure payments, and optimized for mobile.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Custom store design</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Payment gateway setup</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Product catalog & inventory</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Mobile-first experience</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Analytics & reporting</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>UI/UX design & prototyping</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Workflow automation included</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-orange-500 shrink-0"
                    />
                    <p>Store launch support</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[1rem] md:justify-center w-full md:w-[30%]">
                <p className="text-[1.5rem] md:text-[2rem] font-semibold">
                  Custom Quote
                </p>
                <ScheduleButton
                  className="cursor-pointer group bg-orange-500 text-white border border-orange-600 p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.1em] md:w-[18rem] 
              transition-colors duration-300
              hover:bg-white hover:text-orange-500 hover:border-orange-500"
                  withArrow={false} // disable default arrow
                >
                  Schedule a Consultation
                  <ArrowRight
                    className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-orange-500"
                    size={16}
                  />
                </ScheduleButton>
                <p>Free Consultation included*</p>
              </div>
            </div>

            {/* Card 3 */}

            <div className="hover:border-violet-300 hover:scale-[1.01] transition-all duration-300 ease-in-out border border-gray-300 rounded-xl h-[auto] w-[90%] relative bg-white shadow-md flex flex-col md:flex-row p-[1rem] gap-[1rem]">
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 
                 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600
                 text-white text-xs md:text-lg font-semibold 
                 px-10 py-3 rounded-full shadow-lg tracking-wide"
              >
                Enterprise
              </div>

              <div className="flex flex-col gap-[1rem] w-full md:w-[70%]">
                <div className="flex  items-center ">
                  <div className="bg-violet-500 min-w-[5rem]  h-[5rem] m-[1rem]  rounded-md flex items-center justify-center">
                    <Globe size={30} className="text-white" />
                  </div>

                  <div>
                    <p className="text-[1.5rem]">Corporate Websites</p>
                    <p>
                      Professional Next.js websites with enterprise-grade
                      performance and scalability. Perfect for corporate brands,
                      agencies, and service businesses.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Next.js development</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Enterprise performance</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Content management (CMS)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Multi-language support</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Advanced SEO</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>UI/UX design & prototyping</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Workflow automation included</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheckBig
                      size={30}
                      className="text-violet-500 shrink-0"
                    />
                    <p>Ongoing maintenance</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1rem] md:justify-center w-full md:w-[30%]">
                <p className="text-[1.5rem] md:text-[2rem] font-semibold">
                  Custom Quote
                </p>
                <ScheduleButton
                  className="cursor-pointer group bg-violet-500 text-white border border-violet-600 p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.1em] md:w-[18rem] 
              transition-colors duration-300
              hover:bg-white hover:text-violet-500 hover:border-violet-500"
                  withArrow={false} // disable default arrow
                >
                  Schedule a Consultation
                  <ArrowRight
                    className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-violet-500"
                    size={16}
                  />
                </ScheduleButton>
                <p>Free Consultation included*</p>
              </div>
            </div>
          </div>

          {/* Transition Section */}
          <div className="mt-[6rem]  w-[90%] text-center flex flex-col items-center gap-6">
            <h3 className="text-[2rem] md:text-[2.5rem] ">
              Our <span className="text-green-600">Development Process</span>
            </h3>
            <p className="text-[1rem] md:text-[1.3rem] max-w-[60rem] leading-relaxed">
              Behind every successful website we build—whether it’s a startup
              Business page, a full-scale e-commerce platform, or a corporate
              solution—there’s a proven process. We combine{" "}
              <span className=" text-green-600 font-semibold">
                strategy, design, SEO
              </span>
              , and{" "}
              <span className="text-green-600 font-semibold">
                workflow automation
              </span>{" "}
              to deliver digital experiences that perform, scale, and grow with
              your business.
            </p>
            <p className="text-[1rem] md:text-[1.1rem] max-w-[50rem] ">
              Here’s how we take your vision from concept to launch in four
              streamlined steps:
            </p>

            {/* Arrow Down */}
            <ArrowDown
              size={40}
              className="text-green-600 mt-[5rem] animate-bounce "
            />
          </div>

          <div
            className="border border-gray-300 rounded-xl 
   hover:border-green-300 hover:scale-[1.01] 
   transition-all duration-300 ease-in-out 
   shadow-lg w-[90%] h-[auto] p-[2rem] mt-[10rem] flex flex-col  gap-10 items-center"
          >
            <div className="text-center mb-[2rem]">
              <h5 className="text-[2rem] md:text-[2.5rem] mb-3">
                Streamlined{" "}
                <span className="text-green-600">Web Development</span>
              </h5>
              <p className="text-[1rem] md:text-[1.2rem]">
                From discovery to launch, we craft high-performance websites
                with built-in SEO and workflow automation for scalable growth.
              </p>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row justify-center gap-[5rem] mb-[2rem]">
              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  01
                </p>
                <p className="font-semibold text-[1.3rem]">
                  Discover & Research
                </p>
                <p className="text-[1rem]">
                  Define goals, study your audience, and analyze competitors to
                  set a solid foundation.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  02
                </p>
                <p className="font-semibold text-[1.3rem]">Plan & Design</p>
                <p className="text-[1rem]">
                  Create user-focused designs, prototypes, and SEO-friendly
                  layouts tailored for performance.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  03
                </p>
                <p className="font-semibold text-[1.3rem]">
                  Develop & Automate
                </p>
                <p className="text-[1rem]">
                  Build fast, secure websites with Next.js, workflow automation,
                  API integrations, and SEO optimization.
                </p>
              </div>

              <div className="w-[15rem] flex flex-col items-center text-center gap-1">
                <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                  04
                </p>
                <p className="font-semibold text-[1.3rem]">Launch & Grow</p>
                <p className="text-[1rem]">
                  Deploy with confidence, track performance, monitor SEO, and
                  refine for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HomeGsap>
    </main>
  );
}
