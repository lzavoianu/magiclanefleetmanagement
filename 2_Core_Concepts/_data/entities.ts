const INT32_MAX: number = 99999999;
                          
// Address class
export class Address {
    constructor(
        public country: string = "",
        public state: string = "",
        public county: string = "",
        public city: string = "",
        public postalCode: string = "",
        public streetName: string = "",
        public streetNumber: string = "",
        public extra?: string 
    ) {}
}

type Coordinates = [number, number]; 

// Customer class
export class Customer {
    constructor(
        public id?: number ,
        public alias: string = "",
        public firstName: string = "", // Default to alias
        public lastName: string = "",
        public address: Address = new Address(), // Default Address instance
        public email: string = "",
        public phoneNumber: string = "",
        public location: [number, number] = [0, 0], // Default to (0,0)
        public customData: string = ""
    ) 
    {}
}

// BaseOrder class
export class Order {
    constructor(
        public id?: number ,
        public customerId?:number,
        public email?:string,
        public creationTimestamp?: number,
        public customerInfo?: Customer,
        public location: Coordinates  = [0, 0], // Declared and initialized
        public alias: string = "",
        public firstName: string = "",
        public lastName: string = "",
        public address: Address = new Address(),
        public phoneNumber: string = "",
        public customData: string  = "",
        public type: number = 0,
        public status: number = 0,  
        public state: number = 1,
        public priority: number = 0,
        public numberOfPackages: number = 0,
        public weight: number = 0.0,
        public cube: number = 0.0,
        public revenue: number = 0.0,
        public timeWindow: [number, number] = [0, 0],
        public serviceTime: number = 0,
        public depotId: number = 0
        
    ) {}
}

export class RouteOrder {
    constructor(
        public orderInfo: Order = new Order(),
        //RouteOrder
        public matchedLocation?: [number, number],
        public actualLocation?: [number, number],
        public indexInRoute?: number,
        public indexInOptimization?: number,
        public arrivalTime?: number,
        public timeToNextOrder?: number,
        public waitTime?: number,
        public numberOfPackagesAtArrival?: number,
        public collectedNumberOfPackages?: number,
        public deliveredNumberOfPackages?: number,
        public weightAtArrival?: number,
        public collectedWeight?: number,
        public deliveredWeight?: number,
        public cubeAtArrival?: number,
        public collectedCube?: number,
        public deliveredCube?: number,
        public traveledDistance?: number,
        public distanceToNextOrder?: number,
        public revenueAtArrival?: number,
        public visitTimestamp?: number
    ) {}
}

// Departure class
export class Departure {
    constructor(
        public depotId: number = 0,
        public alias: string = "",
        public location: Coordinates = [0, 0],
        public address: Address = new Address(),
        private matchedLocation?: Coordinates,
        private numberOfPackages?: number,
        private weight?: number,
        private cube?: number,
        private timeToNext?: number,
        private distanceToNext?: number,
        private departureTime?: number
    ) {}
};

// Destination class
export class Destination {

    constructor(
        public alias: string = "",
        public location: Coordinates= [0, 0],
        public address: Address = new Address(),
        private matchedLocation?: Coordinates,
        private traveledDistance?: number,
        private arrivalTime?: number
    ) {}
};

export class Vehicle {

    constructor(
        public id?: number, 
        public type: number =  0, 
        public status: number = 0, 
        public name: string = "",
        public manufacturer: string = "",   
        public model: string = "",
        public fuelType: number = 2, 
        public lastPosition: Coordinates = [0, 0], 
        public consumption: number = 7.5,
        public plate: string = "",
        public maxLoadWeight: number = INT32_MAX,
        public maxLoadCube: number = INT32_MAX,
        public height: number = 0,
        public width: number = 0,
        public weight: number = 0,
        public length: number = 0,
        public axleLoad: number = 0,
        public fixedCost: number = 0,
        public costPerHour: number = 0, 
        public startTime: number = 0,
        public endTime: number = 1439,
        public bikePower?: number,
        public bikerWeight?: number
    ) {}
}

