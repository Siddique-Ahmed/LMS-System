export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Your LMS
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Access quality learning resources and manage your courses effectively.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
