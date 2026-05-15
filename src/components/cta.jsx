const CTA = () => {
    return (
        <section className="bg-[#5D5FEF] py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

                {/* Left */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="font-inter font-semibold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-tight text-white mb-4">
                        Talk to a Redfin Agent
                    </h2>
                    <p className="font-roboto text-[14px] sm:text-[15px] leading-[26px] text-white/70 max-w-sm mx-auto md:mx-0">
                        Start your search with an expert local agent—there's no pressure or obligation.
                    </p>
                </div>

                {/* Right */}
                <div className="flex-1 w-full">
                    <p className="font-roboto text-[13px] sm:text-[14px] text-white/80 mb-3 text-center md:text-left">
                        Where are you searching for homes?
                    </p>
                    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
                        <input
                            type="text"
                            placeholder="City, Address, ZIP"
                            className="flex-1 min-w-0 px-4 py-3.5 text-[14px] sm:text-[15px] text-gray-500 outline-none bg-transparent"
                        />
                        <button className="bg-[#2289FF] hover:bg-blue-600 transition-colors px-4 sm:px-5 py-3.5 flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTA;
