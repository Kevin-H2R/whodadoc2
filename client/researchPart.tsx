"use client"

import { useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResearchPart = () => {

  const [selected, setSelected] = useState<string | null>(null)
  const engToKrHospitals : {[key: string]: string} = {
    "General Hospital": "종합병원",
    "University Hospital": "대학병원",
    "Specialized Hospital": "전문병원",
    "Clinic": "클리닉",
    "Internal Medicine Clinic": "내과",
    "Pediatric Clinic": "소아과",
    "OB/GYN Clinic": "산부인과",
    "Orthopedic Clinic": "정형외과",
    "Dermatology Clinic": "피부과",
    "Dental Clinic": "치과",
    "ENT Clinic": "이비인후과",
    "Ophthalmology Clinic": "안과",
    "Psychiatric Clinic": "정신과",
    "Rehabilitation Clinic": "재활의학과",
    "Traditional Korean Medicine Clinic": "한의원",
    "Veterinary Clinic": "동물병원",
    "Emergency Center": "응급센터",
    "Public Health Center": "보건소"
  }

  const showOnNaver = () => {
    if (!selected) return
    const encodedSearchTerm = encodeURIComponent(engToKrHospitals[selected]);
    const naverMapWebsiteUrl = `https://map.naver.com/v5/search/${encodedSearchTerm}`;
    const naverMapAppUrl = `nmap://search?query=${encodedSearchTerm}`;

    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open the Naver Map app
      window.location.href = naverMapAppUrl;

      // If the app is not available, fall back to the website after a short delay
      setTimeout(() => {
        window.location.href = naverMapWebsiteUrl;
      }, 500);
    } else {
      // Open the Naver Map website on desktop
      window.open(naverMapWebsiteUrl, '_blank');
    }
  };

  const copyToClipboard = () => {
    if (!selected) return
    navigator.clipboard.writeText(engToKrHospitals[selected])
    toast.info(`Copied ${engToKrHospitals[selected]} to clipboard`)
  }

  return <div className="flex flex-col items-center">
    <div className="flex flex-wrap gap-2 w-full md:w-2/3 xl:w-1/2 justify-center">
      {Object.keys(engToKrHospitals).map(en => {
        return <button key={'hospital_' + en.replaceAll(' ', '')}
          className={selected === en ? "rounded-full border border-pink-500 bg-pink-400 px-3 py-2 text-white w-2/5 md:w-auto" :
              "rounded-full border border-pink-400 bg-pink-300 px-3 py-2 text-white w-2/5 md:w-auto"}
          onClick={() => {setSelected(en)}}
          >
          {en}
        </button>
      })}
    </div>
    {selected && <div className=" mt-10 flex flex-col w-full items-center">
      <div>You are looking for a:</div>
      <div className="text-5xl my-5 cursor-pointer" onClick={copyToClipboard}>
        {engToKrHospitals[selected]}
      </div>
      <button className="shadow-xl rounded px-5 py-2.5 mt-10 w-full sm:w-1/2 md:w-1/3 overflow-hidden group bg-pink-500 relative hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 transition-all ease-out duration-300"
        onClick={showOnNaver} >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
      <span className="relative" >Find around me</span>
    </button>
    <ToastContainer autoClose={2000} hideProgressBar={false} transition={Bounce} position="bottom-center"/>
  </div>}


  </div>
}

export default ResearchPart
