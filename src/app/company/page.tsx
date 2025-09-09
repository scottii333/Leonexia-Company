import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <section className="p-8">
      {/* ✅ Breadcrumbs */}
      <Breadcrumb>
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

      {/* ✅ Page content */}
      <h1 className="text-3xl font-bold mt-4">Who We Are</h1>
      <p className="mt-2 text-gray-600">
        We are <strong>Leonexia</strong>, a 5-member startup of passionate
        developers and designers. Our mission is to deliver modern, scalable,
        and user-friendly digital solutions that help businesses grow and adapt
        to the future.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our expertise spans across <strong>Web Development</strong>,{" "}
        <strong>UI/UX Design</strong>, <strong>Automation Solutions</strong>,{" "}
        <strong>Cloud Infrastructure</strong>, We combine creativity, technical
        skill, and a user-first mindset to craft products that make an impact.
      </p>

      <p className="mt-4 text-gray-600">
        At our core, we believe in collaboration, transparency, and innovation.
        We’re not just building software—we’re building partnerships and
        solutions that last.
      </p>
    </section>
  );
}
