import React from 'react';
import Shoppings from "../../../Pictures/Shopping.jpg"
import { Link } from 'react-router-dom';
const Shopping = () => {
    return (
        <div>
            <div className="parent-shopping">
                <div className="container-shopping">
                    <div className="card">
                        <img src={Shoppings} alt="Error-Picture-Shopping" />
                    </div>
                    <div className="card">
                        <h3>حقق حلمك بمتجر مثالي في الموقع الأمثل!</h3>
                        <p>استأجر المساحة التجارية التي تلبي طموحاتك بكل سهولة. نوفر لك مواقع متميزة وخيارات تأجير مرنة تناسب احتياجاتك، مع دعم مستمر لضمان نجاح متجرك من اليوم الأول.</p>
                        <Link to="">أطلب متجرك الآن</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopping;
