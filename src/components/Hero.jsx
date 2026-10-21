import DataImage from "../data";
const Hero = () => {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInRight animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 mt-10 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Ngoding Itu menyenangkan</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya <span className="text-indigo-500">IMAM ASHARI. S</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki ketertarikan dalam bidang teknologi, terutama pada
            programming dan pengembangan website. Keahlian saya mencakup
            pengelolaan dukungan IT operasional serta implementasi kode untuk
            membangun aplikasi sistem informasi internal yang fungsional,
            terintegrasi, dan siap pakai.
          </p>
          <div className="flex items-center sm:gap-5 gap-2">
            <a
              href=""
              className="border-2 border-zinc-700 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-300  hover:border-blue-600 hover:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]"
            >
            <i className="ri-file-download-line ri-xl"></i> Download CV
            </a>
            {/* <a
              href=""
              className="border border-violet-600 bg-[#0A0A0A] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300  hover:border-violet-800 hover:shadow-[0_0_25px_rgba(168,85,247,0.8),0_0_80px_rgba(168,85,247,0.5)]"
            >
              Github
            </a> */}
            <a
              href=""
              className="border-2 border-zinc-700 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-300  hover:border-blue-600 hover:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]"
            >
             <i className="ri-github-fill ri-xl"></i> Github
            </a>

          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="md:ml-auto w-125 rounded-b-full object-cover animate__animated animate__fadeInLeft animate__delay-2s"
        />
      </div>
    </>
  );
};

export default Hero;
