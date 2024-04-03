import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="bg-gray-400 flex items-center justify-center w-full md:w-[75%] h-[100px] rounded">
            Advertisement Prompt
          </div>

          <div className="w-full md:w-[24%] flex flex-col gap-4">
            <div className="bg-gray-400 text-black  flex items-center justify-center h-10 rounded">Status</div>
            <div className="flex gap-4">
              <button className="flex-grow bg-cyan-500 text-black  flex items-center justify-center h-10 rounded">
                Pause
              </button>
              <button className="flex-grow bg-cyan-500 text-black  flex items-center justify-center h-10 rounded">
                Start
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="bg-gray-400 flex items-center justify-center w-full md:w-[75%] rounded h-10">
            Redirect link
          </div>
          <div className="bg-gray-400 w-full md:w-[24%] flex-col gap-4 rounded  flex items-center justify-center h-10">
            Redirect link
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="bg-gray-400 flex items-center justify-center w-full md:w-[75%] rounded h-10">Promo code</div>
          <div className="bg-gray-400 w-full md:w-[24%] flex flex-col gap-4 rounded  items-center justify-center h-10">
            Promo code
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4">
          <Link
            href="/edit-campaign"
            className="bg-cyan-400 flex items-center justify-center w-full md:w-[75%] rounded h-10"
          >
            Edit Campaign
          </Link>
          <Link
            href="/edit-campaign"
            className="bg-cyan-400 w-full md:w-[24%] flex-col gap-4 rounded  flex items-center justify-center h-10"
          >
            Edit Campaign
          </Link>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <div className="flex gap-4">
          <button className="h-10 rounded flex justify-center items-center bg-gray-400 p-5">Submission fee</button>
          <button className="h-10 rounded flex justify-center items-center bg-cyan-500 p-2">Submit Campaign</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
