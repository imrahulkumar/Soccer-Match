import React from 'react';
import { CityLogo } from '../Ui/icons'
const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    link={true}
                    linkTo="/"
                    width="70px"
                    height="70px" />
            </div>
            <div className="footer_discl">
            Dwarka city 2019. All rights reserved.
                </div>
        </footer>
    );
};

export default Footer;