import React from 'react';
import type { SectionBanner2Props } from '@/types';

export const SectionBanner2: React.FC<SectionBanner2Props> = ({
    title,
    description,
    bgColor = "bg-[#2A4793]",
    buttonLabel,
    onButtonClick,
}) => {
    return (
        <section className={`${bgColor} w-full py-10 sm:py-12 px-4 sm:px-6 md:px-12`}>
            <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 leading-tight">
                    {title}
                </h2>

                <p className="text-white text-sm sm:text-base md:text-lg opacity-90 max-w-3xl mx-auto">
                    {description}
                </p>
                
                <button 
                    onClick={onButtonClick}
                    className="border-[#F7CE47] border-2 bg-[#2A4793] text-[#F7CE47] font-bold rounded-lg px-6 py-2.5 sm:py-3 w-full max-w-xs sm:max-w-sm cursor-pointer hover:bg-[#F7CE47] hover:text-[#2A4793] transition-all duration-300 text-sm sm:text-base mt-2"
                >
                    {buttonLabel}
                </button>
            </div>
        </section>
    );
};
