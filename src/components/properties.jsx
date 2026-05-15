import { useState, useRef } from 'react';
import img1 from '../assets/image.jpg';
import img2 from '../assets/iamge.jpg';
import img3 from '../assets/image-1.jpg';
import img4 from '../assets/image-2.jpg';

const allProperties = [
    [
        { img: img4, price: '$259,000', name: 'Case Alda', address: 'Co Rd Tribune Tribune', beds: 2, baths: 2, liked: true },
        { img: img2, price: '$229,000', name: 'Langes Beach House', address: '375 Highland Ave NE UNIT 1002', beds: 2, baths: 2, liked: false },
        { img: img3, price: '$289,000', name: 'Supper Delax Home', address: '1398 Lynford Dr SW, Atlanta', beds: 2, baths: 2, liked: false },
        { img: img1, price: '$329,000', name: 'Clinton Villa', address: '675 Albert St NW, Atlanta', beds: 2, baths: 2, liked: false },
    ],
    [
        { img: img3, price: '$310,000', name: 'Sunset Apartments', address: '22 Maple Ave, Boston', beds: 3, baths: 2, liked: false },
        { img: img4, price: '$415,000', name: 'Green Valley Home', address: '88 Oak Street, Denver', beds: 4, baths: 3, liked: false },
        { img: img1, price: '$198,000', name: 'Harbor View', address: '5 Pier Road, Miami', beds: 2, baths: 1, liked: false },
        { img: img2, price: '$275,000', name: 'Riverside Cottage', address: '14 River Ln, Portland', beds: 3, baths: 2, liked: false },
    ],
    [
        { img: img2, price: '$349,000', name: 'Mountain Retreat', address: '9 Summit Blvd, Aspen', beds: 3, baths: 2, liked: false },
        { img: img1, price: '$189,000', name: 'City Loft', address: '301 Downtown Ave, Chicago', beds: 1, baths: 1, liked: false },
        { img: img4, price: '$420,000', name: 'Palm Estate', address: '77 Palm Dr, Los Angeles', beds: 4, baths: 3, liked: false },
        { img: img3, price: '$265,000', name: 'Lakeside Manor', address: '33 Lake Rd, Seattle', beds: 3, baths: 2, liked: false },
    ],
];

// Flatten all cards for mobile slider
const allCards = allProperties.flat();

const BedIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9V19M3 13H21M21 9V19M5 9V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9" />
    </svg>
);
const BathIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12H20V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V12Z" />
        <path d="M4 12V7C4 5.9 4.9 5 6 5H8V8" />
    </svg>
);
const HeartIcon = ({ filled }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? '#3B82F6' : 'none'} stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const PropertyCard = ({ prop }) => (
    <div className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden bg-white">
        <img src={prop.img} alt={prop.name} className="w-full h-48 object-cover" />
        <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
                <span className="text-[#2289FF] font-semibold text-[20px]">{prop.price}</span>
                <button className="p-1"><HeartIcon filled={prop.liked} /></button>
            </div>
            <div>
                <h4 className="font-inter font-medium text-[18px] text-[#0F2B4A]">{prop.name}</h4>
                <p className="font-roboto text-[14px] text-[#576B81] mt-1">{prop.address}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5 whitespace-nowrap"><BedIcon /> {prop.beds} Beds</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><BathIcon /> {prop.baths} Bath</span>
            </div>
            <button className="w-full border border-[#2289FF] text-[#2289FF] text-[14px] py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                View Details
            </button>
        </div>
    </div>
);

const Properties = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    // Mobile swipe state
    const [mobileCard, setMobileCard] = useState(0);
    const [mobileVisible, setMobileVisible] = useState(true);
    const touchStartX = useRef(null);

    const handleDotClick = (i) => {
        if (i === current) return;
        setVisible(false);
        setTimeout(() => { setCurrent(i); setVisible(true); }, 250);
    };

    const changeMobileCard = (next) => {
        const idx = (next + allCards.length) % allCards.length;
        setMobileVisible(false);
        setTimeout(() => { setMobileCard(idx); setMobileVisible(true); }, 200);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            changeMobileCard(diff > 0 ? mobileCard + 1 : mobileCard - 1);
        }
        touchStartX.current = null;
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-5">

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-10">
                    <div>
                        <h2 className="font-inter font-semibold text-[26px] sm:text-[36px] md:text-[44px] leading-tight text-[#0F2B4A] mb-3">
                            Our trending latest proparty
                        </h2>
                        <p className="font-roboto text-[15px] text-[#576B81]">
                            Our unique process gives you peace of mind from home rent to services
                        </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <button className="flex items-center gap-2 border border-[#EFEFEF] rounded-lg px-5 py-2.5 font-inter text-[14px] text-gray-600 hover:border-blue-400 transition-colors">
                            Property type
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-inter text-[14px] px-5 py-2.5 rounded-lg transition-colors">
                            See All
                        </button>
                    </div>
                </div>

                {/* ===== MOBILE SLIDER ===== */}
                <div className="sm:hidden">
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            opacity: mobileVisible ? 1 : 0,
                            transform: mobileVisible ? 'translateX(0)' : 'translateX(20px)',
                            transition: 'opacity 0.2s ease, transform 0.2s ease',
                        }}
                    >
                        <PropertyCard prop={allCards[mobileCard]} />
                    </div>

                    {/* Mobile dots + arrows */}
                    <div className="flex items-center justify-center gap-4 mt-5">
                        <button onClick={() => changeMobileCard(mobileCard - 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-400 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#576B81" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <div className="flex items-center gap-1.5">
                            {allCards.map((_, i) => (
                                <button key={i} onClick={() => changeMobileCard(i)}
                                    className={`rounded-full transition-all duration-300 ${i === mobileCard ? 'w-4 h-4 bg-gray-800' : 'w-2 h-2 bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        <button onClick={() => changeMobileCard(mobileCard + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-400 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#576B81" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-2">{mobileCard + 1} / {allCards.length}</p>
                </div>

                {/* ===== DESKTOP GRID ===== */}
                <div className="hidden sm:block">
                    <div
                        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
                        className="grid grid-cols-2 gap-5"
                    >
                        {allProperties[current].map((prop, i) => (
                            <div key={i} className="flex gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow">
                                <img src={prop.img} alt={prop.name} className="w-44 h-44 object-cover rounded-xl flex-shrink-0" />
                                <div className="flex flex-col flex-1 justify-between py-1">
                                    <div className="flex items-start justify-between">
                                        <span className="text-[#2289FF] font-semibold text-[22px]">{prop.price}</span>
                                        <button className="p-1"><HeartIcon filled={prop.liked} /></button>
                                    </div>
                                    <div>
                                        <h4 className="font-inter font-medium text-[20px] text-[#0F2B4A]">{prop.name}</h4>
                                        <p className="font-roboto text-[14px] text-[#576B81] mt-1">{prop.address}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5"><BedIcon /> {prop.beds} Beds</span>
                                        <span className="flex items-center gap-1.5"><BathIcon /> {prop.baths} Bath</span>
                                    </div>
                                    <button className="w-fit border border-[#2289FF] text-[#2289FF] text-[13px] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-8">
                        {allProperties.map((_, i) => (
                            <button key={i} onClick={() => handleDotClick(i)}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-4 bg-gray-800' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Properties;
