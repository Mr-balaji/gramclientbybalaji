import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Inter } from '@next/font/google'
import { NavLink } from "react-router-dom";

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})


export default function Top({ ...pageProps }) {
    const notificatio = useRef(null);

    return (
        <>
            <header className="z-10 py-4 bg-white shadow-lg dark:bg-gray-800">
                <div
                    className="flex items-center justify-between h-full mx-auto px-[30px] text-purple-600 dark:text-purple-300"
                >

                <div class=" text-lg font-bold text-gray-800 dark:text-gray-200" >
                            ग्राम-सेवा
                </div>

                
                    <ul className="flex items-center flex-shrink-0 space-x-3">
                        
                    <li className="relative">
                        <Link href='' className="d-btn-head d-buttonhead">डॅशबोर्ड</Link>
                      </li>
                      <li className="relative">
                        <Link href='/allusers' className="d-btn-head d-buttonhead-ouline">सर्व यूजर्स </Link>
                      </li>
                      <li className="relative">
                        <Link href='/filterpage' className="d-btn-head d-buttonhead-ouline">सर्च</Link>
                      </li>

                        <li className="relative ml-4">
                            <button
                                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"

                                aria-label="Notifications"
                                aria-haspopup="true"
                            >
                               <i className="pi pi-sign-out ml-4"></i>

                                
                            </button>

                        </li>

                      
                    </ul>
                </div>
            </header>


        </>
    );
}
