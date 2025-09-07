import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It may have been
        moved or deleted.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </section>
  );
}
