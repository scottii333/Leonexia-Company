import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { TechStackMarquee } from "@/components/TechStackMarquee";

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
              Our Works
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center text-center px-[2rem] md:px-[5rem] mt-[4rem]">
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight">
          Our <span className="text-green-600">Works</span>
        </h1>
        <p className="mt-[1rem] text-[1.2rem] md:text-[1.4rem] text-gray-700 max-w-[55rem] leading-relaxed">
          Explore our portfolio of case studies showcasing how we’ve helped
          businesses transform their ideas into impactful digital solutions —
          from e-commerce platforms to service websites.
        </p>
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
            —ensuring your website is visible, measurable, and ready to grow
            from day one.
          </p>
        </div>
        <TechStackMarquee />
      </div>

      {/* ✅ Case Studies Section */}
      <section className="w-full mt-[5rem] mb-[10rem] flex flex-col gap-10 justify-center items-center p-[2rem]">
        <div className="flex flex-col gap-5 items-center text-center">
          <p className="font-semibold text-green-600 text-[1.5rem] md:text-[2.5rem]">
            Case Study
          </p>
          <p className="text-center text-[1rem] md:text-[1.6rem] max-w-[60rem] leading-relaxed">
            A showcase of our latest projects and the results we&apos;ve
            achieved for our clients
          </p>
        </div>

        <div className="w-full min-h-screen p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="w-full max-w-[28rem] h-[23rem] bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-[15rem] overflow-hidden">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={40} className="text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Text */}
              <div className="p-[1rem] text-center">
                <p className="font-bold text-[1.3rem]">{work.title}</p>
                <p className="text-gray-600">{work.type}</p>
                <p className="text-green-700 font-semibold text-[1.2rem]">
                  {work.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
