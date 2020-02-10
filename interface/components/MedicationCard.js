import React from 'react';

function MedicationCardStyles(props) {
  return (
    <style jsx>
      {`
        .medicationCard {
          font-size: 0.8em;
          height: 320px;
        }
        .medicationCard img {
          width: 80px;
          margin: 0 auto;
          display: block;
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
      <li className="medicationCard">
        <p>
          {props.data.refillCount} {props.labels.refillsRemainingLabel}
        </p>
        <img src={require('../assets/images/pills-icon.png')}></img>
        <p>
          {props.data.savingsAmount} {props.labels.homeDeliverySavingsLabel}
        </p>
        <p>{props.data.medication}</p>
        <p>{props.data.dosage}</p>
        <p>
          {props.data.price} / {props.data.supplyAmount} {props.labels.supplyLabel}
        </p>
        <RefillArea labels={props.labels} data={props.data}></RefillArea>
        <button>{props.labels.archiveLabel}</button>
      </li>
    </React.Fragment>
  );
}

function RefillArea(props) {
  let result = {};
  if (props.data.autoRefill) {
    result = <p>{props.data.refillDate}</p>;
  } else {
    result = <button>{props.labels.readyForRefillLabel}</button>;
  }
  return result;
}

export default MedicationCard;
