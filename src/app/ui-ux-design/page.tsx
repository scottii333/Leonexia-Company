import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function UiUxPage() {
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
              UI/UX Design
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Page content */}
      <h1 className="text-3xl font-bold mt-4">UI/UX Design</h1>
      <p className="mt-2 text-gray-600">
        We craft clean, modern, and user-friendly designs that focus on
        accessibility and usability, ensuring an excellent user experience for
        your customers.
      </p>
    </section>
  );
}
