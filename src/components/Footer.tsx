import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="bg-grid min-h-[15rem] border-green-500 p-[4rem]  
      "
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-[5rem]">
        <div className="max-w-[20rem] flex flex-col gap-[1rem]">
          <Link
            href="/"
            className="relative inline-block text-[2rem] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-1/2 after:bg-green-600"
          >
            Leonexia
          </Link>
          <p>
            Leonexia offers expert{" "}
            <strong className="text-green-600">
              Web Development in the Philippines
            </strong>
            , along with{" "}
            <strong className="text-green-600">UI/UX Design</strong>,{" "}
            <strong className="text-green-600">Automation Solutions</strong>,
            and <strong className="text-green-600">Cloud Consulting</strong> —
            tailored for businesses of all sizes.
          </p>
        </div>

        {/* Sitemap: Services */}
        <div className="max-w-[20rem] flex flex-col gap-2">
          <p className="font-semibold text-[1.5rem]">Services</p>
          <nav className="flex flex-col gap-2">
            <Link
              href="/web-services"
              className="hover:text-green-600 transition"
            >
              Web Development
            </Link>
            <Link
              href="/automation-solutions"
              className="hover:text-green-600 transition"
            >
              Automation Solutions
            </Link>
            <Link
              href="/cloud-solutions"
              className="hover:text-green-600 transition"
            >
              Cloud Solutions
            </Link>
          </nav>
        </div>

        {/* Sitemap: Company */}
        <div className="max-w-[20rem] flex flex-col gap-2">
          <p className="font-semibold text-[1.5rem]">Company</p>
          <nav className="flex flex-col gap-2">
            <Link href="/our-works" className="hover:text-green-600 transition">
              Our Works
            </Link>
            <Link
              href="/who-we-are"
              className="hover:text-green-600 transition"
            >
              Who We Are
            </Link>
            <Link href="/schedule" className="hover:text-green-600 transition">
              Schedule a Consultation
            </Link>
          </nav>
        </div>

        {/* Sitemap: Resources */}
        <div className="max-w-[20rem] flex flex-col gap-2">
          <p className="font-semibold text-[1.5rem]">Resources</p>
          <nav className="flex flex-col gap-2">
            <Link href="/careers" className="hover:text-green-600 transition">
              Careers
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-green-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-green-600 transition"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Sitemap: Social Media */}
        <div className="max-w-[20rem] flex flex-col gap-2">
          <p className="font-semibold text-[1.5rem]">Social Media</p>
          <nav className="flex flex-col gap-2">
            <Link href="/tiktok" className="hover:text-green-600 transition">
              TikTok
            </Link>
            <Link href="/instagram" className="hover:text-green-600 transition">
              Instagram
            </Link>
            <Link href="/linkedin" className="hover:text-green-600 transition">
              LinkedIn
            </Link>
          </nav>
        </div>
      </div>

      <div className="mt-[6rem]   text-center text-[1rem] md:text-[1.3rem] ">
        <p>© {new Date().getFullYear()} Leonexia. All rights reserved.</p>
      </div>
    </footer>
  );
};
