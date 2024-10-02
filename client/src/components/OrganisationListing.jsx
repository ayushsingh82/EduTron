import React, { useState, useEffect } from "react";

function OrganisationOnboarding() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    redirectUrl: "",
    price: "",
  });

  const [submitState, setSubmitState] = useState(0);
  const [contract, setContract] = useState(null);

  // ABI for the Organisation smart contract
  const ORGABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "_OrganisationAddress", "type": "address" }
      ],
      "name": "getOrganisation",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" },
        { "internalType": "string", "name": "", "type": "string" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_name", "type": "string" },
        { "internalType": "string", "name": "_course", "type": "string" },
        { "internalType": "string", "name": "_redirectURL", "type": "string" },
        { "internalType": "uint256", "name": "_price", "type": "uint256" }
      ],
      "name": "organisationOnboard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ];

  // Fetch contract instance when the component mounts
  useEffect(() => {
    const getContract = async () => {
      const instance = await window.tronLink.tronWeb.contract(
        ORGABI,
        "TFKKHaExd5R3PWFtriCjQQqdr5DG8jtJnz" // Replace with your smart contract address
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

    const { name, course, redirectUrl, price } = formData;

    try {
      if (contract) {
        // Call the contract method with form data
        let result = await contract.organisationOnboard(name, course, redirectUrl, parseInt(price)).send({
          feeLimit: 1000000000,
          shouldPollResponse: true,
        });

        console.log("Contract call result:", result);
        console.log(`${name}, ${course}, ${redirectUrl}, ${price}`);
        setSubmitState(2); // Successful state
      }
    } catch (error) {
      console.error("Error registering organisation:", error);
      setSubmitState(0); // Reset submit state on error
    }
  };

  return (
    <div className="scroller bg-black">
      <div className="h-screen">
        <h1 className="text-lg font-medium text-red-500 text-center py-[30px]">
          Complete the process to list your organisation
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
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Organisation Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="" disabled>
                [select course type]
              </option>
              <option value="marketing">Marketing</option>
              <option value="development">Development</option>
              <option value="arts">Arts</option>
            </select>
            <label
              htmlFor="course"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Select Course Type
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              name="redirectUrl"
              id="redirectUrl"
              value={formData.redirectUrl}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="redirectUrl"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Redirect URL for Course
            </label>
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price (in TRX)
            </label>
          </div>

          <div
            className="mb-6 text-sm rounded-lg bg-transparent w-auto text-white"
            role="alert"
          >
            <span className="font-medium text-red-600">
              <b>Warning!</b>
            </span>{" "}
            Please note that once onboarded, you cannot undo or delete from the
            contract.
          </div>

          <button
            className="text-white mt-6 border border-red-500 focus:ring-4 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center bg-transparent dark:focus:ring-blue-800"
            type="submit"
            disabled={submitState !== 0}
          >
            Register Organisation
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrganisationOnboarding;




// var options = {
//  feeLimit: 100000000,
//  callValue: 0,
//  tokenValue: 10,
//  tokenId: 1000001,
//  txLocal: true
// };

// const onboardOrganisation = await tronWeb.transactionBuilder.triggerSmartContract("TFKKHaExd5R3PWFtriCjQQqdr5DG8jtJnz
// ","organisationOnboard(string,string,string,uint256)",ptions ,parameter , window.tronLink.tronWeb.defaultAddress.base58)

// var parameter = [
 //   {
//     type:"string" ,
//     value: ""
//   },{
//          type:"string" ,
//          value:""
//   }, {
//          type:"string" ,
//          value:""
//      }, {
//          type:"uint256",
//          value :""
//        }
 //   ]


//  <div className="mb-6">
//  <label
//    className="block mb-2 text-sm font-medium text-gray-400"
//    htmlFor="file_input"
//  >
//    Upload files
//  </label>
//  <hr className="text-gray-600" />
//  <input
//    type="file"
//    name="files"
//    required
//    multiple
//    onChange={handleFileChange}
//    className="mt-[20px] border-2 border-transparent"
//  />
//  <br />
//  {formData.files.length > 0 && (
//    <div className="grid grid-cols-10 gap-3">
//      {formData.files.map((file, index) => (
//        <img
//          key={index}
//          src={URL.createObjectURL(file)}
//          alt={`Uploaded File ${index + 1}`}
//          style={{ width: "100px", marginTop: "10px" }}
//        />
//      ))}
//    </div>
//  )}
// </div>
