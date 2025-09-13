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
  Mail,
  Calendar,
  Settings2,
  BarChart3,
  ClipboardList,
  MonitorCheck,
  ArrowRight,
  Cpu,
  Workflow,
  ListChecks,
  Timer,
  Settings,
} from "lucide-react";
import { ScheduleButton } from "@/components/ScheduleButton";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { HomeGsap } from "@/components/HomeGsap";

export default function AutomationSolutionsPage() {
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
                Automation Solutions
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
              Automate Your Workflow,
              <span className="text-green-600">
                {" "}
                Eliminate Repetitive Tasks
              </span>
            </h1>

            <p className="text-[1.3rem] md:text-[2rem] text-gray-700">
              We build workflow automation systems that reduce manual effort,
              improve accuracy, and free up your team to focus on high-value
              work.
            </p>

            <ScheduleButton
              className="group bg-[#D1F470] text-[#213524] border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
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
            className="opacity-0 pb-20  h-auto min-w-auto md:w-[50%] border bg-grid flex gap-3 flex-col items-center"
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
                <p className="text-[0.8rem]">Automation Mapping</p>
                <p className="text-[0.8rem]">Identify repetitive processes</p>
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
                Workflow Optimization
              </h3>
              <p className="text-sm text-gray-500">Simplify repetitive tasks</p>

              <div className="flex justify-between mt-3">
                <div
                  id="assess"
                  className="opacity-0 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                    <ListChecks className="text-blue-600" size={28} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Tasks
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
                    Time Savings
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
                    Automation
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
                  <Settings size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Automated Processes</h4>
                  <p className="text-sm text-gray-500">
                    Scalable • Reliable • Error-Free
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
                  <p className="text-blue-600 text-base">60.0%</p>
                  <p className="text-gray-500 text-xs">Manual Work Reduced</p>
                </div>
                <div
                  id="stat-2"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-orange-500 text-base">3x</p>
                  <p className="text-gray-500 text-xs">Faster Processes</p>
                </div>
                <div
                  id="stat-3"
                  className="opacity-0 translate-y-4 text-center"
                >
                  <p className="text-green-600 text-base">99%</p>
                  <p className="text-gray-500 text-xs">Error Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Benefits */}
        <section className="mt-[6rem] flex flex-col items-center gap-[3rem] px-[2rem] md:px-[6rem]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
            Why <span className="text-green-600">Automation Matters</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] justify-items-center">
            {[
              {
                icon: <ClipboardList size={48} className="text-green-600" />,
                title: "Save Time",
                desc: "Eliminate repetitive tasks so your team can focus on growth and strategy.",
              },
              {
                icon: <MonitorCheck size={48} className="text-orange-600" />,
                title: "Reduce Errors",
                desc: "Automation ensures accuracy and consistency across your business processes.",
              },
              {
                icon: <BarChart3 size={48} className="text-blue-600" />,
                title: "Scale Effortlessly",
                desc: "Easily handle more customers and workflows without hiring extra staff.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-[2.5rem] flex flex-col items-center text-center w-[20rem] md:w-[22rem] border border-transparent hover:border-green-500 hover:scale-[1.03] transition"
              >
                {item.icon}
                <p className="mt-[1rem] font-semibold text-[1.4rem]">
                  {item.title}
                </p>
                <p className="mt-[0.5rem] text-gray-600 text-[1.05rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Services */}
        <section className="mt-[6rem] flex flex-col items-center gap-[3rem] px-[2rem] md:px-[6rem]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
            What <span className="text-green-600">We Offer</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] justify-items-center">
            {[
              {
                icon: <Calendar size={48} className="text-green-600" />,
                title: "Scheduling Automation",
                desc: "Set up booking flows with tools like Cal.com to avoid back-and-forth emails.",
              },
              {
                icon: <Workflow size={48} className="text-orange-600" />,
                title: "Workflow Automation",
                desc: "Automate repetitive tasks with n8n or Zapier — connect apps and streamline work.",
              },
              {
                icon: <Mail size={48} className="text-blue-600" />,
                title: "Email Automation",
                desc: "Send campaigns, reminders, and follow-ups automatically to engage customers.",
              },
              {
                icon: <Settings2 size={48} className="text-purple-600" />,
                title: "Custom Integrations",
                desc: "From CRMs to payments, we build automations tailored to your tools.",
              },
              {
                icon: <BarChart3 size={48} className="text-pink-600" />,
                title: "Analytics & Reporting",
                desc: "Get automated reports and dashboards for faster, smarter decisions.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-[2.5rem] flex flex-col items-center text-center w-[20rem] md:w-[22rem] border border-transparent hover:border-green-500 hover:scale-[1.03] transition"
              >
                {service.icon}
                <p className="mt-[1rem] font-semibold text-[1.4rem]">
                  {service.title}
                </p>
                <p className="mt-[0.5rem] text-gray-600 text-[1.05rem] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Step-by-step Process (using provided UI) */}
        <div
          className="border border-gray-300 rounded-xl 
          hover:border-green-300 hover:scale-[1.01] 
          transition-all duration-300 ease-in-out 
          shadow-lg w-[90%] h-[auto] p-[2rem] mt-[10rem] flex flex-col gap-10 items-center mx-auto"
        >
          <div className="text-center mb-[2rem]">
            <h5 className="text-[2rem] md:text-[2.5rem] mb-3">
              Streamlined{" "}
              <span className="text-green-600">Automation Process</span>
            </h5>
            <p className="text-[1rem] md:text-[1.2rem]">
              From discovery to optimization, we design automation workflows
              that save time, reduce errors, and scale with your business.
            </p>
          </div>

          <div className="flex flex-col flex-wrap md:flex-row justify-center gap-[5rem] mb-[2rem]">
            <div className="w-[15rem] flex flex-col items-center text-center gap-1">
              <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                01
              </p>
              <p className="font-semibold text-[1.3rem]">Discover & Research</p>
              <p className="text-[1rem]">
                Define goals, study workflows, and identify automation
                opportunities.
              </p>
            </div>

            <div className="w-[15rem] flex flex-col items-center text-center gap-1">
              <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                02
              </p>
              <p className="font-semibold text-[1.3rem]">Plan & Design</p>
              <p className="text-[1rem]">
                Create workflow diagrams and select tools like Cal.com, Zapier,
                or n8n.
              </p>
            </div>

            <div className="w-[15rem] flex flex-col items-center text-center gap-1">
              <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                03
              </p>
              <p className="font-semibold text-[1.3rem]">Develop & Automate</p>
              <p className="text-[1rem]">
                Implement automation pipelines and integrate with your business
                systems.
              </p>
            </div>

            <div className="w-[15rem] flex flex-col items-center text-center gap-1">
              <p className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-[2rem]">
                04
              </p>
              <p className="font-semibold text-[1.3rem]">Launch & Grow</p>
              <p className="text-[1rem]">
                Deploy, test, and refine automation with continuous monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Tools We Use */}
        <div className="w-full mt-[6rem] flex flex-col gap-[3rem] justify-center items-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
            Tools <span className="text-green-600">We Use</span>
          </h2>
          <TechStackMarquee />
        </div>

        {/* ✅ Final CTA */}
        <section className="mt-[6rem] mb-[8rem] flex flex-col items-center text-center px-[2rem]">
          <h3 className="text-[2rem] md:text-[2.5rem] font-semibold">
            Automate Your <span className="text-green-600">Business Today</span>
          </h3>
          <p className="mt-[1rem] text-[1.2rem] md:text-[1.4rem] max-w-[45rem] text-gray-700 leading-relaxed">
            From scheduling calls to automated reports, our team helps you save
            time and focus on what matters most. Start with a free consultation.
          </p>
          <ScheduleButton className="group mt-[2rem] inline-flex items-center justify-center gap-[0.8rem] bg-[#D1F470] text-[#213524] border border-green-600 p-[1rem] rounded-md w-[14rem] md:w-[18rem] font-medium text-[1.2rem] transition-colors duration-300 hover:bg-white hover:text-green-600 cursor-pointer" />
        </section>
      </HomeGsap>
    </main>
  );
}
