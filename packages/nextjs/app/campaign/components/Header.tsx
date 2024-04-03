import React from "react";
import Link from "next/link";
import { ForwardIcon, StarIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <div className="">
      <div className="w-full mt-5">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-[23%] gap-x-2 rounded text-center flex items-center h-10 font-semibold">
            <div className="flex-grow bg-cyan-500 h-10 flex items-center justify-center rounded">
              <ForwardIcon fill="blue" className="p-2 h-[40px]" />
            </div>
            <div className="bg-gray-200 text-black flex-grow h-10 flex items-center justify-center rounded">Status</div>
            <div className="bg-gray-200 text-black flex-grow h-10 flex items-center justify-center rounded">
              Campaign ID
            </div>
          </div>
          <div className="flex-grow bg-gray-200 text-black rounded flex items-center justify-center h-10 font-semibold">
            Campaign Name
          </div>
          <div className="w-full md:w-[23%] text-center flex items-center h-10 font-semibold gap-x-2">
            <div className="bg-gray-200 text-black flex-grow h-10 flex items-center justify-center rounded">
              Campaign Owner
            </div>
            <div className="bg-gray-200 text-black flex-grow h-10 flex items-center justify-center rounded">✏️Edit</div>
          </div>
        </div>
      </div>

      <div className="w-full my-5">
        <div className="flex flex-wrap gap-4">
          <Link
            className="bg-blue-600 rounded flex-grow text-center flex items-center justify-between h-10"
            href="/campaign/analytics"
          >
            <p className="pl-2 font-semibold w-full text-center">Analytics</p>
            {/* <div className="active:"></div> */}
            <StarIcon className="text-yellow-500 h-10" />
          </Link>
          <Link href="/campaign/games-holders" className="bg-blue-600 rounded flex-grow flex items-center h-10">
            <p className="pl-2 font-semibold w-full text-center">Games & Holders</p>
          </Link>
          <Link
            href="/campaign/campaign-details"
            className="bg-blue-600 rounded flex-grow text-center flex items-center h-10"
          >
            <p className="pl-2 font-semibold w-full text-center">Campaign Details</p>
          </Link>
          <Link
            href="/campaign/balance-views"
            className="bg-blue-600 rounded flex-grow text-center flex items-center h-10"
          >
            <p className="pl-2 font-semibold w-full text-center">Balance & Views</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
