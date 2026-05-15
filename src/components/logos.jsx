import { useRef, useEffect } from 'react';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const Logos = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animFrame;
        let pos = 0;
        const speed = 0.5;

        const animate = () => {
            pos -= speed;
            // reset when first set scrolled out
            if (Math.abs(pos) >= track.scrollWidth / 2) {
                pos = 0;
            }
            track.style.transform = `translateX(${pos}px)`;
            animFrame = requestAnimationFrame(animate);
        };

        animFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrame);
    }, []);

    // duplicate logos for seamless loop
    const allLogos = [...logos, ...logos];

    return (
        <div className="py-10 border-t border-gray-100 overflow-hidden">

            {/* Desktop — static row */}
            <div className="hidden md:flex max-w-6xl mx-auto px-5 items-center justify-between">
                {logos.map((logo, index) => (
                    <a href="#" key={index}>
                        <img src={logo} alt={`Partner logo ${index + 1}`} className="h-10 object-contain opacity-50 hover:opacity-80 transition-opacity" />
                    </a>
                ))}
            </div>

            {/* Mobile — auto scroll slider */}
            <div className="md:hidden relative">
                <div ref={trackRef} className="flex items-center gap-10 w-max px-5">
                    {allLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Partner logo ${index + 1}`}
                            className="h-10 object-contain opacity-50 flex-shrink-0"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Logos;