// Depot class
export class Depot {
    constructor(
      public id?: number,
      public isDepot: boolean = false,
      public alias: string = "",
      public location: Coordinates = [0, 0],
      public address: Address = new Address()
    ){}
  }

// Define the OrderSequenceOptions type
export type OrderSequenceOptions = {
    sequenceOptions: number;
    ordersSequence: number[][];
};

// Configuration class
export class ConfigurationParameters {
    constructor(
        public name: string = "",
        public ignoreTimeWindow: boolean = false,
        public allowDroppingOrders: boolean = false,
        public groupingOrders: boolean = false,
        public balancedRoutes: number = 0,
        public optimizationCriterion: number = 1,
        public arrangeCriterion: number = 0,
        public optimizationQuality: number = 2,
        public maxTimeToOptimize: number = 300,
        public maxWaitTime: number = 0,
        public routeType: number = 0,
        public restrictions: number = 0,
        public distanceUnit: number = 0,
        public orderSequenceOptions: OrderSequenceOptions[] = []
    ) {}
}

// VehicleConstraints class
export class VehicleConstraints {
    constructor(
        public fuelPrice: number = 1.09,
        public startDate: number = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate())).getTime(),
        public maxNumberOfPackages: number = INT32_MAX,
        public minNumberOfOrders: number = 0,
        public maxNumberOfOrders: number = INT32_MAX,
        public minDistance: number = 0.0,
        public maxDistance: number = INT32_MAX,
        public maxRevenue: number = INT32_MAX
    ) {}
}

type Matrices = { 
    vehicleType: number;
    distMatrix: number[][];
    timeMatrix: number[][];
};

// Define the Request class
export class Request {
    constructor(
        public id?: number,
        public optimizationId?: number,
        public routeId?: number,
        public status: number = 0,
        public message: string = "",
        public creationTimestamp: number = 0,
    ) {}
}

// Define the Optimization class
export class GetOptimization {
    constructor(
        public id?: number,
        public orders: Order[] = [],
        public departures: Departure[] = [],
        public destinations: Destination[] = [], 
        public vehicles: Vehicle[] = [],
        public vehiclesConstraints: VehicleConstraints[] = [], 
        public configurationParameters: ConfigurationParameters = new ConfigurationParameters(),
        public creationTimestamp?: number,
        public matrixBuildType: number = 1,
        public matrices?: Matrices[],
        public request?: Request
    ) {}
}

// Define the Optimization class
export class AddOptimization {
    constructor(
        public id?: number,
        public orders: number[] = [],
        public departures: Departure[] = [],
        public destinations: Destination[] = [], 
        public vehicles: number[] = [],
        public vehiclesConstraints: VehicleConstraints[] = [], 
        public configurationParameters: ConfigurationParameters = new ConfigurationParameters(),
        public creationTimestamp?: number,
        public matrixBuildType: number = 1,
        public matrices?: Matrices[],
        public request?: Request
    ) {}
}

// Territory class
export class Territory {
    constructor(
      public id?: number,
      public name: string = "",
      public type: number = 1,
      public data: Coordinates[] = [],
      public color: string = "",
      public orders?: Order[]
    ){}
  }

  // TemplateParameters class
export class TemplateParameters {
    constructor(
        public id?: number,
        public name: string = "",
        public ignoreTimeWindow: boolean = false,
        public balancedRoutes: number = 0,
        public optimizationCriterion: number = 1,
        public arrangeCriterion: number = 0,
        public optimizationQuality: number = 2,
        public maxTimeToOptimize: number = 300,
        public maxWaitTime: number = 0,
        public routeType: number = 0,
        public matrixBuiltType: number = 1,
        public restrictions: number = 0,
        public vehicleCategory: number = 0,
        public sameDepartureForAll: boolean = false,
        public sameDestinationForAll:boolean =  false,
        public sameVehicleConstraintsForAll: boolean = false
    ) {}
}