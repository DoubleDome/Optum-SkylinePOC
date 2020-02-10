import React from 'react';
import Slider from './Slider';

function OrderListStyles() {
  return (
    <style jsx>{`
      .orderList {
        margin-top: 50px;
      }
      .orderList ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
      }
      .orderList li {
        display: block;
        height: 110px;
        border: 1px solid #ebebeb;
        margin-bottom: 10px;
        padding: 15px;
        font-size: 0.8em;
      }
      .orderList li img {
        float: left;
        height: 70px;
        margin-right: 15px;
        margin-top: 20px;
      }
      .orderList > button {
        margin: 0 auto 0 auto;
        display: block;
      }
      .orderDetailsContainer {
        width: 300px;
        display: inline-block;
        float: left;
      }
      .viewOrdersButton {
        display: block;
        margin-top: 40px;
      }
    `}</style>
  );
}

function OrderItem(props) {
  return (
    <li>
      <div className="orderDetailsContainer">
        <img src={require(`../assets/images/${props.data.type}-icon.png`)}></img>
        <p>{props.data.estimatedDeliveryDate}</p>
        <p>
          {props.labels.estimatedLabel}
          {props.data.medication}
        </p>
        <a href="#">{props.labels.detailsLabel}</a>
      </div>
      <Slider orderStatus={props.data.orderStatus}></Slider>
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
        <h1>{props.labels.sectionTitle}</h1>
        <ul className="orderList">{orderItems}</ul>
        <button className="viewOrdersButton knockout">{props.labels.viewOrdersLabel}</button>
      </section>
    </React.Fragment>
  );
}

export default OrderList;
