"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center text-center mb-6 pt-15 pb-6">
      <h1 className="text-5xl font-bold text-accent tracking-tight mb-2">
        Moofi
      </h1>
      <p className="text-sm text-muted max-w-xs">
        Search and save any movie you'd like. Find it later, easily.
      </p>
      <Link
        href={pathname === "/watchlist" ? "/" : "/watchlist"}
        className="font-bold text-accent tracking-tight mt-2"
      >
        {pathname === "/watchlist" ? "← Go back to Search" : "My Watchlist →"}
      </Link>
    </div>
  );
};
