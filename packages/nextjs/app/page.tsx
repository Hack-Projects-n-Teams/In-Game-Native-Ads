"use client";

// import Link from "next/link";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="flex justify-center items-center mt-10 space-x-2">
            <Link href="/Listing">
              <button className="bg-blue-400 p-3 rounded-[20px] font-mono font-semibold">New Listing</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
