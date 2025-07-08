import { Address } from './entities';
import { Customer } from './entities';
import { Order } from './entities';
import { Departure } from './entities';
import { Vehicle } from './entities';
import { VehicleConstraints } from './entities';
import { ConfigurationParameters } from './entities';
import { AddOptimization } from './entities';
import { GetOptimization } from './entities';
import { Request } from './entities';

const INT32_MAX: number = 99999999;

// Define the coordinates as an array of tuples
const coords: [number, number][] = [
    [48.870852, 2.356148],
    [48.827327, 2.342267],
    [48.880250, 2.299601],
    [48.845198, 2.402896],
    [48.897163, 2.292865],
    [48.900920, 2.400039],
    [48.860914, 2.310625],
    [48.827865, 2.379216],
    [48.887096, 2.283513],
    [48.896894, 2.321586],
    [48.870449, 2.342204],
    [48.895658, 2.344043]
    //[48.458357, -0.054451],
    //[45.049782, 2.475759],
    //[46.199373, 0.069986],
    //[47.602138, 2.330583],
    //[44.346051, 4.694878],
    //[44.464582, 2.455020],
    //[48.434460, 5.234103],
    //[49.161539, 0.500580],
    //[47.083900, 3.273493],
    //[46.851831, 5.941769],
    //[48.512232, 1.546783],
    //[48.332842, 3.125077]
];//

// Generate customers with defaults and overrides
export const AddCustomers: Customer[] = coords.map((location, index) => {
    return new Customer(
        undefined, // id
        `Customer ${index + 1}`, // alias
        `Customer${index + 1}`, // firstName (can override default alias)
        `Customer${index + 1}`, // lastName
        new Address(), // Override only city and postalCode
        `customer${index + 1}@example.com`, // email
        `+1202555018${index}`, // phoneNumber
        location // location
    );
});

const customersIds: number[] = [ 1791105, 1791104, 1791103, 1791102, 1791101, 1791100, 1791099, 1791098, 1791097, 1791096, 1791095, 1791094];
export const GetCustomers: Customer[] = coords.map((location, index) => {
    return new Customer(
        customersIds[index], // id
        `Customer ${index + 1}`, // alias
        `Customer${index + 1}`, // firstName (can override default alias)
        `Customer${index + 1}`, // lastName
        new Address(), // Override only city and postalCode
        `customer${index + 1}@example.com`, // email
        `+1202555018${index}`, // phoneNumber
        location // location
    );
});

const types: number[]= [0,0,0,1,0,1,0,1,1,0,0,0 ];
const numberOfPackages: number[]= [0,0,3,8,9,9,5,11,6,13,10,6 ];
const weights: number[]=[0, 0, 5.1, 15.4, 16.2, 16.5, 7.5, 12.1, 5.2, 6.3, 8, 4.8]
const cubes: number[]= [0, 0, 2.5, 5.8, 8.4, 9.7, 2.6, 4.6, 1.5, 7.5, 4.1, 11.5]
const revenues: number[]= [0, 0, 12, 2.7, 7.5, 10, 13.4, 14.7, 2.9, 8.1, 6.2, 2.3]
const timeWindows: [number, number][] = [[420, 1086], [420, 1086], [770, 1020], [753, 1036], [736, 1086], [786, 1053], [820, 1020], [753, 1086], [770, 1070], [836, 1053], [903, 1020], [870, 1020]];
const ordersIds: number[] = [879888, 879887, 879886, 879885, 879884, 879883, 879882, 879881, 879880, 879879, 879878, 879877]


// Generate customers with defaults and overrides
export const AddOrders: Order[] = types.map((type, index) => {
    const customer = GetCustomers[index];
    return new Order(
        undefined, // id
        customer.id, // customerId
        undefined,
        undefined, // creationTimestamp
        undefined, // customerInfo
        customer.location, // location
        customer.alias, // alias
        customer.firstName, // firstName
        customer.lastName, // lastName
        customer.address, // address
        customer.phoneNumber, // phoneNumber
        undefined, // customData
        type, // type
        undefined, // status
        undefined, // state
        undefined, // priority
        numberOfPackages[index], // numberOfPackages
        weights[index], // weight
        cubes[index], // cube
        revenues[index], // revenue
        timeWindows[index], // timeWindow
        undefined,// serviceTime
        undefined // depotId
    );
});

export const GetOrders: Order[] = types.map((type, index) => {
    const customer = GetCustomers[index];
    return new Order(
        ordersIds[index], // id
        undefined, // customerId
        undefined,  //email
        Date.now(), // creationTimestamp
        customer, // customerInfo
        customer.location, // location
        customer.alias, // alias
        customer.firstName, // firstName
        customer.lastName, // lastName
        customer.address, // address
        customer.phoneNumber, // phoneNumber
        undefined, // customData
        type, // type
        undefined, // status
        undefined, // state
        undefined, // priority
        numberOfPackages[index], // numberOfPackages
        weights[index], // weight
        cubes[index], // cube
        revenues[index], // revenue
        timeWindows[index], // timeWindow
        undefined,// serviceTime
        undefined // depotId
    );
});

export const AddDepartures: Departure[] = [
    new Departure(undefined, "Depot 1", [48.870569, 2.356448], new Address("France", "Ile-de-France", "Paris", "Paris", "75001", "Rue de Rivoli", "1")),
    new Departure(undefined, "Depot 2", [48.826740, 2.342116], new Address("France", "Ile-de-France", "Paris", "Paris", "75002", "Rue de Richelieu", "2")),
]

export const GetDepartures: Departure[] = [
    new Departure(undefined, "Depot 1", [48.870569, 2.356448], new Address("France", "Ile-de-France", "Paris", "Paris", "75001", "Rue de Rivoli", "1"), [48.870569, 2.356448], 3, 20, 1.2, 650, 30, Date.now()+ 1000),
    new Departure(undefined, "Depot 2", [48.826740, 2.342116], new Address("France", "Ile-de-France", "Paris", "Paris", "75002", "Rue de Richelieu", "2"), [48.826740, 2.342116], 4, 15, 2.2, 450, 23, Date.now() + 2000),
]
export const AddVehicles: Vehicle[] = [
    new Vehicle(undefined, 0, 0, "Car vehicle 1", "Renault", "Master", 2, [48.870569, 2.356448], 6.5, "AA-123-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420),
    new Vehicle(undefined, 0, 0, "Car vehicle 2", "Renault", "Master", 2, [48.826740, 2.342116], 6.5, "AA-124-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420)
]

export const GetVehicles: Vehicle[] = [
    new Vehicle(135932, 0, 0, "Car vehicle 1", "Renault", "Master", 2, [48.870569, 2.356448], 6.5, "AA-123-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420),
    new Vehicle(135933, 0, 0, "Car vehicle 2", "Renault", "Master", 2, [48.826740, 2.342116], 6.5, "AA-124-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420)
]

export const ConfigurationParams : ConfigurationParameters = new ConfigurationParameters(
    "Paris - test optimization",//name  
    false, // ignoreTw
    false, // allowDropping
    false, //grupingOrders
    undefined, //balancedRoute
    0, //optCriterion
    undefined, //arrangeCriterion
    2, //optQuality
    undefined, //maxTimeToOptimize
    18000, //waitTime
    0 //routeType
);

export const VehicleConstraintsList: VehicleConstraints[] = [
    new VehicleConstraints(1.09, 1596758400000, 53, 0, INT32_MAX, 0.0 , INT32_MAX, 85.0 ),
];

export const AddOptimizationObj: AddOptimization = 
   new AddOptimization(
    undefined,
    ordersIds,
    AddDepartures,
    [],
    [135932, 135933],
    VehicleConstraintsList,
    ConfigurationParams,
     undefined, 
    );
 
const AddRequest: Request = new Request(
    26547,
    137827,
    undefined, 
    1, 
    "Operation done successfully!",
    Date.now(),
     );

export const GetOptimizationObj: GetOptimization = 
    new GetOptimization(
     137827,
     GetOrders,
     GetDepartures,
     [],
     GetVehicles,
     VehicleConstraintsList,
     ConfigurationParams,
     Date.now(), 
     undefined, 
     undefined,
     AddRequest
     );
export const GetOptimizationObjWithoutRequest: GetOptimization =
    new GetOptimization(137827,
        GetOrders,
        GetDepartures,
        [],
        GetVehicles,
        VehicleConstraintsList,
        ConfigurationParams,
        Date.now(), 
        undefined, 
        undefined
        );
export const GetAllOptimizationsObj: any =
     {
        optimizations: [
            GetOptimizationObjWithoutRequest
    ]
}
