import React from "react";
import "./Header.scss";
import headerbackground1 from "../../assets/header-background-1.png";
import headerbackground2 from "../../assets/header-background-2.png";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="leftnavbar">
          <img
            className="header-background"
            src={headerbackground1}
            alt="..."
          />
          <img
            className="header-background-behind"
            src={headerbackground2}
            alt="..."
          />
          <div className="icons-container">
            <div className="grid-item">
            <span className="fa-stack "  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="fa fa-circle fa-stack-2x" style={{color:"white"}}></i>
              <i className="fa fa-wheelchair fa-stack-1x fa-inverse"  style={{color:"#1a389c"}}></i>
            </span> 
              <div className="icon-link">נגישות</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack" style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"white"}}></i>
              <i className="far fa-envelope fa-stack-1x" style={{color:"white"}}></i>
            </span>
              <div className="icon-link">צור קשר</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"white"}}></i>
              <i className="far fa-user fa-stack-1x "  style={{color:"white"}}></i>
            </span> 
              <div className="icon-link">אזור אישי</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"white"}}></i>
              <i className="far fa-calendar-alt fa-stack-1x "  style={{color:"white"}}></i>
            </span> 
              <div className="icon-link">תיאום / ביטול תור</div>
            </div>
            <div className="grid-item">
            <span className="fa-stack"  style={{verticalAlign: 'top',fontSize:'1.5em'}}>
              <i className="far fa-circle fa-stack-2x" style={{color:"white"}}></i>
              <i className="fas fa-phone-alt fa-stack-1x "  style={{color:"white"}}></i>
            </span> 
              <div className="icon-link">*6300</div>
            </div>
          </div>
        </div>
        <div className="rightnavbar">
            <img className="logo" src={logo} alt="..."/>
            <div className="navbar-container">
            <div className="grid-item">
              <div className="nav-link">המרפאות שלנו</div>
            </div>
            <div className="grid-item">
              <div className="nav-link">הרופאים שלנו</div>
            </div>
            <div className="grid-item">
              <div className="nav-link">בריאות השן</div>
            </div>
            <div className="grid-item">
              <div className="nav-link">זכויות ועלויות</div>
            </div>
            <div className="grid-item">
              <div className="nav-link">אודות מכבידנט</div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
