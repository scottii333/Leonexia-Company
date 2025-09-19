import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LoadingProgress } from "@/components/LoadingProgress";
import Link from "next/link";
import {
  Cpu,
  Workflow,
  ListChecks,
  Timer,
  Settings,
  Eye,
  ArrowRight,
} from "lucide-react";
import { ScheduleButton } from "@/components/ScheduleButton";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { HomeGsap } from "@/components/HomeGsap";
import Image from "next/image";
import AnchorLink from "@/components/AnchorLink";

export default function OurWorksPage() {
  const works = [
    {
      title: "SPLND-D",
      type: "E-Commerce Website",
      industry: "Premium Clothing",
      img: "/case-study/splnd-d.jpeg",
    },
    {
      title: "DaCopi",
      type: "Coffee Shop Website",
      industry: "Premium Coffee",
      img: "/case-study/coffee.jpeg",
    },
    {
      title: "MT Auto Spa",
      type: "Auto Care, Detailing, and Spa Website",
      industry: "Premium Automotive",
      img: "/case-study/Mt-AutoSpa.png",
    },
  ];

  return (
    <main className="scroll-smooth">
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
                Our Works
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* ✅ Hero */}
        <section className="h-auto w-full flex flex-col md:flex-row">
          {/* Left: Text Content */}
          <div
            id="left-col"
            className="opacity-0 p-5 flex flex-col gap-4 min-w-[20rem] md:w-[50%] md:justify-center md:p-10"
          >
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem] leading-tight">
              Showcasing Our{" "}
              <span className="text-green-600">Digital Success Stories</span>
            </h1>

            <p className="text-[1.3rem] md:text-[2rem] text-gray-700">
              Explore how we’ve helped brands build impactful websites, apps,
              and platforms that drive growth, improve user experience, and
              deliver measurable results.
            </p>

            <AnchorLink
              href="#case-study"
              className="group bg-[#D1F470] text-[#213524] border border-black p-3 rounded-md 
             w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
             transition-colors duration-300 
             hover:bg-white hover:text-green-600"
            >
              View Case Studies
              <ArrowRight
                className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
                size={16}
              />
            </AnchorLink>
          </div>

          {/* Right: Grid Background */}
          <div
            id="right-col"
            className="opacity-0 pb-20 h-auto min-w-auto md:w-[50%] border bg-grid flex flex-col items-center gap-3"
          >
            {/* Top Section */}
            <div
              id="top-section"
              className="opacity-0 mt-10 flex gap-2 p-1 w-[80%] h-[4.5rem]"
            >
              <div className="bg-gray-200 rounded-md p-2 w-[4rem] h-[4rem] flex items-center justify-center">
                <Workflow size={30} />
              </div>
              <div className="w-full">
                <p className="text-[0.8rem]">Discovery & Strategy</p>
                <p className="text-[0.8rem]">Understanding client vision</p>
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
                <Cpu size={28} className="text-white" />
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-orange-500 via-orange-500/70 to-green-500" />
            </div>

            {/* Bottom Section Left */}
            <div
              id="bottom-left"
              className="opacity-0 w-[80%] bg-white/70 rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Case Study Metrics
              </h3>
              <p className="text-sm text-gray-500">What we deliver</p>

              <div className="flex justify-between mt-3">
                <div
                  id="assess"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                    <ListChecks className="text-blue-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Features
                  </p>
                </div>

                <div
                  id="deploy"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100">
                    <Timer className="text-orange-500" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Timeline
                  </p>
                </div>

                <div
                  id="optimize"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100">
                    <Workflow className="text-green-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Results
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section Right */}
            <div
              id="bottom-right"
              className="opacity-0 w-[80%] p-4 rounded-xl border bg-white/70 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600">
                  <Settings size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Impact Delivered</h4>
                  <p className="text-sm text-gray-500">
                    Scalable • Measurable • Long-term
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <LoadingProgress
                  id="progress-2"
                  color="bg-gradient-to-r from-red-500 via-orange-500 to-green-500"
                />
              </div>

              <div className="flex justify-between mt-4 text-sm font-semibold">
                <div
                  id="stat-1"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-blue-600 text-base">200%</p>
                  <p className="text-gray-500 text-xs">Traffic Growth</p>
                </div>
                <div
                  id="stat-2"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-orange-500 text-base">50+</p>
                  <p className="text-gray-500 text-xs">Projects Launched</p>
                </div>
                <div
                  id="stat-3"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-green-600 text-base">95%</p>
                  <p className="text-gray-500 text-xs">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Trusted Tech Section */}
        <div className="w-full mt-[5rem] flex flex-col gap-[5rem] justify-center items-center">
          <div className="w-[90%] text-center flex flex-col items-center gap-6">
            <p className="text-[2rem] md:text-[2.5rem] font-semibold">
              Built With{" "}
              <span className="text-green-600">Trusted Technologies</span>
            </p>
            <p className="text-[1rem] md:text-[1.3rem] max-w-[60rem] leading-relaxed text-gray-700">
              Every project we deliver follows{" "}
              <span className="font-semibold text-green-600">
                SEO best practices
              </span>
              ,{" "}
              <span className="font-semibold text-green-600">
                structured data (schema.org)
              </span>
              , and full integration with{" "}
              <span className="font-semibold text-green-600">
                Google Analytics & Search Console
              </span>
              —ensuring your website is visible, measurable, and ready to grow.
            </p>
          </div>
          <TechStackMarquee />
        </div>

        {/* ✅ Case Studies Section */}
        <section
          id="case-study"
          className="w-full mt-[5rem] mb-[5rem] flex flex-col gap-10 justify-center items-center p-[2rem]"
        >
          <div className="flex flex-col gap-5 items-center text-center">
            <p className="font-semibold text-green-600 text-[1.5rem] md:text-[2.5rem]">
              Case Study
            </p>
            <p className="text-center text-[1rem] md:text-[1.6rem] max-w-[60rem] leading-relaxed">
              A showcase of our past works and the results we&apos;ve achieved
              for our clients
            </p>
          </div>

          <div className="w-full min-auto-screen p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {works.map((work, index) => (
              <div key={index} className="w-full max-w-[28rem] h-[23rem]">
                {/* Image Container */}
                <div className="relative w-full h-[16rem] group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                  {/* Image with Zoom Inside */}
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-fill object-top transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                  />

                  {/* Overlay with gray background + Eye Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={40} className="text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Text Content */}
                <p className="font-bold text-[1.3rem] mt-2">{work.title}</p>
                <p>{work.type}</p>
                <p className="text-green-700 font-semibold text-[1.2rem]">
                  {work.industry}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Final CTA */}
        <section className="mt-[6rem] mb-[8rem] flex flex-col items-center text-center px-[2rem]">
          <h3 className="text-[2rem] md:text-[2.5rem] font-semibold">
            Let’s Build Your{" "}
            <span className="text-green-600">Next Case Study</span>
          </h3>
          <p className="mt-[1rem] text-[1.2rem] md:text-[1.4rem] max-w-[45rem] text-gray-700 leading-relaxed">
            Partner with us to create digital solutions that drive measurable
            growth. We’re ready to turn your idea into our next success story.
          </p>
          <ScheduleButton className="group mt-[2rem] inline-flex items-center justify-center gap-[0.8rem] bg-[#D1F470] text-[#213524] border border-green-600 p-[1rem] rounded-md w-[14rem] md:w-[18rem] font-medium text-[1.2rem] transition-colors duration-300 hover:bg-white hover:text-green-600 cursor-pointer">
            Start a Project
          </ScheduleButton>
        </section>
      </HomeGsap>
    </main>
  );
}
