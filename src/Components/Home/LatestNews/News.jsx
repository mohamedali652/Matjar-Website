import React from "react";
import framer from "../../../Pictures/Framer.jpg";
import { LatestNews } from "../../API/API";
import labtop from "../../../Pictures/labtop.png";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div>
      <div className="parent-news">
        <h1>آخر الأخبار</h1>
        <div className="container-news">
          {LatestNews?.map((e, index) => (
            <div className="card" key={index}>
              <div className="img">
                <img src={framer} alt="Error-Picture" />
                <div className="data">
                  <p>{e.data}</p>
                </div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Here for 2nd Section to Desgin Control Side */}
      <div className="parent-control">
        <div className="container-control">
          <div className="card">
            <h3>
              <span>تقدم خدماتنا</span>
            </h3>
            <h3>لتوفــير أفــضــل </h3>
            <p>تقدم خدماتنا لتوفير أفضل خدمات لمتجرك </p>
            <Link>أطلب متجرك الآن</Link>
          </div>
          <div className="card">
            <img src={labtop} alt="" />
          </div>
          <div className="card">
            <h3>
              <span>لوحات التحكم</span> المتكاملة رؤيتك الشاملة لكل تفاصيل
              مشروعك في مكان واحد إدارة أسهل، قرارات أذكى، ونجاح مضمون
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
