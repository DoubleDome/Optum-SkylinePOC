import React from 'react';
import MedicationCard from './MedicationCard';

function ActiveMedicationListStyles() {
  return (
    <style jsx>{`
      .activeMedicationList {
        height: 350px;
      }
      .activeMedicationList ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
        height: 250px;
      }
      .activeMedicationList li {
        float: left;
        display: inline-block;
        width: 270px;
        height: 250px;
        border: 1px solid #ebebeb;
        margin: 0 10px 0 0;
        padding: 10px;
      }
      .activeMedicationList li:last-child {
        margin: 0 0 0 0;
      }
      .activeMedicationList > button {
        margin: 10px auto 10px auto;
      }
      .activeMedicationList > .centered-button {
        display: block;
        margin-top: 40px;
      }
    `}</style>
  );
}

function ActiveMedicationList(props) {
  let items = [];
  props.data[0].medications.map((medication, index) => {
    items.push(<MedicationCard key={index} labels={props.labels} data={medication}></MedicationCard>);
  });
  return (
    <React.Fragment>
      <ActiveMedicationListStyles></ActiveMedicationListStyles>
      <section class="activeMedicationList contentContainer">
        <button className="solid">{props.labels.fillAllMedicationsLabel}</button>
        <ul>{items}</ul>
      </section>
    </React.Fragment>
  );
}

export default ActiveMedicationList;
