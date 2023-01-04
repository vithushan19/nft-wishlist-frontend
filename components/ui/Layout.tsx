import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>NFT Wishlist</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full bg-white">
          <Link href="/">
            <p className="p-4 font-bold text-center shadow-lg hover:text-white text-sky-700 hover:bg-sky-500">
              My Wishlists
            </p>
          </Link>
        </div>
        <main className="flex flex-col items-center flex-1 w-full text-center bg-sky-800 md:px-20">
          {children}
        </main>
      </div>
    </>
  );
}
