import React from "react";
import { PicuterVisa } from "../../API/API";
import { Link } from "react-router-dom";
import Correct from "../../../Pictures/Correct.jpg";
import { Sales } from "../../API/API";
const Sale = () => {
  return (
    <div>
      <div className="parent-sale">
        <div className="container-sale">
          <div className="cards">{
            Sales?.map((e,index)=> <div className="card" key={index}>
            <h3>{e.title}</h3>
            <div className="sales">
            <h2>{e.copy}</h2>
            <h2><span>{e.salery}</span></h2>
            </div>
           <p>{e.description}</p>
            <h3 className="address">المميزات</h3>
            <h4>{e.Frist}<img src={Correct} alt="" /></h4>
            <h4>{e.Two}<img src={Correct} alt="" /></h4>
            <h4>{e.Three}<img src={Correct} alt="" /></h4>
            <h4>{e.Four}<img src={Correct} alt="" /></h4>
            <h4>{e.Five}<img src={Correct} alt="" /></h4>
            <h4>{e.Six}<img src={Correct} alt="" /></h4>
            <Link className="btn-42">{e.Buy}</Link>
            <div className="text">
              <h3>{e.spical}</h3>
            </div>
          </div>)
            }</div>
          <div className="social">
            <h3>من أجل أمانك، تتم معالجة جميع الطلبات عبر Stripe أو PayPal.</h3>
            <div className="dev-img">
              {PicuterVisa?.map((e, index) => (
                <Link>
                  <img key={index} src={e.image} alt="" />
                </Link>
              ))}
            </div>
            <p>يمكنك إلغاء اشتراكك في أي وقت.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
