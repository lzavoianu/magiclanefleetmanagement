import { Address } from './entities';
import { Order } from './entities';
import { Customer } from './entities';

// Generate customers with defaults and overrides
export const AddOrders: Order[] = [
  new Order(
        undefined, // id
        1838721, // customerId
        undefined,
        undefined, // creationTimestamp
        undefined, // customerInfo
        [48.870852, 2.356148], // location
        `Magic Order`, // alias
        `Magic`, // firstName
        `Order`, // lastName
        new Address(), // address
        `+1202555018`, // phoneNumber
        undefined, // customData
        0, // type
        undefined, // status
        undefined, // state
        undefined, // priority
        3, // numberOfPackages
        5.1, // weight
        2.5, // cube
        12, // revenue
       [420, 1086], // timeWindow
        undefined,// serviceTime
        undefined // depotId
    ),
    new Order(
      undefined, // id
      1838722, // customerId
      undefined,
      undefined, // creationTimestamp
      undefined, // customerInfo
      [48.827865, 2.379216], // location
      `Magic Order2`, // alias
      `Magic2`, // firstName
      `Order2`, // lastName
      new Address(), // address
      `+1202555019`, // phoneNumber
      undefined, // customData
      0, // type
      undefined, // status
      undefined, // state
      undefined, // priority
      2, // numberOfPackages
      4.5, // weight
      1.1, // cube
      16, // revenue
      [420, 1086], // timeWindow
      undefined,// serviceTime
      undefined // depotId
  )

]

export const GetCustomers : Customer[] = [
      new Customer(
          1838721, // id
          `Magic Customer`, // alias
          `Magic`, // firstName (can override default alias)
          `Customer`, // lastName
          new Address(), // Override only city and postalCode
          `magiccustomer@example.com`, // email
          `+1202555018`, // phoneNumber
          [48.870852, 2.356148] // location
      ),
      new Customer(
          1838722, // id
          `Magic Customer2`, // alias
          `Magic`, // firstName (can override default alias)
          `Customer2`, // lastName
          new Address(), // Override only city and postalCode
          `magiccustomer2@example.com`, // email
          `+1202555018`, // phoneNumber
          [48.870852, 2.356148] // location
      ),
  ];

export const GetOrders: any = {
orders: [
  new Order(
    879887, // id
    undefined, // customerId
    undefined,  //email
    Date.now(), // creationTimestamp
    GetCustomers[0], // customerInfo
    [48.870852, 2.356148], // location
    `Magic Order`, // alias
    `Magic`, // firstName
    `Order`, // lastName
    new Address(), // address
    `+1202555018`, // phoneNumber
    undefined, // customData
    0, // type
    undefined, // status
    undefined, // state
    undefined, // priority
    3, // numberOfPackages
    5.1, // weight
    2.5, // cube
    12, // revenue
   [420, 1086], // timeWindow
    undefined,// serviceTime
    undefined // depotId
  ),
  new Order(
         879888, // id
         undefined, // customerId
         undefined,  //email
         Date.now(), // creationTimestamp
         GetCustomers[1], // customerInfo
         [48.827865, 2.379216], // location
         `Magic Order2`, // alias
         `Magic2`, // firstName
         `Order2`, // lastName
         new Address(), // address
         `+1202555019`, // phoneNumber
         undefined, // customData
         0, // type
         undefined, // status
         undefined, // state
         undefined, // priority
         2, // numberOfPackages
         4.5, // weight
         1.1, // cube
         16, // revenue
         [420, 1086], // timeWindow
         undefined,// serviceTime
         undefined // depotId
     ),
]
}

export const GetOrder : Order  = GetOrders.orders[0];