import HeroImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <section className="">
            <div className="Accent Sora rounded-b-2xl flex flex-col items-center text-center pt-12 pb-56 ">
                <div className="max-w-[1100px] mx-auto">
                    <h1 className="text-[56px] text-white font-bold mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>

                </div>
                <div className="max-w-[750px] mx-auto">
                    <p className="text-base text-white font-normal mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
                <button className="text-xl font-bold AccentText bg-white rounded-4xl px-8 py-4 mb-12">Shop Now</button>

            </div>
            <div className='max-w-[900px] mx-auto p-6 TransparentBg border-2 border-white rounded-4xl -mt-48'>
                <img className='w-full max-h-[450px] rounded-3xl object-cover' src={HeroImg} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;