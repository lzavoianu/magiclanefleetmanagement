import { Address } from './entities';
import { Customer } from './entities';

const defaultAddress: Address = new Address(
 `France`,
`Île-de-France`,
`Paris`,
`Paris`,
`75010`,
`Rue Gustave Goublier`,
`2`,
``
) 
// Generate customers with defaults and overrides
export const AddCustomers: Customer[] = [
     new Customer(
        undefined, // id
        `Magic Customer`, // alias
        `Magic`, // firstName (can override default alias)
        `Customer`, // lastName
        defaultAddress, // Override only city and postalCode
        `magiccustomer@example.com`, // email
        `+1202555018`, // phoneNumber
        [48.870852, 2.356148] // location
    ),
    new Customer(
        undefined, // id
        `Magic Customer 2`, // alias
        `Magic`, // firstName (can override default alias)
        `Customer 2`, // lastName
        new Address(), // Override only city and postalCode
        `magiccustomer2@example.com`, // email
        `+1202555018`, // phoneNumber
        [48.870852, 2.356148], // location
        `communicationPreference: email` // customData
    ),
]


export const GetCustomers : any = {
    customers: [
        new Customer(
            1838721, // id
            `Magic Customer`, // alias
            `Magic`, // firstName (can override default alias)
            `Customer`, // lastName
            defaultAddress, // Override only city and postalCode
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
            [48.870852, 2.356148], // location
            `communicationPreference: email` // customData
        ),
    ],
};

export const GetCustomer: Customer = GetCustomers.customers[0];   

// // Configuration parameters
// const configurationParameters = {
//     name: "Optimization 50 vehicles in Berlin",
//     ignoreTimeWindow: true,
//     allowDroppingOrders: false,
//     groupingOrders: false,
//     balancedRoutes:0,
//     optimizationCriterion: 1,
//     arrangeCriterion: 0,
//     optimizationQuality: 0,
//     maxTimeToOptimize: 600,
//     maxWaitTime: 600,
//     routeType: 0,
//     restrictions: 0,
//     distanceUnit: 0,
//     orderSequenceOptions: [
//         {
//             sequenceOptions: 0,
//             ordersSequence: [
//                 [123456, 234567, 345678, 456789],
//                 [712345, 612345, 102345, 912345]
//             ]
//         }
//     ]
// };

// // Departure
// const departure = {
//     depotId: 123456,
//     alias: "Ana",
//     address: { ...address },
//     location: location.location,
//     matchedLocation: location.location,
//     numberOfPackages: 10,
//     weight: 5.5,
//     cube: 5.5,
//     departureTime: 1602684618476,
//     timeToNext: 5000,
//     distanceToNext: 99.5
// };

// // Destination
// const destination = {
//     alias: "Ana",
//     address: { ...address },
//     location: location.location,
//     matchedLocation: location.location,
//     arrivalTime: 1602684618476,
//     traveledDistance: 99.5
// };

// // Vehicle constraints
// const vehicleConstraints = {
//     fuelPrice: 1.5,
//     startDate: 1730332800000,
//     endDate: 1730332800000,
//     maxNumberOfPackages: 9999,
//     minNumberOfOrders: 0,
//     maxNumberOfOrders: 9999,
//     minDistance: 1.5,
//     maxDistance: 999.5,
//     maxRevenue: 999.5
// };

// // Base order
// const baseOrder = {
//     id: 123456,
//     creationTimestamp: 1689942672,
//     customer: { ...baseCustomer },
//     location: location.location,
//     alias: "Ana",
//     firstName: "Ana",
//     lastName: "Lyn",
//     address: { ...address },
//     phoneNumber: "+1234567",
//     customData: "\"middle name, Maria; age,23\" or \"middle name,ana; age,18\" or \"this customer is a regular\"\n",
//     type: 0,
//     status: 0,
//     state: 0,
//     priority: 0,
//     numberOfPackages: 10,
//     weight: 5.5,
//     cube: 5.5,
//     timeWindow: [
//         1689942672123,
//         1789923664123
//     ],
//     serviceTime: 400,
//     revenue: 5.5,
//     depotId: 123456
// };

// // Optimizations and routes
// export const OrderHistory = {
//     history: [
//         {
//             order: { ...baseOrder },
//             optimizationsAndRoutes: [
//                 {
//                     optimization: {
//                         id: 10,
//                         configurationParameters: [ {...configurationParameters} ],
//                         orders: [ { ...baseOrder } ],
//                         departures: [ { ...departure } ],
//                         destinations: [ { ...destination } ],
//                         vehicles: [
//                             {
//                                 id: 123456,
//                                 type: 0,
//                                 status: 0,
//                                 name: "01_van",
//                                 lastPosition: location.location,
//                                 maxLoadWeight: 99.5,
//                                 maxLoadCube: 99.5,
//                                 startTime: 540,
//                                 endTime: 1000,
//                                 make: "Mercedes",
//                                 model: "Vito",
//                                 fuelType: 2,
//                                 consumption: 99.5,
//                                 licensePlate: "B01ABC",
//                                 bikerWeight: 99.5,
//                                 bikePower: 99.5,
//                                 height: 99.5,
//                                 width: 99.5,
//                                 weight: 99.5,
//                                 length: 99.5,
//                                 axleLoad: 99.5
//                             }
//                         ],
//                         vehiclesConstraints: [ { ...vehicleConstraints } ],
//                         creationTimestamp: 1689942672
//                     },
//                     routes: [
//                         {
//                             id: 123456,
//                             optimizationId: 123456,
//                             idVehicle: 123456,
//                             matrixBuiltType: 1,
//                             matrices: [
//                                 {
//                                     vehicleType: 0,
//                                     distMatrix: [
//                                         [1, 2, 3, 4],
//                                         [7, 6, 10, 9],
//                                         [6, 7, 4, 3],
//                                         [1, 2, 6, 4],
//                                     ],
//                                     timeMatrix: [
//                                         [1, 2, 3, 4],
//                                         [7, 6, 10, 9],
//                                         [6, 7, 4, 3],
//                                         [1, 2, 6, 4],
//                                     ]
//                                 }
//                             ],
//                             configurationParameters: { ...configurationParameters },
//                             departure: { ...departure },
//                             destination: { ...destination },
//                             vehicleConstraints:  { ...vehicleConstraints } ,
//                             orders: [
//                                 {
//                                     indexInRoute: 10,
//                                     indexInOptimization: 10,
//                                     orderInfo: { ...baseOrder },
//                                     matchedLocation: location.location,
//                                     arrivalTime: 10,
//                                     timeToNextOrder: 10,
//                                     waitTime: 10,
//                                     numberOfPackagesAtArrival: 10,
//                                     collectedNumberOfPackages: 10,
//                                     deliveredNumberOfPackages: 10,
//                                     weightAtArrival: 5.5,
//                                     collectedWeight: 5.5,
//                                     deliveredWeight: 5.5,
//                                     cubeAtArrival: 5.5,
//                                     collectedCube: 5.5,
//                                     deliveredCube: 5.5,
//                                     traveledDistance: 5.5,
//                                     distanceToNextOrder: 5.5,
//                                     revenueAtArrival: 5.5,
//                                     isVisited: 10,
//                                     visitTimestamp: 10
//                                 }
//                             ],
//                             totalDistance: 250.5,
//                             totalTime: 25000,
//                             totalServiceTime: 6000,
//                             totalWaitTime: 500,
//                             neededFuel: 250.5,
//                             price: 430.5,
//                             shape: "string",
//                             creationTimestamp: 1602684618476
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// };