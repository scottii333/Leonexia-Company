import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main className="">
      {/* Leonhwa Hero Section  */}
      <section className="h-auto w-full  flex flex-col md:flex-row">
        <div className="p-5 flex flex-col gap-4 min-w-[20rem] md:w-[50%] md:justify-center md:p-10">
          <h1 className="text-[2rem] font-semibold md:text-[3.5rem]">
            Your End-to-End
            <span className="text-green-600"> Software Partner</span>
          </h1>
          <p className="text-[1.3rem] md:text-[2rem]">
            Our team builds reliable, user-focused solutions that optimize
            workflows, boost engagement, and transform how businesses deliver
            value.
          </p>
          <Link
            href="/schedule"
            className="group bg-black text-white border border-black p-3 rounded-md w-[14rem] text-center font-medium md:text-[1.5rem] md:w-[20rem]
             transition-colors duration-300 
             hover:bg-white hover:text-green-600"
          >
            Schedule Consultation
            <ArrowRight
              className="inline-block ml-5 text-white transition-colors duration-300 group-hover:text-green-600"
              size={16}
            />
          </Link>
        </div>
        {/* Right: Checkered Background */}
        <div className="m-2 h-[20rem] min-w-[20rem] md:w-[50%] md:h-[40rem] border bg-checker"></div>
      </section>
    </main>
  );
}
