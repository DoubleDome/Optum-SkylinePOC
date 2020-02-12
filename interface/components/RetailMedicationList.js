import React from 'react';
import MedicationCard from './MedicationCard';

function RetailMedicationListStyles() {
  return (
    <style jsx>{`
      .retailMedicationList {
        margin-top: 50px;
      }
      .retailMedicationList ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
        overflow: auto;
      }
      .retailMedicationList li {
        float: left;
        display: inline-block;
        width: 270px;
        border: 1px solid #ebebeb;
        margin: 0 10px 0 0;
        padding: 10px;
      }
      .retailMedicationList li:last-child {
        margin: 0 0 0 0;
      }

      .retailMedicationList > button {
        margin-bottom: 25px;
      }
      .retailMedicationList > .centered-button {
        display: block;
        margin-top: 40px;
        margin: 40px auto 0;
      }
    `}</style>
  );
}

function RetailMedicationList(props) {
  let items = [];
  props.data[0].medications.map((medication, index) => {
    items.push(<MedicationCard key={index} labels={props.labels} data={medication}></MedicationCard>);
  });
  return (
    <React.Fragment>
      <RetailMedicationListStyles></RetailMedicationListStyles>
      <section className="retailMedicationList">
        <h2>{props.labels.sectionTitle}</h2>
        <button className="solid">{props.labels.refilllAllMedsLabel}</button>
        <ul>{items}</ul>
        <button className="knockout centered-button">{props.labels.viewAllMedsLabel}</button>
      </section>
    </React.Fragment>
  );
}

export default RetailMedicationList;
