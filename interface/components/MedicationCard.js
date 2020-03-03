import React from 'react';
import {FormControlLabel, Switch} from '@material-ui/core';

function MedicationCardStyles(props) {
  return (
    <style jsx>
      {`
        .medicationCard {
          font-size: 0.8em;
          margin: 0 5px 0 0;
        }
        .medication-card-icon {
          width: 80px;
          margin: 0 auto;
          display: block;
        }
        .medication-card-ribbon {
          padding: 10px;
          background-color: var(--teal-1);
          display: inline-block;
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
          margin-left: 20px;
          min-width: 100px;
          color: var(--teal-2);
        }
        .medication-card-body{
          padding: var(--card-padding-internal); 
          padding-bottom: 5px;
        }
        .medication-card-btn{
          width: 100%;
        }
        .medication-card-name{
          font-size: 18px;
          margin-bottom: 0;
        }
        .medication-card-dosage,
        .medication-card-amount{
          font-size: 10px;
        }
        .medication-card-amount{
          margin-left: 5px;
        }
        .medication-card-price{
          font-size: 18px;
        }

        .medication-card-savings{
          font-size: 13px;
          color: var(--orange);
        }
        .medication-card-next-refill-wrapper{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: var(--card-padding-internal);
          padding-right: var(--card-padding-internal);
          margin-bottom: 15px;
        }
        .medication-card-next-refill{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 12px;
        }
        .medication-card-refill-icon{
          width: 25px;
          margin-right: 5px;
        }
        .medication-card-footer{
          position: relative;
          border-top: 1px solid var(--grey-1);
          display: flex;
          justify-content: space-around;
          min-height: 40px;
        }
        .medication-card-footer--divided:after{
          content:'';
          border-left: 1px solid var(--grey-1);
          height: 100%;
          position: absolute;
          left:50%;
        }
      `}
      >
    </style>
  );
}

function toggleAutoRefill(){}

function MedicationCard(props) {
  return (
    <React.Fragment>
      <MedicationCardStyles></MedicationCardStyles>
      <li className="medicationCard card">
        <p className="medication-card-ribbon">
          {props.data.refillCount} {props.labels.refillsRemainingLabel}
        </p>
        <img className="medication-card-icon" src={require('../assets/images/pills-icon.png')}></img>
        <div className="medication-card-body">
         
          <p className="medication-card-name">{props.data.medication}</p>
          <p className="medication-card-dosage">{props.data.dosage}</p>
          <p>
            <span className="medication-card-price">
              {props.data.price}
            </span>
            <span className="medication-card-amount">
              / {props.data.supplyAmount} {props.labels.supplyLabel}
            </span>
          </p>
          <p className="medication-card-savings">
            ${props.data.savingsAmount} {props.labels.homeDeliverySavingsLabel}
          </p>
         
        </div>
        <RefillArea labels={props.labels} data={props.data} showAutoRefills={props.showAutoRefills}></RefillArea>
      </li>
    </React.Fragment>
  );
}

function RefillArea({data, labels, showAutoRefills}) {
  const {autoRefill, refillDate} = data;
  const {archiveLabel, readyForRefillLabel, transferLabel, homeDeliverySavingsLabel} = labels;

  if(showAutoRefills){
    return (
      <div className="medication-card-refill"> 
        <div className="medication-card-next-refill-wrapper">
          {
            autoRefill ? <p className="medication-card-next-refill">
              <img className="medication-card-refill-icon" src={require('../assets/svgs/refill.svg')}/>
               {homeDeliverySavingsLabel} {refillDate}
            </p> :
            <button className="solid medication-card-btn">{readyForRefillLabel}</button>
          }
        </div>

        <div className="medication-card-footer medication-card-footer--divided">
          <FormControlLabel control={<Switch color="primary" checked={autoRefill} onChange={toggleAutoRefill}/>}/>
          <button className="text">{archiveLabel}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="medication-card-refill"> 
      <div className="medication-card-next-refill-wrapper">
        <button className="solid medication-card-btn">{transferLabel}</button>
      </div>
      <div className="medication-card-footer">
        <button className="text">{archiveLabel}</button>
      </div>
    </div>
  )
}

export default MedicationCard;
