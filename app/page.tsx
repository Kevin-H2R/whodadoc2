import SymptomInput from "@/client/symptom-input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-7xl font-extrabold">WhoDaDoc</h1>
      <h2 className="text-xl mt-4 mb-10">Finding the right doctor in Korea without struggle</h2>
      <SymptomInput />
      <button className="rounded px-5 py-2.5 mt-10 w-full sm:w-1/2 md:w-1/3 overflow-hidden group bg-pink-500 relative hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
        <span className="relative">Show me on naver</span>
      </button>
    </main>
  );
}
