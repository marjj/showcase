import Developer from "./Developer";

function App() {
  return (
    <div className="bg-[#0e1427] w-full max-h-screen h-screen text-white text-sm">
      <div className="w-full lg:max-w-2xl mx-auto h-full">
        
        <div className="grid grid-cols-[30%_70%] p-4">
          <div className="p-4">
            <Developer />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-4xl font-bold">Hi, I'm a Developer</h2>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;
