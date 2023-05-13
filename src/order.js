
// takeOrder
function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length < 3 ){
    deliveryOrders.push(order)
  }
  return deliveryOrders
};

// refundOrder
function refundOrder(order, deliveryOrders){
  // 1657 console.log(order)
  // console.log(deliveryOrders)

  for(var i = 0; i < deliveryOrders.length; i++){
  if(deliveryOrders[i].orderNumber === order){
    deliveryOrders.splice(i,1)
    }
  } 
};

// listItems
function listItems(orderLog){
  console.log(orderLog);
  // for(var i = 0; i < deliveryOrders.length; i ++){
  //   if(deliveryOrders[i].item === orderLog){
  //   return deliveryOrders.item;
  //   }
  //  }
};




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}

