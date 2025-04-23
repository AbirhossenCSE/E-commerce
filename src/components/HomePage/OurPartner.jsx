import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Marquee from 'react-fast-marquee';

// partner logos
import logo1 from '../../assets/partners/Logo1.webp';
import logo2 from '../../assets/partners/Logo2.webp';
import logo3 from '../../assets/partners/Logo3.webp';
import logo4 from '../../assets/partners/Logo4.webp';
import logo5 from '../../assets/partners/Logo5.webp';

const OurPartner = () => {
    return (
        <div className="my-16">
            <SectionTitle heading='Our Partner' />

            <div className="w-full my-6">
                <Marquee speed={50} className="gap-10">
                    {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                        <div key={index} className="mx-10">
                            <img src={logo} alt={`Partner ${index + 1}`} className="h-20 w-auto object-contain" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default OurPartner;