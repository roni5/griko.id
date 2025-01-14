import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

export interface NavigationLinkProps {
  children: ReactNode;
  href: string;
}

export const NavigationLink = ({ children, href }: NavigationLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href);

  return (
    <Link
      className={clsx(
        "relative flex snap-end items-center justify-center rounded-lg py-1 px-2 transition-colors md:px-4",
        "before:pointer-events-none before:absolute before:inset-x-2 before:rounded-t-full before:border-b",
        "before:shadow motion-safe:before:transition-all",
        isActive ? "before:bottom-[-4px]" : "before:bottom-[-8px] hover:before:bottom-[-4px]",
        isActive ? "before:shadow-primary-500" : "hover:before:shadow-neutral-400",
        isActive
          ? "text-primary-500 before:border-primary-500 before:border-opacity-100"
          : "before:border-neutral-400 before:border-opacity-0 hover:before:border-opacity-100",
      )}
      data-navigation-link=""
      href={href}
      passHref
    >
      {children}
    </Link>
  );
};
