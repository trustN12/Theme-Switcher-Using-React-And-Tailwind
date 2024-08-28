import React, { useState } from 'react';

export default function Card() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 4400); // Pop-up will disappear after 4.4 seconds
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-slate-900 dark:border-slate-950">
            <a href="/">
                <img
                    className="p-10"
                    src="https://camo.githubusercontent.com/0269a14e7cd538be31627954fcf6cd73f032ab406ad93b9f0340b738c26179a8/68747470733a2f2f63646e612e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3033352f3639332f3635362f6f726967696e616c2f6777796e6574682d62616c7563696f2d68656c6c6f2d776f726c642e6769663f31363135363432383737"
                    alt="product_image1"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        In My Code, Context Is King 
                        <br />
                        Props are Just Messengers !
                    </h5>
                </a>

                <div className="pt-12 pb-4">
                    <a
                        href="#!"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-800 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        onClick={handleClick}
                    >
                        Click Me
                    </a>
                </div>

                 {/* Flashing Pop-up with Robot Image */}
                {isPopupVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute top-0 left-0 right-0 flex justify-center">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cab4c932437055.5682ac94eecc6.gif"
                                alt="Robot"
                                className="w-full max-w-sm sm:max-w-full sm:h-auto opacity-100"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
