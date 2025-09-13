import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Workflow,
  Mail,
  Calendar,
  Settings2,
  BarChart3,
  ClipboardList,
  MonitorCheck,
} from "lucide-react";
import { ScheduleButton } from "@/components/ScheduleButton";
import { TechStackMarquee } from "@/components/TechStackMarquee";

export default function AutomationSolutionsPage() {
  return (
    <main>
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
      <section className="flex flex-col items-center text-center px-[2rem] md:px-[5rem] mt-[4rem]">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight">
          Smart <span className="text-green-600">Automation Solutions</span>
        </h1>
        <p className="mt-[1.5rem] text-[1.2rem] md:text-[1.5rem] text-gray-700 max-w-[55rem] leading-relaxed">
          We integrate automation into your workflows — from scheduling and
          emails to analytics and reporting. Free up your time, reduce errors,
          and let your business run more efficiently.
        </p>
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
            From discovery to optimization, we design automation workflows that
            save time, reduce errors, and scale with your business.
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
              Create workflow diagrams and select tools like Cal.com, Zapier, or
              n8n.
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
    </main>
  );
}
