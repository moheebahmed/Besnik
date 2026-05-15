import bannerImg from '../assets/banner.png';

const Banner = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-8">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left w-full">
                    <h1 className="font-inter font-semibold text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.2] text-[#0F2B4A]">
                        Search for Homes in your Neighborhood
                    </h1>
                    <p className="font-roboto text-[15px] sm:text-[16px] leading-[28px] text-gray-500 mt-4 mb-8 max-w-md mx-auto md:mx-0">
                        Online Estate Agency, the modern way to sell your own home.
                        You can use griffin residential to market your property.
                    </p>
                    <a href="#" className="inline-block font-roboto text-[15px] text-white bg-[#2289FF] px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Search
                    </a>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-sm sm:max-w-md md:max-w-full mx-auto">
                    <img src={bannerImg} alt="Banner" className="w-full object-contain" />
                </div>

            </div>
        </section>
    );
};

export default Banner;
