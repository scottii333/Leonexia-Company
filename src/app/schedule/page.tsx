import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function ConsultationPage() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
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
              Schedule Consultation
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Hero Section */}
      <h1 className="text-3xl font-bold mt-6">Schedule a Consultation</h1>
      <p className="mt-2 text-gray-600">
        Let’s discuss your project and explore how our team can help bring your
        ideas to life. Fill out the form below and we’ll get back to you within
        24–48 hours.
      </p>

      {/* ✅ Form */}
      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Submit Request
        </button>
      </form>

      {/* ✅ Alternative Contact */}
      <div className="mt-12 text-center text-gray-600">
        <p>Prefer to reach us directly?</p>
        <p className="mt-1">
          Email us at{" "}
          <a
            href="mailto:hello@Leonexia.com"
            className="text-green-600 font-medium hover:underline"
          >
            hello@Leonexia.com
          </a>
        </p>
      </div>
    </section>
  );
}
