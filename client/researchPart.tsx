"use client"

import { useState } from "react"

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

  return <div className="flex flex-col">
    <div className="flex flex-wrap">
      {Object.keys(engToKrHospitals).map(en => {
        return selected !== en ?
        <button key={'hospital_' + en.replaceAll(' ', '')} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-pink-400 text-white" onClick={() => {setSelected(en)}}>
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45  bg-pink-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" ></span>
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45  bg-pink-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" ></span>
          <span className="relative text-pink-400 transition duration-300 group-hover:text-white ease">{en}</span>
        </button> :
        <button key={'hospital_' + en.replaceAll(' ', '')} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-pink-400 text-white bg-pink-400">{en}</button>
      })}
    </div>
    {selected && <div className=" mt-10 flex flex-col w-full items-center">
      <div>You are looking for a:</div>
      <div className="text-5xl my-5">{engToKrHospitals[selected]}</div>
      <button className="rounded px-5 py-2.5 mt-10 w-full sm:w-1/2 md:w-1/3 overflow-hidden group bg-pink-500 relative hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 transition-all ease-out duration-300">
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
      <span className="relative">Show me on naver</span>
    </button>
  </div>}


  </div>
}

export default ResearchPart
