const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full mx-auto overflow-x-auto sm:rounded-lg">
        <table className="w-full max-w-sm mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Games Amount
              </th>
              <td className="px-6 py-4">GGG</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Creatives Amount
              </th>
              <td className="px-6 py-4">CCC</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Balance
              </th>
              <td className="px-6 py-4">BBB</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Views
              </th>
              <td className="px-6 py-4">VVV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="relative w-full mx-auto overflow-x-auto sm:rounded-lg my-5 rounded">
        <table className="w-full max-w-sm mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Withdraw
              </th>
              <th scope="col" className="px-6 py-3">
                Topup
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                $$TopUp / $$Withdraw
              </th>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">##Views</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <button className="bg-cyan-500 w-[100%] max-w-sm rounded h-10">Top up Campaign/Withdraw</button>
      </div>

      <div className="relative w-full mx-auto overflow-x-auto sm:rounded-lg my-5 rounded">
        <h2 className="text-center font-semibold mt-5">Table with Rates on Views</h2>
        <table className="w-full max-w-sm mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Views(Nvw)
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                x1k/10k/100k
              </th>
              <td className="px-6 py-4">z1/z2/z3</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Current Input Value
              </th>
              <td className="px-6 py-4">z4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
