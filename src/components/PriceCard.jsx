import React from "react";
import "./pricecard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
function PriceCard ({data}){
    
    return (
        <>
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.currency}{data.price}<span className="period">{data.period}</span></h6>
            <hr/>
            <ul className="fa-ul">
                {
                   data.features.map((e,i)=>(
                       <li className={!e.isEnable ? "text-muted" :""} key={i}>
                       <span className="fa-li">
                       {e.isEnable ? <FontAwesomeIcon icon={ faCheck}/>:<FontAwesomeIcon icon={faTimes} /> }
                       </span>
                       {e.title}
                       </li>
                    ))
                }
            </ul>
            <div className="d-grid">
              <a href="fontawesome.in" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      </>
    
    )
    
}

export default PriceCard;