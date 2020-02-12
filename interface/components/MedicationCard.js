import React from 'react';

function MedicationCardStyles(props) {
  return (
    <style jsx>
      {`
        .medicationCard {
          font-size: 0.8em;
          margin: 0 10px 0 0;
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
          padding: 20px;
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
        .medication-card-next-refill{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 13px;
        }
        .medication-card-refill-icon{
          width: 25px;
          margin-right: 5px;
        }
      `}
      >
    </style>
  );
}

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
          <RefillArea labels={props.labels} data={props.data}></RefillArea>
        </div>

        <div>
          <button >{props.labels.archiveLabel}</button>
        </div>
      </li>
    </React.Fragment>
  );
}

function RefillArea(props) {
  let result = {};
  if (props.data.autoRefill) {
    result = <p className="medication-card-next-refill">
      <img className="medication-card-refill-icon" src={require('../assets/svgs/refill.svg')}/>
    Your next refill will be on {props.data.refillDate}</p>;
  } else {
    result = <button className="solid medication-card-btn">{props.labels.readyForRefillLabel}</button>;
  }
  return result;
}

export default MedicationCard;
