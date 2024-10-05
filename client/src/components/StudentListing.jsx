import React, { useState, useEffect } from "react";

function StudentListing() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [submitState, setSubmitState] = useState(0);
  const [contract, setContract] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  // ABI for the contract
  const STUABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_StudentAddress",
          type: "address",
        },
      ],
      name: "getStudent",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_description",
          type: "string",
        },
      ],
      name: "studentOnboard",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "students",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  // Fetch contract instance when the component mounts
  useEffect(() => {
    const getContract = async () => {
      const instance = await window.tronLink.tronWeb.contract(
        STUABI,
        "TBqKDzeqfGotma8f47GvwLKaD4rqtiRdkE"
      );
      setContract(instance);
    };

    getContract();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState(1);

    const { name, description } = formData;

    try {
      if (contract) {
        // Call the contract method with form data
        let result = await contract.studentOnboard(name, description).send({
          feeLimit: 1000000000,
          shouldPollResponse: true,
        });
        console.log("Contract call result:", result);

        console.log(
          `Student onboarded successfully: Name: ${name}, Description: ${description}`
        );
        // If successful
        setSubmitState(2);
        setShowPopup(true); // Show the popup after successful submission
      }
    } catch (error) {
      console.error("Error registering as student:", error);
      setSubmitState(0); // Reset submit state on error
    }
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="scroller bg-black">
      <div className="h-screen">
        <h1 className="text-lg font-medium text-red-500 text-center py-[30px]">
          Complete the process to register as student
        </h1>
        <form
          className="flex flex-col items-start ml-40 mr-40 my-5 dark mb-10 py-[50px]"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="eventName"
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="eventName"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          <div
            className=" mb-6 text-sm rounded-lg bg-transparent w-auto text-white"
            role="alert"
          >
            <span className="font-medium text-red-600">
              <b>Warning!</b>
            </span>{" "}
            Try to put a short description about you 🤯 😎
          </div>

          <button
            className="text-white mt-6 border border-red-500 focus:ring-4 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center bg-transparent dark:focus:ring-blue-800"
            type="submit"
            disabled={submitState !== 0}
          >
            Register as Student
          </button>
        </form>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-black">Success!</h2>
              <p className="text-black">Student has been successfully listed.</p>
              <button
                className="mt-4 text-white bg-red-500 px-4 py-2 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentListing;



