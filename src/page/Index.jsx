import { ChevronDown } from 'lucide-react'
import cover from '../assets/foto/cover.jpg'
import pria from '../assets/foto/pria.jpg'
import wanita from '../assets/foto/wanita.jpg'
import ft1 from '../assets/foto/1.jpg'
import ft2 from '../assets/foto/2.jpg'
import ft3 from '../assets/foto/3.jpg'
import ft4 from '../assets/foto/4.jpg'
import ft5 from '../assets/foto/5.jpg'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Index() {

    const targetDate = new Date("2027-08-15T00:00:00");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const { nama } = useParams();
    const namaTamu = nama ? formatNamaFromSlug(nama) : "Tamu Undangan";


    function formatNamaFromSlug(slug) {
        return slug
            .split("-")
            .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
            .join(" ");
    }


    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center bg-slate-400 w-screen min-h-screen">
            <div className="max-w-[430px] w-screen min-h-screen bg-white flex flex-col gap-6">
                <section
                    className="relative h-dvh w-full bg-cover bg-center bg-no-repeat flex flex-col items-center"
                    style={{
                        backgroundImage: `url(${cover})`,
                    }}
                >
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/60 to-transparent z-10"></div>

                    <div className="flex flex-col items-center justify-between h-full">
                        <div className="relative z-20 flex flex-col items-center pt-12">
                            <span className="font-lora text-xs text-yellow-600">the wedding of</span>
                            <h1 className="font-great-vibes font-semibold text-5xl mt-2 text-yellow-600">Bayu & Wulan</h1>
                            <span className="font-lora text-xs text-yellow-600 text-yellow-600">22 - 05 - 2025</span>
                        </div>

                        <div className="flex flex-col items-center px-8 py-2 backdrop-blur text-white rounded-xl overflow-hidden border z-30 mt-56">
                            <span className='text-xs font-lora font-medium'>Kepada Yth:</span>
                            <span className='text-xs font-lora font-medium'>Bapak/Ibu/Saudara/i</span>
                            <span className='text-lg text-yellow-200 font-lora font-bold mt-3 mb-2'>{namaTamu}</span>
                        </div>

                        <span className='animate-bounce p-3 rounded-full border z-10 text-white mb-8'>
                            <ChevronDown />
                        </span>
                    </div>

                </section>

                <section className='flex flex-col items-center h-max py-8 gap-4 p-4'>
                    <div className="flex flex-col">
                        <span className='font-sm text-3xl font-bold font-great-vibes text-center text-yellow-600'>Bismillahirrahmanirrahim</span>
                        <h2 className='text-xs text-center font-lora'>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan anak kami :</h2>
                    </div>
                    <div className="flex self-start gap-2 mt-4">
                        <div className="flex flex-col gap-2">
                            <h3 className='font-lora font-medium text-xs mt-4'>Mempelai Wanita</h3>
                            <span className='font-great-vibes text-2xl font-medium text-yellow-600'>Wulan Ningtiyas</span>
                            <span className='font-lora text-xs'>Putri Dari Bapak Joko Atmo Wijoyo dan Ibu Sri Lestari </span>
                        </div>
                        <img src={wanita} className='w-36 h-36 rounded-xl' alt="" />
                    </div>
                    <span className='font-bold font-lora text-3xl'>&</span>
                    <div className="flex self-start gap-2">
                        <img src={pria} className='w-36 h-36 rounded-xl' alt="" />
                        <div className="flex flex-col gap-2">
                            <h3 className='font-lora font-medium text-xs mt-4'>Mempelai Pria</h3>
                            <span className='font-great-vibes text-2xl font-medium text-yellow-600'>Bayu Pamungkas</span>
                            <span className='font-lora text-xs'>Putra Dari Bapak Hj. Purnomo Wijoyo dan Ibu Indrayanti Setyowati </span>
                        </div>
                    </div>
                </section>


                <section className='flex flex-col items-center mt-8 gap-6 bg-yellow-600 py-8'>
                    <div className="flex flex-col items-center">
                        <h2 className='font-great-vibes text-3xl font-bold text-white'>Waktu Acara</h2>
                        <span className='font-lora text-xs text-white'>Jum'at, 22 Mei 2025</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center p-3">
                            <span className='text-xs font-lora text-white'>Akad Nikah</span>
                            <span className='text-sm font-lora font-medium text-white'>08:00 - 09:00</span>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <span className='text-xs font-lora text-white'>Resepsi</span>
                            <span className='text-sm font-lora font-medium text-white'>10:00 - Selesai</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className='font-lora text-xs font-bold text-white'>Kediaman Wanita</h2>
                        <span className='font-lora text-xs text-white'>Jl. Sudirman No 15, Jakarta </span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.days}</span>
                            <span className='text-xs text-white font-lora'>Hari</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.hours}</span>
                            <span className='text-xs text-white font-lora'>Jam</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.minutes}</span>
                            <span className='text-xs text-white font-lora'>Menit</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>

                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.seconds}</span>
                            <span className='text-xs text-white font-lora'>Detik</span>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col items-center mt-6 p-4 gap-6'>
                    <div className="flex flex-col">
                        <h2 className='font-great-vibes text-3xl font-bold text-yellow-600'>Maps</h2>
                    </div>
                    <iframe
                        className='w-full h-80 rounded-2xl'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6852.64799382842!2d111.10917001498578!3d-7.869055890758495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7981b49fdc6c49%3A0x8f701c82181a163e!2sRumah%20Dwi%20Largiyanto!5e0!3m2!1sid!2sid!4v1747420319812!5m2!1sid!2sid"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    ></iframe>
                </section>

                <section className='flex flex-col items-center p-4 gap-4'>
                    <h2 className='font-great-vibes text-3xl font-bold text-yellow-600'>Galeri</h2>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4 space-y-4">
                        <img src={ft5} alt='Galeri 5' className='w-full h-40 object-cover rounded-xl col-span-2' />
                        <img src={ft4} alt='Galeri 4' className='w-full h-40 object-cover object-top rounded-xl col-span-1' />
                        <img src={ft1} alt='Galeri 1' className='w-full h-40 object-cover rounded-xl col-span-1' />
                        <img src={ft2} alt='Galeri 2' className='w-full h-40 object-cover object-bottom rounded-xl col-span-1' />
                        <img src={ft3} alt='Galeri 3' className='w-full h-40 object-cover rounded-xl col-span-1' />
                    </div>
                </section>


                <section className='flex flex-col p-4 items-center gap-4 mt-4 bg-yellow-600'>

                    <p className='text-xs font-lora italic text-center text-white'>
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </p>
                    <span className='text-xs font-lora font-medium text-white'>Q.S Ar Rum 21</span>
                </section>

                <section className='flex flex-col items-center gap-4 p-6 bg-white'>
                    <h2 className='font-great-vibes text-3xl font-bold text-yellow-600'>Terima Kasih</h2>
                    <p className='text-xs font-lora text-center text-gray-600'>
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir dan memberikan doa restu kepada kami.
                    </p>
                    <p className='text-xs font-lora text-center text-gray-600'>
                        Atas kehadiran dan doa restunya, kami mengucapkan terima kasih yang sebesar-besarnya.
                    </p>
                </section>
                <footer className="bg-black text-white text-center py-4 mt-10">
                    <p className="text-xs font-lora">
                        {/* &copy; */}
                        {/* {new Date().getFullYear()} */}
                         Ulemin.id — Powered by AdhLabs
                    </p>
                </footer>

            </div>
        </div>
    )
}

export default Index
