import React from 'react';
import Monitor from "../../Pictures/MonitorXDR.jpg"
import { Link } from 'react-router-dom';
import Shopping from './Shopping/Shopping';
import Sale from './Sale/Sale';
import Services from './Services/Services';
import News from './LatestNews/News';
import Products from './Products/Products';
const Home = () => {
    return (
        <div>
            <div className="parent-home">
                <div className="container-home">
                    <div className="card">
                        <img src={Monitor} alt="Picture-Monitor-Home" />
                    </div>
                    <div className="card">
                        <h4 className='animate__animated animate__slow animate__bounce animate__zoomInDown'>إبدء معنا بتنفيذ</h4>
                        <h2 className='animate__animated animate__bounce animate__slower animate__zoomInLeft'>متجرك الإلكتروني </h2>
                        <h2 className='animate__animated animate__bounce animate__slower animate__zoomInRight'><span>الإحــــــتـرافـــــي</span></h2>
                        <Link className='btn41-43 btn-41' to="/">أطلب متجرك الآن</Link>
                    </div>
                </div>
            </div>
            <Shopping/>
            <Sale/>
            <Services/>
            <News/>
            <Products/>
        </div>
    );
}

export default Home;
