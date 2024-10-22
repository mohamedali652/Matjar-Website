import React from "react";
import Done from "../../../Pictures/Done.jpg";
import Phone from "../../../Pictures/NothingPhone 1.png";
import { APIServiess } from "../../API/API";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <div className="parent-services">
        <div className="container-services">
          <div className="card">
            <h1>خـــدمــاتــنــــا</h1>
            <h4>
              اكتشف كيف يمكن لخدماتنا أن تحول رؤيتك إلى واقع ملموس من خلال تصميم
              وتطوير متاجر إلكترونية مخصصة بأعلى مستويات الاحترافية. نحن نقدم
              حلولاً شاملة تبدأ من التصميم الجذاب وتطوير المتجر إلى الدعم الفني
              المستمر والتسويق الرقمي الاستراتيجي
            </h4>
            <div className="info">
              <div className="animation"></div>
              <div className="animation1"></div>
              <div className="cards">
                {APIServiess?.map((e, index) => (
                  <div className="small-card" key={index}>
                    <div className="text">
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                    </div>
                    <img src={Done} alt="Error-Picture-Page-Services" />
                  </div>
                ))}
              </div>
              <Link className="btn-42">مزيد من التفاصيل</Link>
            </div>
          </div>
          {/* Here for 2nd Section */}
          <div className="card">
            <div className="tabel-card">
              <h1>أرنا ما لديك من أفكار </h1>
              <p>
                في متجري ، نحرص على تقديم أفضل تجربة لعملائنا من خلال خدمات
                تأجير المتاجر الإلكترونية. نحن هنا لدعمك والإجابة على أي
                استفسارات قد تكون لديك حول خدماتنا أو لتقديم المساعدة في اختيار
                الحل المثالي لاحتياجاتك التجارية بضغطة واحدة على الزر أدناه،
                يمكنك إرسال رسالتك إلينا بسرعة وسهولة. نحن نقدر كل فكرة وملاحظة
                تأتي من عملائنا، ونشجعك على إظهار إبداعك في رسالتك. سواء كنت
                تحتاج إلى مساعدة في اختيار المتجر المناسب، أو لديك اقتراحات
                لتحسين خدماتنا، نحن هنا للاستماع ومساعدتك. تواصل معنا اليوم
                ودعنا نساعدك في تحقيق أهدافك التجارية مع خدمات تأجير المتاجر
                الإلكترونية المتكاملة لدينا!
              </p>
            </div>
            <div className="tabel-card">
                <img src={Phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
