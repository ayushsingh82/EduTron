import React, { useState } from "react";

function OrganisationListing() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    region: "",
    redirectUrl: "",
    price: "",
    files: [],
  });

  const [ipfsLinks, setIpfsLinks] = useState([]);

  const [submitState, setSubmitState] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      files: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState(1);

    const { name, price, course, redirectUrl, files } = formData;
    try {
      // Simulate campaign creation
      console.log("Campaign Created:", {
        campaignName: name,
        spendingLimit: price,
        course,
        redirectUrl,
        files,
      });
      setSubmitState(2);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div className="scroller bg-black ">
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
              id="eventName"
              className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="eventName"
              className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              <option value="" className="text-black" disabled>
                [select course type]
              </option>
              <option value="marketing" className="text-black">
                marketing
              </option>
              <option value="development" className="text-black">
                development
              </option>
              <option value="arts" className="text-black">
                arts
              </option>
            </select>
            <label
              htmlFor="course"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Select Organisation Type
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
              type="text"
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
              className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Spending Limit
            </label>
          </div>

          <div
            className=" mb-6 text-sm rounded-lg bg-transparent w-auto text-white"
            role="alert"
          >
            <span className="font-medium text-red-600">
              <b>Warning!</b>
            </span>{" "}
            The above spending limit is for one time/single campaign 🤯 😎
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-400"
              htmlFor="file_input"
            >
              Upload files
            </label>
            <hr className="text-gray-600" />
            <input
              type="file"
              name="files"
              required
              multiple
              onChange={handleFileChange}
              className="mt-[20px] border-2 border-transparent"
            />
            <br />
            {formData.files.length > 0 && (
              <div className="grid grid-cols-10 gap-3">
                {formData.files.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded File ${index + 1}`}
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                ))}
              </div>
            )}
          </div>

          <button
            className="text-white mt-6 border border-red-500 focus:ring-4 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center bg-transparent dark:focus:ring-blue-800 "
            type="submit"
            disabled={submitState !== 0}
          >
            Create Organisation
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrganisationListing;


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


