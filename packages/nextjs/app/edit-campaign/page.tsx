"use client";

import "react";
import { useState } from "react";
// import Link from "next/link";
import Dropdown from "./components/Dropdown";
import Breadcrumbs from "~~/components/BreadCrubs";

const steps = [
  {
    title: "Name & Prompt",
    path: "/edit-campaign",
  },
  {
    title: "Campaign Description",
    path: "campaign-description",
  },
  {
    title: "Select games",
    path: "select-games",
  },
  {
    title: "Select Creatives",
    path: "select-creatives",
  },
];

const Step1 = () => {
  return (
    <div className="my-10 w-[600px] mx-auto">
      <div className="mb-6 w-full">
        <input
          type="text"
          id="default-input"
          placeholder="Campaign Prompt"
          className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          id="large-input"
          placeholder="Campaign Name"
          className="text-center block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="my-10 max-w-[600px] flex flex-col items-center mx-auto">
      <div className="flex gap-10">
        <Dropdown title="Select Games" items={["Game 1", "Game 2", "Game 3"]} />
        <Dropdown title="Select Holders" items={["Holder 1", "Holder 2", "Holder 3"]} />
      </div>
    </div>
  );
};

const Step3 = () => {
  return (
    <div>
      <h1>Step 3</h1>
    </div>
  );
};

const Step4 = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div>
        <button
          type="button"
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        >
          Redirect Link
        </button>
        <button
          type="button"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Promo Code
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-gray-400 rounded-xl flex flex-col items-center justify-center text-black h-[360px] w-[150px]">
          <span>Name:</span>
          <span>Owner:</span>
          <span>Prompt</span>
          <span>Creative amount</span>
          <span>Games amout</span>
          <span>Promo code</span>
        </div>
        <div className="">
          <div className="relative w-full mx-auto overflow-x-auto sm:rounded-lg my-5 rounded">
            <table className="w-full max-w-sm mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Views(Nvw)
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Rate(Z)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    x1000
                  </th>
                  <td className="px-6 py-2">z1</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    x10k
                  </th>
                  <td className="px-6 py-2">z2</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    x100k
                  </th>
                  <td className="px-6 py-2">z3</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    Skip(0)
                  </th>
                  <td className="px-6 py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="relative w-full mx-auto overflow-x-auto sm:rounded-lg my-5 rounded">
            <table className="w-full max-w-sm mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Mint campaign NFT
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Rate gas
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Total gas
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    Submission fee
                  </th>
                  <td className="px-6 py-2">X</td>
                  <td className="px-6 py-3">Ncr*X</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    Nvw Views
                  </th>
                  <td className="px-6 py-2">Z</td>
                  <td className="px-6 py-2">Nvw*Z</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-2">
                    Total
                  </th>
                  <td className="px-6 py-2"></td>
                  <td className="px-6 py-2">SSS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0); // Initial step

  const handleNext = () => {
    setCurrentStep(currentStep + 1); // Update state for next step
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1); // Update state for previous step
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
    }
  };

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto min-h-[400px] justify-between">
      <Breadcrumbs steps={steps} currentStep={currentStep} />

      {renderStep()}
      <div className="flex justify-between gap-5">
        <button
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? "Submit Campaign" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Home;
