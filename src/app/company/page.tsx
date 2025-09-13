import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Users,
  Rocket,
  Lightbulb,
  HeartHandshake,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleButton } from "@/components/ScheduleButton";

export default function CompanyPage() {
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
              Company
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Who We Are Section */}
      <section className="flex flex-col items-center text-center px-[2rem] md:px-[5rem] mt-[5rem]">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight">
          Who <span className="text-green-600">We Are</span>
        </h1>
        <p className="mt-[1.5rem] text-[1.2rem] md:text-[1.5rem] text-gray-700 max-w-[55rem] leading-relaxed">
          At <strong>Leonexia</strong>, we are a team of developers, designers,
          and strategists passionate about creating{" "}
          <span className="text-green-600 font-semibold">
            modern, scalable, and user-focused digital solutions
          </span>
          . We help businesses of all sizes grow through technology, creativity,
          and long-term partnerships.
        </p>
      </section>

      {/* ✅ Mission & Vision Section */}
      <section className="mt-[6rem] flex flex-col md:flex-row gap-[3rem] justify-center px-[2rem] md:px-[6rem] text-center md:text-left">
        {/* Mission */}
        <div className="flex-1 bg-white shadow-md p-[2.5rem] rounded-xl border border-transparent hover:border-green-500 hover:scale-[1.01] transition duration-300 ease-in-out">
          <h2 className="text-[2rem] font-semibold text-green-600 mb-[1.2rem]">
            Our Mission
          </h2>
          <p className="text-[1.1rem] text-gray-700 leading-relaxed">
            To empower businesses with digital products that drive growth,
            engage customers, and streamline operations in a fast-changing
            world.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1 bg-white shadow-md p-[2.5rem] rounded-xl border border-transparent hover:border-green-500 hover:scale-[1.01] transition duration-300 ease-in-out">
          <h2 className="text-[2rem] font-semibold text-green-600 mb-[1.2rem]">
            Our Vision
          </h2>
          <p className="text-[1.1rem] text-gray-700 leading-relaxed">
            To become a trusted global partner for businesses, recognized for
            delivering innovative, reliable, and sustainable technology
            solutions that inspire growth and long-term success.
          </p>
        </div>
      </section>

      {/* ✅ Core Values (6) */}
      <section className="mt-[6rem] flex flex-col items-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
          Our <span className="text-green-600">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] px-[2rem] md:px-[6rem]">
          {[
            {
              icon: <Users size={40} className="text-green-600" />,
              title: "Collaboration",
              desc: "We work closely with our clients as partners, ensuring solutions fit their goals.",
            },
            {
              icon: <Rocket size={40} className="text-orange-600" />,
              title: "Innovation",
              desc: "We embrace new technologies to deliver scalable and future-proof solutions.",
            },
            {
              icon: <Lightbulb size={40} className="text-yellow-500" />,
              title: "Creativity",
              desc: "We combine design thinking with technical expertise to craft unique experiences.",
            },
            {
              icon: <HeartHandshake size={40} className="text-pink-600" />,
              title: "Commitment",
              desc: "We provide continuous support beyond launch to ensure long-term growth.",
            },
            {
              icon: <Globe size={40} className="text-blue-600" />,
              title: "Global Mindset",
              desc: "We build solutions designed to adapt across industries, cultures, and regions.",
            },
            {
              icon: <Award size={40} className="text-purple-600" />,
              title: "Excellence",
              desc: "We hold ourselves to the highest standards, delivering with quality and precision.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="shadow-lg w-[18rem] h-[20rem] flex flex-col items-center justify-center gap-[1rem] p-[2rem] rounded-xl border border-transparent hover:border-green-500 hover:scale-[1.01] transition-all duration-300 ease-in-out text-center"
            >
              {value.icon}
              <p className="font-semibold text-[1.3rem]">{value.title}</p>
              <p className="text-gray-600 text-[1rem] leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="mt-[6rem] px-[2rem] md:px-[6rem] flex flex-col items-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center mb-[3rem]">
          Meet the <span className="text-green-600">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[2.5rem] justify-items-center ">
          {[
            {
              name: "Angel Scott",
              role: "Full-Stack Developer, Automation Engineer & DevOps",
              img: "/team/angel.jpg",
            },
            {
              name: "Janeille Trixie",
              role: "UI/UX Designer & Frontend Developer",
              img: "/team/janeille.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-[2rem] flex flex-col items-center text-center w-[18rem] sm:w-[20rem] md:w-[22rem] border border-gray-200 hover:border-green-500 hover:scale-[1.02] transition"
            >
              <div className="relative w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] rounded-full overflow-hidden mb-[1.5rem]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-[1.3rem] md:text-[1.5rem]">
                {member.name}
              </p>
              <p className="text-green-600 text-[1rem] md:text-[1.2rem] leading-relaxed">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Closing CTA with ScheduleButton */}
      <section className="mt-[6rem] mb-[8rem] flex flex-col items-center text-center px-[2rem]">
        <h3 className="text-[2rem] md:text-[2.5rem] font-semibold">
          Let’s <span className="text-green-600">Build Together</span>
        </h3>
        <p className="mt-[1rem] text-[1.2rem] md:text-[1.4rem] max-w-[45rem] text-gray-700 leading-relaxed">
          Whether you’re a startup, a growing business, or an established
          enterprise, we’re here to help you scale through innovation and
          technology.
        </p>
        <ScheduleButton className="group mt-[2rem] inline-flex items-center justify-center gap-[0.8rem] bg-[#D1F470] text-[#213524] border border-green-600 p-[1rem] rounded-md w-[14rem] md:w-[18rem] font-medium text-[1rem] md:text-[1.3rem] transition-colors duration-300 hover:bg-white hover:text-green-600 cursor-pointer" />
      </section>
    </main>
  );
}
