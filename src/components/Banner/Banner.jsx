import HeroImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <section className="">
            <div className="Accent Sora rounded-b-lg lg:rounded-b-2xl flex flex-col items-center text-center pt-2 md:pt-12 pb-20 md:pb-56 px-1.5">
                <div className="max-w-[1100px] mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-[56px] leading-10 md:leading-14 lg:leading-18 text-white font-bold mb-6">Upgrade Your Tech Accessorize <br className='hidden lg:block' /> with <br className='block lg:hidden' /> Gadget Heaven</h1>

                </div>
                <div className="max-w-[750px] mx-auto">
                    <p className="text-base text-white font-normal mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
                <button className="text-lg md:text-xl font-bold AccentText bg-white rounded-4xl px-6 md:px-8 py-2 md:py-4 mb-12">Shop Now</button>

            </div>
            <div className='max-w-[350px] md:max-w-[600px] lg:max-w-[900px] mx-auto p-3 md:p-6 TransparentBg border-2 border-white rounded-4xl -mt-24 md:-mt-52'>
                <img className='w-full lg:max-h-[450px] rounded-3xl object-cover' src={HeroImg} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;