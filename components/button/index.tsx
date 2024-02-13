'use client'
import React, { ReactNode } from 'react';
import Image from 'next/image';
type ButtonProps = {
    children: string | ReactNode;
    bgImage?: string;
    onClick: () => void;
    className?: string;
    bgHeight? :number; 
    bgWidth? : number;
    childrenClassName?: string;

}

const Button = ({children, bgImage, onClick, className, bgHeight, bgWidth, childrenClassName}: ButtonProps) => {
    return (
        <button
        onClick={onClick}
        className={className? className:""}
        >
        {bgImage && bgHeight && bgWidth ? (
        <div>
        <Image 
            src = {bgImage}
            alt = "button background image"
            height = {bgHeight}
            width = {bgWidth}
            className=''
        />
        </div>) : null}
        <div className={` ${childrenClassName ? childrenClassName : ''}`}>
            {children}
        </div>
            
        </button>
    );
};

export default Button;
