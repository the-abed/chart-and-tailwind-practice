
import { Suspense } from 'react'
import './App.css'
import DaisyNab from './Components/DaisyNab'
import Navbar from './Components/Navbar'
import PricingOptions from './Components/Pricing/PricingOptions'
import LoadingFallback from './Components/LoadingFallback'
import Chart from './Components/Chart'
import axios from 'axios'
import MarksChart from './Components/MarksChart'

const pricingPromise = fetch('pricingOptions.json')
.then (res => res.json());

const markPromise = axios.get('marksData.json')


function App() {

  return (
    <>
     <header>
       <Navbar></Navbar>
     </header>
     <main>
      <Suspense fallback={<LoadingFallback></LoadingFallback>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Chart></Chart>
     <Suspense>
      <MarksChart markPromise={markPromise}></MarksChart>
     </Suspense>
     </main>
     
      
    </>
  )
}

export default App
