import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function CareersPage() {
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
              Careers
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Content Wrapper */}
      <div className="px-[2rem] md:px-[5rem] mt-[4rem] mb-[8rem] flex flex-col items-center text-center gap-[2rem]">
        {/* Title */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight text-green-700">
          Careers at <span className="text-green-600">Leonexia</span>
        </h1>

        {/* Intro */}
        <p className="text-[1.2rem] md:text-[1.4rem] text-gray-700 max-w-[55rem] leading-relaxed">
          At <strong className="text-green-700">Leonexia</strong>, we’re always
          on the lookout for talented people who are passionate about building
          modern, scalable digital solutions.
        </p>

        {/* Roles */}
        <div className="bg-white shadow-md rounded-xl p-[2rem] max-w-[40rem] border border-gray-200 mt-[2rem]">
          <h2 className="text-[1.5rem] font-semibold text-green-600 mb-[1rem]">
            Current Openings
          </h2>
          <p className="text-gray-700 text-[1.1rem]">
            🚫 No positions are currently available.
          </p>
        </div>

        {/* Closing */}
        <p className="mt-[2rem] text-gray-700 text-[1rem] md:text-[1.1rem] max-w-[50rem] leading-relaxed">
          While we don’t have active openings right now, we’d love to hear from
          you! If you’re interested in working with us in the future, feel free
          to send your resume to{" "}
          <span className="text-green-600 font-semibold">
            leonexia.solutions@gmail.com
          </span>{" "}
          and we’ll reach out when opportunities become available.
        </p>
      </div>
    </main>
  );
}
