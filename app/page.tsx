import ResearchPart from "@/client/researchPart";
import SymptomInput from "@/client/symptom-input";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-7xl font-extrabold">WhoDaDoc</h1>
      <h2 className="text-xl mt-4 mb-10 text-center">Finding the right doctor in Korea without struggle</h2>
      {/* <SymptomInput /> */}
      <ResearchPart />
    </main>
  );
}
