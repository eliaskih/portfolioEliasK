import React from "react";
import { Eye } from "react-feather";
import { GitHub } from "react-feather";

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel=""
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:scale-105 hover:transition-all .2 ease-in-out"
        >
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold flex gap-2 ">
                    {title} <Eye /> <GitHub />
                </h3>

                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {stack.map((item) => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    );
}

export default PortfolioItem;
