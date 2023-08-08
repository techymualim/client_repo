'use client'

/* eslint-disable @next/next/no-img-element */
const starImage1 = '/assets/images/star.svg';
const starImage2 = '/assets/images/star2.svg';
const starImage3 = '/assets/images/star3.svg';
import useTotalScrollableHeight from "@/hooks/useTotalScrollableHeight";
import { useEffect } from 'react';

const Stars = ({quantity}:{quantity?: number}) => {
    const numberOfStars = quantity ? quantity : 30;
    const totalScrollableHeight = useTotalScrollableHeight();
    useEffect(()=> {

    }, [totalScrollableHeight])
    const stars = Array.from({ length: numberOfStars }).map((_, index) => {
        const randomSize = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
        const randomStarImage = [starImage1, starImage2, starImage3][Math.floor(Math.random() * 3)];

        const sizeMultiplier = randomStarImage === starImage1 ? 4 : 1;
        const randomDelay = Math.random() * 5;

        const positionRatio = index / numberOfStars; 
        const calculatedTop = `calc(${positionRatio * totalScrollableHeight}px - ${randomSize * sizeMultiplier}px)`;

        return (
            <img
                key={index}
                src={randomStarImage}
                className='absolute -z-2 star'
                style={{
                    top: calculatedTop,
                    left: `${Math.random() * 100}vw`,
                    width: `${randomSize * sizeMultiplier}px`,
                    height: `${randomSize * sizeMultiplier}px`,
                    animation: `float ${Math.random() * 10 + 5}s ease-in-out ${randomDelay}s infinite`,
                }}
                alt="Star"
            />
        );
    });
    return stars;
}



export default Stars;