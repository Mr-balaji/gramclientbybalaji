import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import { Toast } from 'primereact/toast';
import { useRef } from 'react';
        

export default function Index() {

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")
  const [buttonText,setButtonText] = useState("प्रवेश करा");

  const router = useRouter();
  const toast = useRef(null);
  const  handleSubmit = async(e) =>{
    e.preventDefault();
    if(userName === "" || password ===""){
      toast.current.show({severity:'error', summary: 'Error', detail:'Please Fill All Field', life: 3000});
    }else{
      const payloadDta ={
        "email":userName,
        "password":password,
      }
      setButtonText("please wait...")
      const res = await axios.post('https://surveybackend-cjev.onrender.com/api/admin/login',payloadDta);
      console.log("payloadDta",res);
      if(res.data.responseStatus === "success"){
        router.push("/dashboard")
        localStorage.setItem("token",JSON.stringify(res.data.responseData.token))
      }else if(res.data.responseStatus === "error"){
       setError(res.data.responseMsg)
       setButtonText("प्रवेश करा")
      }else{
       setButtonText("प्रवेश करा")
      }
    }
    

  }


  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Toast ref={toast} />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
          className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className=" md:h-auto md:w-1/2 bg-[#000]">
              <Image src="/assets/images/login-office.jpeg" className="h-full dark:block" height={800} width={800} alt="" />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
              <div className="w-full">
                <h1
                  className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                >
                  Login
                </h1>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">user</span>
                  <input
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <input
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                  />
                </label>


                <button
                onClick={handleSubmit}
                  className="block w-full px-4 py-2 mt-10 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg_color border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-600 purple-700 focus:outline-none focus:shadow-outline-purple "
                >
                  
                  {buttonText}
                </button>

                <hr className="my-8" />





                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  <i className="pi pi-user mr-2" style={{ fontSize: '0.9rem' }}></i>  Mr.Sujit Yadav
                </div>
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  <i className="pi pi-phone mr-2" style={{ fontSize: '0.9rem' }}></i> 8975593718
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}