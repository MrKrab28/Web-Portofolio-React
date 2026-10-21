import DataImage from "../data";
import { listTools } from "../data";
const about = () => {
  return (
    <>
      <div className="tentang mt-32 py-10 ">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Halo, perkenalkan saya Imam Ashari. s, seorang Fullstack Developer
            yang berfokus pada programming dan pengembangan website, dengan
            keahlian khusus dalam membangun aplikasi sistem informasi internal
            yang fungsional dan terintegrasi serta memiliki latar belakang dalam
            IT specialist. saya tidak hanya fokus pada penulisan kode yang siap
            pakai, tetapi juga memastikan sistem berjalan optimal untuk
            mendukung kebutuhan harian bisnis.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt=""
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div className="">
                <h1 className="text-4xl mb-1">
                  20<span className="text-violet-500">+</span>
                </h1>
                <p>Projects Done</p>
              </div>
              <div className="">
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32" >
          <h1 className="text-4xl/snug font-black mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tech Stack</h1>
          {/* <p className="xl:w-2/5 lg:w-2/4 md:w-3/4 sm:w-3/4 w-full mx-auto text-base/loose opacity-50">Tecth Stack</p> */}
          <div className="tools-box mt-14 grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" >

            {listTools.map(tool => (

            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-down" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md"
              />
              <div className="">
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default about;
