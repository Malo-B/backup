import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import "./featuredInfo.css"

export default function FeaturedInfo({info1, unite1, description1, info2,unite2, description2,info3,unite3, description3,info4,unite4, description4}) {
  return (
<div className="test">
<h3 className='featuredTitle'>Paramètres principaux en temps réel :</h3>
  <div className='featured'>
      <div className="featuredItem">
          <span className="featureTitle">{description1}</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">{info1}</span>
                <span className="featuredMoneyRate">{unite1}</span>
          </div>
          <span className="featuredSub">Donnée en temps réel</span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">{description2}</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">{info2}</span>
                <span className="featuredMoneyRate">{unite2}</span>
          </div>
          <span className="featuredSub">Donnée en temps réel </span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">{description3}</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">{info3}</span>
                <span className="featuredMoneyRate">{unite3}</span>
          </div>
          <span className="featuredSub">Donnée en temps réel</span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">{description4}</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">{info4}</span>
                <span className="featuredMoneyRate">{unite4}</span>
          </div>
          <span className="featuredSub">Donnée en temps réel</span>
      </div>
  </div>
  </div>
  )
}
