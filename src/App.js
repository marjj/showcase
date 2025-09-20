import Developer from "./Developer";
import { useEffect, useState } from "react";

function App() {

  const [experienceYears, setExperienceYears] = useState(0);
  const [age, setAge] = useState(0);


  useEffect(() => {
    const year = new Date().getFullYear();
    const age = year - 1994;
    setAge(age);
    setExperienceYears(age - 22);
    // Your effect logic here
  }, []);

  return (
    <div className="bg-[#02081b]">
      <div className="lg:max-w-2xl mx-auto">
        <div className="w-full h-screen mx-auto h-full flex flex-col items-center justify-center text-white">
          <Developer />

          <div className="bg-pink-500 w-20 h-1 rounded-full mt-10"/>
            <div className="bg-cyan-600 p-4 mt-10 rounded-3xl">
            <p className="pb-2 font-bold text-3xl">Hi there!</p>
            <p className="text-sm">A software engineer.</p>
            <p className="text-sm">I do code.</p>
            <p className="text-sm">Experience? {experienceYears} years</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-xs mt-10 text-gray-400">
            <span>Linkedin</span>
            <span>Github</span>
            <span>Mail</span>
            <span>Codepen</span>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;
