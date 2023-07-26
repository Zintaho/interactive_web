export const randomNumBetween = (min, max) => {
    return Math.random() * (max-min) + min;
}

export const hypotenuse = (x,y) => {
    return Math.sqrt(x*x + y*y);
}