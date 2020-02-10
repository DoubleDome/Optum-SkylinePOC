import React from 'react';

function MedicationCard(props) {
  return (
    <li>
      <p>
        {props.data.refillCount} {props.labels.refillsRemainingLabel}
      </p>
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
  );
}

function RefillArea(props) {
  let result = {};
  if (props.data.autoRefill) {
    result = <p>{props.data.refillDate}</p>;
  } else {
    result = <button>{props.labels.readyForRefillLabel}</button>
  }
  return result;
}

export default MedicationCard;
