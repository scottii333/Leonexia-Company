import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              Terms of Service
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Content Wrapper */}
      <div className="px-[2rem] md:px-[5rem] mt-[4rem] mb-[8rem] flex flex-col items-center text-center gap-[2rem]">
        {/* Title */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight text-green-700">
          Terms of <span className="text-green-600">Service</span>
        </h1>

        {/* Intro */}
        <p className="text-[1.2rem] md:text-[1.4rem] text-gray-700 max-w-[55rem] leading-relaxed">
          These Terms of Service (“Terms”) govern your use of{" "}
          <strong className="text-green-700">Leonexia</strong>’s website,
          products, and services. By accessing or using our services, you agree
          to these Terms.
        </p>

        {/* Sections */}
        <div className="flex flex-col items-center text-left gap-[2rem] max-w-[60rem] mt-[2rem]">
          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700">
              By using our website and services, you confirm that you have read,
              understood, and agree to these Terms. If you do not agree, please
              discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              2. Services Provided
            </h2>
            <p className="text-gray-700">
              Leonexia provides web development, UI/UX design, automation, and
              cloud-based solutions. We may update or modify our services at any
              time to improve quality and performance.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700">
              You agree to provide accurate information, comply with applicable
              laws, and use our services only for lawful purposes. Misuse of our
              services may result in suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              4. Payments and Billing
            </h2>
            <p className="text-gray-700">
              All payments for services must be made according to the agreed
              terms in your contract or invoice. Late payments may result in
              service suspension until balances are cleared.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              5. Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate services if you
              violate these Terms or engage in unlawful activity. You may also
              terminate services at any time by notifying us in writing.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Leonexia is not liable for indirect, incidental, or consequential
              damages arising from the use of our services. Our total liability
              is limited to the fees paid for the specific service.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              7. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. Updates will be
              posted on this page with a revised effective date. Continued use
              of our services means acceptance of the updated Terms.
            </p>
          </section>

          {/* Closing */}
          <p className="mt-[2rem] text-gray-700">
            If you have any questions about these Terms, please contact us at{" "}
            <span className="text-green-600 font-semibold">
              support@leonexia.com
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
