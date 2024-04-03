const data = [
  {
    id: 1,
    name: "G1",
    status: "active",
    views: 123,
    leads: 23,
    adCreatives: "asdfg",
    games: "H1",
    balance: "$123",
    owner: "0xhfhfjv9",
    prompt: "abcd",
  },
  {
    id: 2,
    name: "G2",
    status: "inactive",
    views: 123,
    leads: 23,
    adCreatives: "asdfg",
    games: "H1",
    balance: "$123",
    owner: "0xhfhfjv9",
    prompt: "abcd",
  },
  {
    id: 3,
    name: "G3",
    status: "active",
    views: 123,
    leads: 23,
    adCreatives: "asdfg",
    games: "H1",
    balance: "$123",
    owner: "0xhfhfjv9",
    prompt: "abcd",
  },
  {
    id: 4,
    name: "G4",
    status: "inactive",
    views: 123,
    leads: 23,
    adCreatives: "asdfg",
    games: "H1",
    balance: "$123",
    owner: "0xhfhfjv9",
    prompt: "abcd",
  },
  {
    id: 5,
    name: "G5",
    status: "active",
    views: 123,
    leads: 23,
    adCreatives: "asdfg",
    games: "H1",
    balance: "$123",
    owner: "0xhfhfjv9",
    prompt: "abcd",
  },
];

const Home = () => {
  return (
    <div>
      <div className="lg:w-1/2 flex flex-wrap">
        <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            My Campaigns
          </span>
        </button>

        <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            All Campaigns
          </span>
        </button>
      </div>

      <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2 flex flex-wrap my-5">
          <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              👾 New Campaign
            </span>
          </button>

          <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              👾 Copy Selected
            </span>
          </button>
        </div>

        <div className="lw-full g:w-1/2 flex flex-wrap">
          <button className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
            $$ Amount
          </button>

          <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              👾 Topup balance
            </span>
          </button>

          <button className="flex-grow relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="flex-grow relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              👾 Pause/Unpause
            </span>
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Views
              </th>
              <th scope="col" className="px-6 py-3">
                Leads
              </th>
              <th scope="col" className="px-6 py-3">
                Ad Creatives/Holders
              </th>
              <th scope="col" className="px-6 py-3">
                Games
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Owner
              </th>
              <th scope="col" className="px-6 py-3">
                Prompt
              </th>
            </tr>
          </thead>

          {data.map(item => (
            <tbody key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-4 py-4">{item.views}</td>
                <td className="px-6 py-4">{item.leads}</td>
                <td className="px-6 py-4">{item.adCreatives}</td>
                <td className="px-6 py-4">{item.games}</td>
                <td className="px-6 py-4">{item.balance}</td>
                <td className="px-6 py-4">{item.owner}</td>
                <td className="px-6 py-4">{item.prompt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Home;
