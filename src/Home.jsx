function WireframeSphere() {

  return (

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div className="sphere">

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
      <h1 className="text-5xl font-audiowide">
        KARTIK VERMA
      </h1>
      <WireframeSphere />

      <h1 className="absolute -left-4 bottom-20 text-6xl text-gray-400">
        /UX Designer
      </h1>

      <h1 className="absolute -right-3 bottom-1/3 text-6xl text-gray-400">
        UI/
      </h1>
    </section>
  );
}

export default Home;