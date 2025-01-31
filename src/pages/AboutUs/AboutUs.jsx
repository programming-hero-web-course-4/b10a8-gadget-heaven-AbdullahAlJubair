import { IoCall } from "react-icons/io5";
import AboutBg from '../../assets/aboutBg.png'
import AboutImg from '../../assets/aboutImg.png'
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Gadget Heaven</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 md:px-20 mt-10'>
                <div className="relative">
                    <img src={AboutBg} alt="" />
                    <img className="absolute top-0" src={AboutImg} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-black mb-5">About Us</h1>
                    <div className='border-8 mb-10 border-[#9538E2]'></div>
                    <div className="space-y-5">
                        <p className="text-base md:text-lg ">Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. </p>
                        <p className="text-base font-semibold">He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
                    </div>

                    <div className="flex flex-nowrap items-center gap-x-2 md:gap-x-5 mt-10">
                        <IoCall className="text-3xl md:text-4xl AccentText" />
                        <p className="text-xl md:text-3xl font-bold">+880 1882795660</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutUs;