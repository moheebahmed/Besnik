import { useState } from 'react';

const avatars = [
    { src: 'https://randomuser.me/api/portraits/men/11.jpg', style: { top: '8%', left: '4%', width: 56, height: 56 } },
    { src: 'https://randomuser.me/api/portraits/men/22.jpg', style: { top: '22%', left: '16%', width: 72, height: 72 } },
    { src: 'https://randomuser.me/api/portraits/women/33.jpg', style: { top: '52%', left: '22%', width: 44, height: 44 } },
    { src: 'https://randomuser.me/api/portraits/men/44.jpg', style: { top: '72%', left: '4%', width: 60, height: 60 } },
    { src: 'https://randomuser.me/api/portraits/men/55.jpg', style: { top: '8%', right: '4%', width: 72, height: 72 } },
    { src: 'https://randomuser.me/api/portraits/men/66.jpg', style: { top: '28%', right: '10%', width: 44, height: 44 } },
    { src: 'https://randomuser.me/api/portraits/men/77.jpg', style: { top: '52%', right: '16%', width: 60, height: 60 } },
    { src: 'https://randomuser.me/api/portraits/men/88.jpg', style: { top: '68%', right: '4%', width: 72, height: 72 } },
];

const reviews = [
    { name: 'Becky Nelson', rating: 4, text: '"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'James Carter', rating: 5, text: '"Besnik made our home buying experience incredibly smooth. His attention to detail and dedication to finding us the perfect home was outstanding."', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Sarah Williams', rating: 4, text: '"Outstanding service from start to finish. Besnik was always available to answer our questions and guided us through every step of the process."', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
];

const Stars = ({ count }) => (
    <div className="flex items-center justify-center gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= count ? '#F59E0B' : '#D1D5DB'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleChange = (i) => {
        if (i === current) return;
        setVisible(false);
        setTimeout(() => { setCurrent(i); setVisible(true); }, 250);
    };

    return (
        <section className="bg-[#F9FBFE] py-14 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-inter font-semibold text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] text-[#0F2B4A] uppercase tracking-widest">
                        Testimonials
                    </h2>
                    <p className="font-roboto text-[14px] sm:text-[15px] text-[#576B81] mt-3">
                        Our Clients send us bunch of smilies with our services and we love them
                    </p>
                </div>

                {/* Desktop layout */}
                <div className="relative hidden md:block" style={{ height: '520px' }}>
                    {avatars.map((av, i) => (
                        <div key={i} className="absolute rounded-full overflow-hidden border-2 border-white shadow-md" style={{ ...av.style }}>
                            <img src={av.src} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '30px' }}>
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-36 h-36 rounded-full bg-white opacity-60" />
                            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl"
                                style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                                <img src={reviews[current].avatar} alt={reviews[current].name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2" style={{
                        top: '170px', width: '46%',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(14px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}>
                        <div className="bg-white rounded-2xl shadow-sm px-10 py-8 text-center">
                            <p className="font-roboto text-[15px] leading-[26px] text-gray-500">{reviews[current].text}</p>
                            <h4 className="font-inter font-medium text-[20px] text-[#0F2B4A] mt-5">{reviews[current].name}</h4>
                            <Stars count={reviews[current].rating} />
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-5">
                            {reviews.map((_, i) => (
                                <button key={i} onClick={() => handleChange(i)}
                                    className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-4 bg-gray-700' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden mt-8 flex flex-col items-center"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5">
                        <img src={reviews[current].avatar} alt={reviews[current].name} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm px-6 py-6 text-center w-full">
                        <p className="font-roboto text-[14px] leading-[24px] text-gray-500">{reviews[current].text}</p>
                        <h4 className="font-inter font-semibold text-[16px] text-[#0F2B4A] mt-4">{reviews[current].name}</h4>
                        <Stars count={reviews[current].rating} />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-5">
                        {reviews.map((_, i) => (
                            <button key={i} onClick={() => handleChange(i)}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-4 bg-gray-700' : 'w-3 h-3 bg-gray-300'}`} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
