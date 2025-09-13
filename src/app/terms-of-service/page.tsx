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
          <strong className="text-green-700">Leonexia Solutions</strong>’s
          website and professional services. By scheduling a consultation or
          engaging our services, you agree to these Terms.
        </p>

        {/* Sections */}
        <div className="flex flex-col items-center text-left gap-[2rem] max-w-[60rem] mt-[2rem]">
          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              1. Services
            </h2>
            <p className="text-gray-700">
              Leonexia Solutions is a Philippine-based software development
              startup specializing in web development, workflow automation, and
              custom digital solutions. We may update or expand our services to
              improve quality and adapt to client needs.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              2. Consultations via Cal.com
            </h2>
            <p className="text-gray-700">
              We use Cal.com to schedule consultations. By booking a meeting,
              you agree to share your name, email, and other relevant details
              required for scheduling. These details are used solely for
              communication and service delivery. Cal.com’s terms and privacy
              policies apply when you use their platform.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              3. Client Responsibilities
            </h2>
            <p className="text-gray-700">
              You agree to provide accurate information during consultations and
              service agreements. You are responsible for ensuring that any
              content, data, or materials you provide do not infringe on third
              party rights or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              4. Payments
            </h2>
            <p className="text-gray-700">
              Payments for services must be made in accordance with agreed
              proposals, contracts, or invoices. Failure to make timely payments
              may result in suspension of work or termination of services.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700">
              Unless otherwise agreed, intellectual property rights for software
              or deliverables developed by Leonexia Solutions remain our
              property until full payment is received, after which rights may be
              transferred as outlined in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              While we strive to deliver reliable and secure solutions, Leonexia
              Solutions is not liable for indirect, incidental, or consequential
              damages, including but not limited to data loss, downtime, or lost
              profits, arising from use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              7. Termination
            </h2>
            <p className="text-gray-700">
              Either party may terminate services by written notice. Leonexia
              Solutions reserves the right to suspend or terminate services if
              these Terms are violated or payment obligations are not met.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              8. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of the Republic of the
              Philippines. Any disputes shall be resolved under the jurisdiction
              of Philippine courts.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              9. Updates to Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms periodically. Updates will be posted on
              this page with the revised effective date. Continued use of our
              website or services means acceptance of the updated Terms.
            </p>
          </section>

          {/* Closing */}
          <p className="mt-[2rem] text-gray-700">
            For questions about these Terms of Service, please contact us at{" "}
            <span className="text-green-600 font-semibold">
              leonexia.solutions@gmail.com
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
