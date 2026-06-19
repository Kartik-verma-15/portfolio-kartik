function WireframeSphere() {

  return (

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div className="sphere overflow-hidden">

        {[...Array(8)].map((_, i) => (

          <span

            key={i}

            className="ring"

            style={{

              transform: `rotateY(${i * 22.5}deg)`,

            }}

          />

        ))}

      </div>

    </div>

  );

}







function Home() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center"
    >
      <div className="absolute  flex justify-center items-center flex-col">
      <h1 className="text-5xl  justify-center items-center  font-audiowide">

        KARTIK VERMA
      </h1>
      <h3 className="text-sm leading-relaxed text-stone-800 font-plaster ">
        19-06-2026
      </h3>
      </div>
      <WireframeSphere />

      <h1 className="absolute -left-4 bottom-20 text-6xl opacity-50 drop-shadow-md text-gray-400">
        /UX Designer
      </h1>

      <h1 className="absolute left-2 top-6 text-[20px] opacity-65 drop-shadow-md text-gray-400">
        Creating meaningful design
      </h1>

      <h1 className="absolute -right-3 bottom-1/3 drop-shadow-md opacity-50 text-6xl text-gray-400">
        UI/
      </h1>

      <h1 className="absolute right-2 top-[85px] text-[20px] opacity-65 drop-shadow-md text-gray-400">
        simply beautiful interfaces
      </h1>
    </section>
  );
}

export default Home;