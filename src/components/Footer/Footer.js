import React from "react";
import footerBackground from "../../assets/footer-background.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <img src={footerBackground} alt="..." />
      <div className="table-container">
        <table className="table-links" cellSpacing="0" cellPadding="0">
          <thead>
            <tr className="links-title">
              <th>המרפאות שלנו</th>
              <th>הרופאים שלנו</th>
              <th>בריאות השן</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>מרכז</td>
              <td>רפואת שיניים לילדים</td>
              <td>הנחיות לאחר טיפול</td>
            </tr>
            <tr>
              <td>צפון</td>
              <td>שיקום הפה</td>
              <td>שאלות ותשובות</td>
            </tr>
            <tr>
              <td>השרון</td>
              <td>טיפולי שורש</td>
              <td>טיפולים אסתטיים</td>
            </tr>
            <tr>
              <td>שפלה</td>
              <td>רפואת חניכיים</td>
              <td>טיפולים לילדים</td>
            </tr>
            <tr>
              <td>ירושלים</td>
              <td>יישור שיניים</td>
              <td>כירורגיית פה ולסת</td>
            </tr>
            <tr>
              <td>דרום</td>
              <td>כירורגיית פה ולסת</td>
              <td>בדיקה ותכנית טיפול</td>
            </tr>
            <tr>
              <td>מרפאות עזרה ראשונה</td>
              <td>רפואת הפה</td>
              <td>רפואה משמרת</td>
            </tr>
            <tr>
              <td>מכבידנט אסותא</td>
              <td>שינניות</td>
              <td>יישור שיניים</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>טיפול חניכיים</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>שתלים דנטליים</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>טיפולים בהרדמה מלאה</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>טפסים/מסמכים</td>
            </tr>
            <tr>
              <td className="more-categories">זכויות ועלויות</td>
              <td className="more-categories">אודות מכבידנט</td>
              <td>עלוני מידע</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="icons-container">
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="fas fa-map-marker-alt fa-stack-1x"  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">איתור מרפאה</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="fas fa-search fa-stack-1x"  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">חיפוש רופאים ומומחים</div>
            </div>
            
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="far fa-user fa-stack-1x "  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">אזור אישי</div>
            </div>
            
            
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="far fa-calendar-alt fa-stack-1x "  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">תיאום / ביטול תור</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="fas fa-phone-alt fa-stack-1x "  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">*6300</div>
            </div>
    
            <div className="grid-item">
            <span className="fa-stack" style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"#1a389c"}}></i>
              <i className="far fa-envelope fa-stack-1x" style={{color:"#1a389c"}}></i>
            </span>
              <div className="icon-link">צור קשר</div>
            </div>
          </div>
    </div>
  );
}
