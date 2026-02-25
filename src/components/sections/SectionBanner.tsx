import React from 'react';
import type { SectionBannerProps } from '@/types';

export const SectionBanner: React.FC<SectionBannerProps> = ({
    title,
    bgColor = "bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793]",
}) => {
    return (
        <section className={`${bgColor} w-full py-10 sm:py-12 px-4 sm:px-6 md:px-12 md:py-20`}>
            <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 leading-tight">
                    {title}
                </h2>
            </div>
        </section>
    );
};
