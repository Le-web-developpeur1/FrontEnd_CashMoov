import React from 'react';
import type { SectionBanner2Props } from '@/types';

export const SectionBanner2: React.FC<SectionBanner2Props> = ({
    title,
    description,
    bgColor = "bg-white py-12 sm:py-16",
    buttonLabel,
    onButtonClick,
}) => {
    return (
        <section className={`${bgColor} w-full py-10 sm:py-12 px-4 sm:px-6 md:px-12`}>
            <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                    {description}
                </p>
                
                <button 
                    onClick={onButtonClick}
                    className="inline-flex items-center justify-center gap-3 bg-[#2A4793] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1f356d] transition hover:scale-105 transform duration-300"
                >
                    {buttonLabel}
                </button>
            </div>
        </section>
    );
};
