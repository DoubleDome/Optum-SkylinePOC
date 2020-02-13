import React from 'react';
import Slider from './Slider';

const ORDER_MARKS = [
  {
    value: 0,
    label: 'Order',
  },
  {
    value: 33,
    label: 'Process',
  },
  {
    value: 66,
    label: 'Ship',
  },
  {
    value: 100,
    label: 'Deliver',
  },
];

function OrderListStyles() {
  return (
    <style jsx>{`
      .orderList {
        margin-top: 50px;
        position: relative;
      }
      .orderList ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
        overflow: auto;
      }
      .orderList li img {
        height: 70px;
        margin-right: 15px;
      }
      .orderList > button {
        margin: 0 auto 0 auto;
        display: block;
      }
      .order-details-list-item {
        height: 110px;
        margin-bottom: 25px;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      .order-details-list-item-wrapper {
        width: calc(40% - 10px);
        display: flex;
        align-items: center;
        min-width: 300px;
      }
      .viewOrdersButton {
        display: block;
        margin-top: 40px;
        
      }
      .order-details-wrapper{
        display: flex;
        flex-direction: column;
      }
      .order-date{
        font-size: 18px;
      }

      .order-details-list-slider{
        width: calc(50% - 10px);
      }
    
    `}</style>
  );
}

function OrderItem(props) {
  return (
    <li className="card order-details-list-item">
      <div className="order-details-list-item-wrapper">
        <img src={require(`../assets/images/${props.data.type}-icon.png`)}></img>
        <div className="order-details-wrapper">
          <p className="order-date">{props.data.estimatedDeliveryDate}</p>
          <p>
            {props.labels.estimatedLabel}
            {props.data.medication}
          </p>
          <a href="#">{props.labels.detailsLabel}</a>
        </div>
      </div>
      <div className="order-details-list-slider">
        <Slider status={props.data.status} orderStatus={props.data.orderStatus} marks={ORDER_MARKS}></Slider>
      </div>
    </li>
  );
}

function OrderList(props) {
  const orderItems = [];

  props.data.orders.map((order, index) => {
    orderItems.push(<OrderItem key={index} labels={props.labels} data={order}></OrderItem>);
  });

  return (
    <React.Fragment>
      <OrderListStyles></OrderListStyles>
      <section className="orderList">
        <h2>{props.labels.sectionTitle}</h2>
        <ul className="orderList">{orderItems}</ul>
        <button className="viewOrdersButton knockout">{props.labels.viewOrdersLabel}</button>
      </section>
    </React.Fragment>
  );
}

export default OrderList;
