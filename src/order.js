
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
}

// listItems
  function listItems(orderLog) {
    newArray = [];
    for (var i = 0; i < orderLog.length; i++) {
      newArray.push(orderLog[i].item)
      }
      return newArray.join(', ')
    }

// searchOrder
// 2 goals:
// 1. does the order.item I am testing exactly match my test value? If yes, return true. If no, continue!
// 2. does my test value exist among ANY known order.items in deliverOrders? If yes, return true, else return false.

function searchOrder(deliveryOrders, testValue){
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === testValue) {
  return true
    }
  } 
  return false 
};





// function searchOrder(deliveryOrders, testValue){
//   var ret = false;
//   // step 1
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].item === testValue) {
//      var ret = true;
//       // step 2
//     } else {
//       for (var y = 0; y < deliveryOrders.length; y++) {
//         if (deliveryOrders[y].item === testValue) {
//           ret = true;
//         }
//     }
//   }
//   return ret;
// }

// function searchOrder(item, deliveryOrders){
//   for (var i = 0; i < deliveryOrders.length; i++){
// if(deliveryOrders[i].item === item){
// } return 
//     }
//   };


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}