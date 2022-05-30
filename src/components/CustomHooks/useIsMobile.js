import { useEffect, useState } from "react";

export default function UseIsMobile(){

    const [isMobile, setIsMobile] = useState(null);

    const calculateIsMobile = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    window.addEventListener("resize", calculateIsMobile);

    useEffect(() => {
        calculateIsMobile()
    }, []);

    return isMobile;
}