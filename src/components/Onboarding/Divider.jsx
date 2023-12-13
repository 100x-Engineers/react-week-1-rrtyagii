import React from 'react'; 

import PropTypes from 'prop-types';

export default function Divider({text, orientation = 'horizontal', color="bg-neutral-700"}) {
    const isHorizontal = orientation === 'horizontal';
    const orientationClass = isHorizontal ? 'flex-row' : 'flex-col'; 
    const orientationLayout = isHorizontal ? 'w-80 h-[0.0625rem]' : 'w-[0.0625rem] h-80'; 
    const baseClass = `flex text-neutral-50 items-center justify-center gap-1 self-stretch`

    return (
        <div className={`${baseClass} ${orientationClass} `}>
            <div className={`${orientationLayout} ${color}`}></div>
            {text && (
                <div className={`font-chirp font-normal leading-4 text-center mx-2 `}>
                    {text}
                </div>
            )}
            <div className={`${orientationLayout} ${color}`}></div>
        </div>
    );
};

Divider.propTypes = {
    text: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    color: PropTypes.string
};