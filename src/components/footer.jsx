import logo from '../assets/logo.png';

const footerLinks = [
    { title: 'Popular Searches', links: ['Apartment for Rent', 'Apartment Low to hide', 'Offices for Buy', 'Offices for Rent'] },
    { title: 'About Us', links: ['Our Story', 'Team Members', 'Careers', 'Contact Us'] },
    { title: 'Quick links', links: ['Terms of Use', 'Privacy Policy', 'Contact Support', 'FAQs'] },
    { title: 'Support', links: ['Help Center', 'Loan Support', 'Managment', 'Privacy Policy'] },
];

const Footer = () => {
    return (
        <footer className="bg-white pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-5">

                {/* Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10">
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <h4 className="font-inter font-bold text-[14px] sm:text-[15px] text-[#0F2B4A] mb-4">{col.title}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="font-roboto text-[13px] sm:text-[14px] text-[#576B81] hover:text-blue-500 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <a href="#">
                        <img src={logo} alt="Besnik" className="h-6 sm:h-7 object-contain" />
                    </a>
                    <p className="font-roboto text-[12px] sm:text-[13px] text-gray-400 text-center">
                        © 2021 Besnik. All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
