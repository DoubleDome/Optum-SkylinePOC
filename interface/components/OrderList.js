import React from 'react';

function OrderListStyles() {
  return (
    <style jsx>{`
      .orderList ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
      }
      .orderList li {
        display: block;
        height: 160px;
      }
      .orderList > button {
        margin: 0 auto 0 auto;
        display: block;
      }
    `}</style>
  );
}

function OrderItem(props) {
  return (
    <li>
      <img src={props.data.type}></img>
      <p>{props.data.estimatedDeliveryDate}</p>
      <p>
        {props.labels.estimatedLabel}
        {props.data.medication}
      </p>
      <a href="#">{props.labels.detailsLabel}</a>
      <div>{props.data.orderStatus}</div>
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
      <section className="orderList">
        <OrderListStyles></OrderListStyles>
        <h1>{props.title}</h1>
        <ul className="orderList">{orderItems}</ul>
        <button className="viewOrdersButton knockout">{props.labels.viewOrdersLabel}</button>
      </section>
    </React.Fragment>
  );
}

export default OrderList;
