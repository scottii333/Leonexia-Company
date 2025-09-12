import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Content Wrapper */}
      <div className="px-[2rem] md:px-[5rem] mt-[4rem] mb-[8rem] flex flex-col items-center text-center gap-[2rem]">
        {/* Title */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight text-green-700">
          Privacy <span className="text-green-600">Policy</span>
        </h1>

        {/* Intro */}
        <p className="text-[1.2rem] md:text-[1.4rem] text-gray-700 max-w-[55rem] leading-relaxed">
          At <strong className="text-green-700">Leonexia</strong>, your privacy
          is important to us. This Privacy Policy explains how we collect, use,
          and protect your information when you interact with our website and
          services.
        </p>

        {/* Sections */}
        <div className="flex flex-col  text-left gap-[2rem] max-w-[60rem] mt-[2rem]">
          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect personal information such as your name, email, and
              contact details when you fill out forms, book consultations, or
              subscribe to updates. We also collect non-personal information
              such as browser type, device, and analytics data.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              2. How We Use Information
            </h2>
            <p className="text-gray-700">
              We use collected information to provide our services, improve our
              website, send relevant updates, and communicate with you regarding
              your inquiries or projects.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              3. Sharing of Information
            </h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information. We may share
              data with trusted third-party providers (such as analytics or
              payment processors) solely for the purpose of delivering our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              4. Data Security
            </h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              safeguard your information from unauthorized access, disclosure,
              or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              5. Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to request access, updates, or deletion of your
              personal information at any time. Please contact us if you would
              like to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              6. Updates to this Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with the updated effective date.
            </p>
          </section>

          {/* Closing */}
          <p className="mt-[2rem] text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
