import '@/styles/tailwind.output.css';

import '@/styles/customtable.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/index";
import { ToastContainer } from "react-toastify";
import '@/styles/globals.css';

import { Inter } from '@next/font/google'

const myInter = Inter({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return <main className={myInter.className}>
    <Provider store={store}>
    
      <Component {...pageProps} /><ToastContainer autoClose={500} />
     
      </Provider>
    </main>
}





