import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";


export default function Dashboard() {
    


  

   


    return (
        <>
            <Layout pageTitle="Dashboard">
            
                <div className="h-screen">
                <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-12">
                <div className="col-span-6  p-4 bg-white rounded-lg shadow-sm border">
                        <div className="flex justify-between ">
                            <div>
                                <h4 className="text-[16px] font-semibold text-[#696cff]">हेलो वापरकर्ता!</h4>
                                 <p className="text-[16px] font-light text-[#566a7f] my-[20px]">can you add more user click on below button </p>
                                 <Link href='' className="text-[12px] text-[#696cff] font-normal border border-[#696cff] px-2 py-1.5 rounded-md">Add Users</Link>
                            </div>
                            <div>
                                     <Image  src="/assets/images/man-with-laptop-light.png" height="120" width="120"  alt="" />
                            </div>
                        </div>
                   
                </div>
              <div
                class="flex items-center p-4 bg-white rounded-lg shadow-sm border col-span-3"
              >
                <div
                  class="p-3 mr-4 text-orange-500 bg-blue-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                >
                 <i className="pi pi-users "></i>
                </div>
                <div>
                  <p
                    class="mb-2 text-md font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total User
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    6389
                  </p>
                </div>
              </div>
             
              </div>
                </div>
            </Layout>
            

           

        </>
    );
}
