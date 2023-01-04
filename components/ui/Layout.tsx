import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>NFT Wishlist</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full bg-sky-700">
          <Link href="/">
            <p className="p-4 font-bold text-center text-white hover:bg-sky-600">
              My Wishlists
            </p>
          </Link>
        </div>
        <main className="flex flex-col items-center flex-1 w-full text-center md:px-20">
          {children}
        </main>
      </div>
    </>
  );
}
