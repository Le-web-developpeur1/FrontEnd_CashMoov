import React from 'react';
import type { SectionBannerProps } from '@/types';

export const SectionBanner: React.FC<SectionBannerProps> = ({
    title,
    description,
    bgColor = "bg-[#2A4793]",
}) => {
    return (
        <section className={`${bgColor} w-full py-12 px-6 md:px-16`}>
            <div className="max-w4xl mx-auto text-center md:text-left lg:text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 leading-tight">
                    {title}
                </h2>

                <p className="text-white text-base md:text-lg opacity-90">
                    {description}
                </p>
            </div>
        </section>
    );
};
