import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col md:flex-row gap-4 md:h-[330px]">
        <div className="md:w-[23%] rounded bg-gray-400 p-5">
          <div className="flex justify-between text-black">
            <span>Creatives</span>
            <span>Active / Total</span>
          </div>
          <div className="flex justify-between text-black">
            <span>Creatives</span>
            <span>Active / Total</span>
          </div>

          <br />

          <div className="text-black flex flex-col">
            <span>Total pre loads</span>
            <span>Total views</span>
            <span>Total leads</span>
            <span>Total interactions</span>
            <span>Promo code used</span>
            <span>Avg. Exposure time</span>
            <span>Avg. interactions per user</span>
            <span>Avg. view cost</span>
            <span>Avg. lead cost</span>
          </div>
        </div>

        <div className="flex-grow rounded h-[330px] text-center flex flex-col items-center justify-center shadow-lg bg-gray-400 bg-opacity-90 backdrop-blur-md border border-gray-400 border-opacity-30">
          <p className="font-semibold">
            Trend graph <br />⏳ Coming soon..
          </p>
        </div>
      </div>

      <div className="flex gap-4 h-[200px]">
        <div className="w-1/2 h-full bg-gray-400 text-center flex flex-col items-center justify-center rounded">
          <p className="font-semibold">
            Daily statistics <br />⏳ Coming soon..
          </p>
        </div>

        <div className="w-1/2 h-full bg-gray-400 text-center flex flex-col items-center justify-center rounded">
          <p className="font-semibold">
            By game projects <br />⏳ Coming soon..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
