import icon1 from '../assets/icon 01.jpg';
import icon2 from '../assets/icon 02.jpg';
import icon3 from '../assets/icon 03.jpg';

const services = [
    { icon: icon1, title: 'Buy a home', desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house.' },
    { icon: icon2, title: 'Rent a home', desc: 'With 35+ filters and custom keyword search, Trulia can help you find a home.' },
    { icon: icon3, title: 'See neighborhoods', desc: 'With more neighborhood insights than any other real estate website.' },
];

const Services = () => {
    return (
        <section className="bg-white py-14">
            <div className="max-w-6xl mx-auto px-5">

                <h2 className="text-center font-inter font-semibold text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] text-[#0F2B4A] mb-10 md:mb-14">
                    What Can We Help You Find?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                    {services.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <div className="relative mb-8 mt-4">
                                <div className="absolute -top-3 -left-3 w-14 h-14 bg-[#DBEAFE] rounded-xl z-0" />
                                <img src={item.icon} alt={item.title} className="relative z-10 w-[90px] h-[80px] sm:w-[110px] sm:h-[97px] object-contain" />
                            </div>
                            <h3 className="font-inter font-semibold text-[18px] sm:text-[20px] text-[#0F2B4A] mb-2">{item.title}</h3>
                            <p className="font-roboto text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[280px]">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
