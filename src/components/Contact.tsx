const Contact = () => {
  return (
    <>
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-black text-center">Contact Me</h1>
      </div>
      <form
       action="https://formsubmit.co/mr.krab2810@gmail.com" method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              placeholder="Masukkan Nama..."
              className="border border-zinc-500 p-2 rounded-md focus:outline-none focus:border-blue-600 focus:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="">
              Email
            </label>
            <input
              type="text"
              name="nama"
              placeholder="Masukkan Email..."
              className="border border-zinc-500 p-2 rounded-md focus:outline-none focus:border-blue-600 focus:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="pesan">
              Pesan
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols={50}
              rows={7}
              placeholder="Pesan..."
              className=" border border-zinc-500 p-2 rounded-md focus:outline-none focus:border-blue-600 focus:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <button type="submit" className="border-2 border-zinc-500 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none  hover:border-blue-600 hover:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)] cursor-pointer focus:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)] focus:border-blue-600 active:shadow-[0_0_25px_rgba(30,58,138,0.8),0_0_80px_rgba(30,58,138,0.5)]">Kirim</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
