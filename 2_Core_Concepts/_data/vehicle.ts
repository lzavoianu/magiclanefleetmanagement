import { Vehicle } from "./entities"

  export const AddVehicles: Vehicle[] = [
    new Vehicle(undefined, 0, 0, "Car vehicle 1", "Renault", "Master", 2, [48.870569, 2.356448], 6.5, "AA-123-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420),
    new Vehicle(undefined, 0, 0, "Car vehicle 2", "Renault", "Master", 2, [48.826740, 2.342116], 6.5, "AA-124-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420)
]

export const GetVehicles: any ={
 vehicles:[
    new Vehicle(135932, 0, 0, "Car vehicle 1", "Renault", "Master", 2, [48.870569, 2.356448], 6.5, "AA-123-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420),
    new Vehicle(135933, 0, 0, "Car vehicle 2", "Renault", "Master", 2, [48.826740, 2.342116], 6.5, "AA-124-AA", 60, 50, 0, 0, 0, 0, 0, 0, 0, 420)
],
};

  export const GetVehicle : Vehicle = GetVehicles.vehicles[0];