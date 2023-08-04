/* eslint-disable @next/next/no-img-element */
const starImage1 = '/assets/images/star.svg';
const starImage2 = '/assets/images/star2.svg';
const starImage3 = '/assets/images/star3.svg';

const numberOfStars = 30;
const stars = Array.from({ length: numberOfStars }).map((_, index) => {
    const randomSize = Math.floor(Math.random() * (15 - 5 + 1)) + 10;
    const randomStarImage = [starImage1, starImage2, starImage3][Math.floor(Math.random() * 3)];

    const sizeMultiplier = randomStarImage === starImage1 ? 4 : 1;
    const randomDelay = Math.random() * 5;

    return (
        <img
            key={index}
            src={randomStarImage}
            className='absolute -z-2 star'
            style={{
                top: `${Math.random() * 700}%`,
                left: `${Math.random() * 100}vw`,
                width: `${randomSize * sizeMultiplier}px`,
                height: `${randomSize * sizeMultiplier}px`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out ${randomDelay}s infinite`,
            }}
            alt="Star"
        />
    );
});

export default stars;