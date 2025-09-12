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
              icon: <ClipboardList size={40} className="text-green-600" />,
              title: "Save Time",
              desc: "Eliminate repetitive tasks so your team can focus on growth and strategy.",
            },
            {
              icon: <MonitorCheck size={40} className="text-orange-600" />,
              title: "Reduce Errors",
              desc: "Automation ensures accuracy and consistency across your business processes.",
            },
            {
              icon: <BarChart3 size={40} className="text-blue-600" />,
              title: "Scale Effortlessly",
              desc: "Easily handle more customers and workflows without hiring extra staff.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-[2rem] flex flex-col items-center text-center w-[18rem] md:w-[20rem] border border-transparent hover:border-green-500 hover:scale-[1.02] transition"
            >
              {item.icon}
              <p className="mt-[1rem] font-semibold text-[1.3rem]">
                {item.title}
              </p>
              <p className="mt-[0.5rem] text-gray-600 text-[1rem] leading-relaxed">
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
              icon: <Calendar size={40} className="text-green-600" />,
              title: "Scheduling Automation",
              desc: "Set up booking flows with tools like Cal.com to avoid back-and-forth emails.",
            },
            {
              icon: <Workflow size={40} className="text-orange-600" />,
              title: "Workflow Automation",
              desc: "Automate repetitive tasks with n8n or Zapier — connect apps and streamline work.",
            },
            {
              icon: <Mail size={40} className="text-blue-600" />,
              title: "Email Automation",
              desc: "Send campaigns, reminders, and follow-ups automatically to engage customers.",
            },
            {
              icon: <Settings2 size={40} className="text-purple-600" />,
              title: "Custom Integrations",
              desc: "From CRMs to payments, we build automations tailored to your tools.",
            },
            {
              icon: <BarChart3 size={40} className="text-pink-600" />,
              title: "Analytics & Reporting",
              desc: "Get automated reports and dashboards for faster, smarter decisions.",
            },
            {
              icon: <BarChart3 size={40} className="text-pink-600" />,
              title: "Analytics & Reporting",
              desc: "Get automated reports and dashboards for faster, smarter decisions.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-[2rem] flex flex-col items-center text-center w-[18rem] md:w-[20rem] border border-transparent hover:border-green-500 hover:scale-[1.02] transition"
            >
              {service.icon}
              <p className="mt-[1rem] font-semibold text-[1.3rem]">
                {service.title}
              </p>
              <p className="mt-[0.5rem] text-gray-600 text-[1rem] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Process */}
      <section className="mt-[6rem] px-[2rem] md:px-[6rem] text-center flex flex-col items-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-[3rem]">
          How <span className="text-green-600">It Works</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-[3rem]">
          {[
            {
              step: "01",
              title: "Audit",
              desc: "We review your current processes and find automation opportunities.",
            },
            {
              step: "02",
              title: "Plan",
              desc: "We design workflows and select the right tools for your business.",
            },
            {
              step: "03",
              title: "Automate",
              desc: "We implement automation using platforms like n8n, Zapier, and Cal.com.",
            },
            {
              step: "04",
              title: "Monitor",
              desc: "We test, optimize, and provide ongoing support for improvements.",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="w-[15rem] flex flex-col items-center text-center gap-[1rem]"
            >
              <p className="bg-green-600 w-[4rem] h-[4rem] rounded-full flex items-center justify-center text-white font-semibold text-[1.5rem]">
                {s.step}
              </p>
              <p className="font-semibold text-[1.2rem]">{s.title}</p>
              <p className="text-gray-600 text-[1rem]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Tools We Use */}
      <div className="w-full mt-[6rem] flex flex-col gap-[3rem] justify-center items-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
          Tools <span className="text-green-600">We Use</span>
        </h2>
        <TechStackMarquee />
      </div>

      {/* ✅ Case Study */}
      <section className="w-full mt-[6rem] flex flex-col gap-[2rem] items-center text-center px-[2rem] md:px-[6rem]">
        <h2 className="text-[2rem] font-semibold text-green-600">Case Study</h2>
        <p className="max-w-[45rem] text-[1.1rem] text-gray-700 leading-relaxed">
          One of our clients saved <strong>20+ hours per week</strong> by
          automating their lead management pipeline. With email workflows,
          scheduled calls, and instant notifications, their team focused more on
          closing deals instead of manual tasks.
        </p>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-[6rem] px-[2rem] md:px-[6rem]">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center mb-[3rem]">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h2>
        <div className="max-w-[50rem] mx-auto flex flex-col gap-[2rem]">
          {[
            {
              q: "How long does it take to set up automation?",
              a: "Most automation workflows take 1–2 weeks depending on complexity.",
            },
            {
              q: "Do I need technical skills?",
              a: "No, we handle everything for you. We design, implement, and maintain your workflows.",
            },
            {
              q: "Can you integrate with my existing tools?",
              a: "Yes, we work with CRMs, marketing platforms, payment gateways, and internal apps.",
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <p className="font-semibold text-[1.2rem] text-gray-900">
                {faq.q}
              </p>
              <p className="text-gray-600 text-[1rem] mt-[0.5rem]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Final CTA */}
      <section className="mt-[6rem] mb-[8rem] flex flex-col items-center text-center px-[2rem]">
        <h3 className="text-[2rem] md:text-[2.5rem] font-semibold">
          Automate Your <span className="text-green-600">Business Today</span>
        </h3>
        <p className="mt-[1rem] text-[1.2rem] md:text-[1.4rem] max-w-[45rem] text-gray-700 leading-relaxed">
          From scheduling calls to automated reports, our team helps you save
          time and focus on what matters most. Start with a free consultation.
        </p>
        <ScheduleButton className="group mt-[2rem] inline-flex items-center justify-center gap-[0.8rem] bg-green-600 text-white border border-green-600 p-[1rem] rounded-md w-[14rem] md:w-[18rem] font-medium text-[1.2rem] transition-colors duration-300 hover:bg-white hover:text-green-600" />
      </section>
    </main>
  );
}
