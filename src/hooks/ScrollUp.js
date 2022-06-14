import React, {useState, useEffect} from 'react'
import {FaAngleUp} from 'react-icons/fa'

import '../styles/scrollup.scss'

export const ScrollUp = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style animate__animated animate__pulse animate__infinite"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    )
}