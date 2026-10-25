export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-8 py-12 font-serif">
      
      {/* Title */}
      <h1 className="text-xl md:text-2xl text-black text-center mb-8">
        Site is still under construction :(
      </h1>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img 
          src="/construction.png" 
          alt="Under construction" 
          className="w-96 md:w-120 h-auto" 
        />
      </div>

    </main>
  );
}