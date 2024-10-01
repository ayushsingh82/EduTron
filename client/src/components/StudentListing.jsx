import React, { useState } from "react";

function StudentListing() {
  const [formData, setFormData] = useState({
    name: "",
    description:"",
  });
  const [submitState, setSubmitState] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState(1);

    const { name } = formData;
    try {
      // Simulate campaign creation
      console.log("Campaign Created:", {
        Studentname: name,
        StudentDescription: description,
      });
      setSubmitState(2);
    } catch (error) {
      console.error("Error registering as student:", error);
    }
  };



async function   onboardStudent (){
  
  var options = {
    feeLimit: 100000000,
    callValue: 0,
    tokenValue: 10,
    tokenId: 1000001,
    txLocal: true
   };
   
   var parameter = [{type:'address',value:'TV3nb5HYFe2xBEmyb3ETe93UGkjAhWyzrs'},{type:'uint256',value:100}];

//    var parameter =
//    [
//   {
//     type:"string", 
//     value: ""
//   },{
//          type:"string" ,
//          value:""
//   },

// ]

   const transaction = await tronWeb.transactionBuilder.triggerSmartContract("TBqKDzeqfGotma8f47GvwLKaD4rqtiRdkE", "studentOnboard(string , string)" ,options ,parameter , window.tronLink.tronWeb.defaultAddress.base58)

}

  return (
    <div className="scroller bg-black ">
      <div className="h-screen">
      <h1 className="text-lg font-medium text-red-500 text-center py-[30px]">Complete the process to register as student</h1>
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
              className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            id="eventName"
            className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="eventName"
            className="peer-focus:font-medium absolute text-sm text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            Try to put short description aboout you 🤯 😎
          </div>

          <button
            className="text-white mt-6 border border-red-500 focus:ring-4 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center bg-transparent dark:focus:ring-blue-800 "
            type="submit"
            disabled={submitState !== 0}
          >
           Register as Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentListing;

// var options = {
//  feeLimit: 100000000,
//  callValue: 0,
//  tokenValue: 10,
//  tokenId: 1000001,
//  txLocal: true
// };

// var parameter = [{type:'address',value:'TV3nb5HYFe2xBEmyb3ETe93UGkjAhWyzrs'},{type:'uint256',value:100}];

//   const onboardStudent = await tronWeb.transactionBuilder.triggerSmartContract("TBqKDzeqfGotma8f47GvwLKaD4rqtiRdkE
// ", "studentOnboard(string , string)" ,options ,parameter , window.tronLink.tronWeb.defaultAddress.base58)

// [
//   {
//     type:"string", 
//     value: ""
//   },{
//          type:"string" ,
//          value:""
//   },

// ]