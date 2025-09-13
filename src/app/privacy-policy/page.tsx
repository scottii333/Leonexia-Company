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
          At <strong className="text-green-700">Leonexia Solutions</strong>, we
          respect your privacy. This Privacy Policy explains how we collect,
          use, and protect your information when you visit our website or book a
          consultation.
        </p>

        {/* Sections */}
        <div className="flex flex-col text-left gap-[2rem] max-w-[60rem] mt-[2rem]">
          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              Since our website does not require user accounts or logins, we
              collect only limited information:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
              <li>
                <strong>Consultation booking details</strong> such as your name,
                email address, and any information you provide when scheduling
                through Cal.com.
              </li>
              <li>
                <strong>Technical information</strong> such as browser type,
                device information, and anonymous analytics data to help us
                improve our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              2. How We Use Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
              <li>Schedule and manage your consultation requests.</li>
              <li>
                Communicate with you about our services, proposals, or projects.
              </li>
              <li>
                Improve our website, services, and customer experience through
                analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              3. Analytics & Cookies
            </h2>
            <p className="text-gray-700">
              We use <strong>Google Analytics</strong> to understand how
              visitors interact with our website. Google Analytics collects
              anonymous information such as pages visited, time spent on the
              site, browser type, and general location data.
            </p>
            <p className="text-gray-700 mt-2">
              Google may use cookies or similar technologies to collect this
              data. You can opt out of Google Analytics tracking by installing
              the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information. We may share
              information only with trusted third-party providers:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
              <li>
                <strong>Cal.com</strong>, for scheduling consultations. Your use
                of Cal.com is also subject to their{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google Analytics</strong>, to track website usage and
                improve performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We implement reasonable technical and organizational measures to
              protect your information. However, please note that no online
              system can guarantee 100% security.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              6. Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to request access, correction, or deletion of
              your personal data. To exercise these rights, please contact us
              directly using the email below.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-semibold mb-[0.5rem] text-green-600">
              7. Updates to this Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Updates will
              be reflected on this page with a revised effective date.
            </p>
          </section>

          {/* Closing */}
          <p className="mt-[2rem] text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
