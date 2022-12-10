import { useState, useEffect, RefObject } from "react";
import bg_one from "../assets/bg_one.jpg";
import bg_two from "../assets/bg_two.jpg";
import bg_three from "../assets/bg_three.jpg";
import bg_four from "../assets/bg_four.jpg";

export const useOnLoadBackgroundImages = (ref: RefObject<HTMLElement>) => {
    const [status, setStatus] = useState(false);

    useEffect(() => {

        if (!ref?.current) return;

        const selectedDivs = Array.from(ref.current.querySelectorAll("div.bg_image"));

        if (selectedDivs.length === 0) {
            setStatus(true);
            return;
        }

        const imageUrl = [
            bg_one,
            bg_two,
            bg_three,
            bg_four
        ];


        let num = 0;

        let preloaderImg: any = document.createElement("img");
        selectedDivs.forEach((div: any) => {
            preloaderImg.src = imageUrl[num];


            preloaderImg.addEventListener('load', () => {
                div.style.backgroundImage = `url(${imageUrl[num]})`;
                (num == (selectedDivs.length - 1)) && setStatus(true)
                preloaderImg = null;
                num++

            });
        })

        return;
    }, [ref]);

    return status;
};
