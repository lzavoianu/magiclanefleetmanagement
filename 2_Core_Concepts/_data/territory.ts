//territory.js
import { GetOrders } from './order';
import { Territory } from './entities';



export const AddTerritories: Territory[] = [
    new Territory(undefined, "North Region", 1, [[48.827865, 2.379216], [48.434460, 5.234103]], "#FF5733"),
    new Territory(undefined, "South Region", 2, [[48.880250, 2.299601], [48.897163, 2.292865], [46.199373, 0.069986], [47.602138, 2.330583]], "#FF5723")
];

export const GetTerritories: any  = {
    territories: [
        {id: 879884, ...AddTerritories[0], orders: GetOrders.orders},
        {id: 879885, ...AddTerritories[1], orders: []}
    ]
 };

export const GetTerritory :Territory = GetTerritories[0];

export const GenerateTerritories = {
    locations: [
        [48.870852, 2.356148], [48.827327, 2.342267], [48.880250, 2.299601], [48.845198, 2.402896],
        [48.887096, 2.283513], [48.896894, 2.321586], [48.870449, 2.342204], [48.895658, 2.344043],
        [48.458357, -0.054451], [45.049782, 2.475759], [46.199373, 0.069986], [47.602138, 2.330583],
        [44.346051, 4.694878], [44.464582, 2.455020], [48.434460, 5.234103], [49.161539, 0.500580]
      ],
      territoriesNumber: 3
};

export const GeneratedTerritories = {
    territories: [
        new Territory(879888, "Territory 0", 0, [ [44.464582, 2.455020], [48.887096, 2.283513], [48.896894, 2.321586], [48.870449, 2.342204], [48.895658, 2.344043],], "#FF5733"),
        new Territory(879887, "Territory 1", 0, [ [49.161539, 0.500580], [44.346051, 4.694878], [48.870852, 2.356148], [48.827327, 2.342267], [48.880250, 2.299601], [48.845198, 2.402896],], "#FF5723"), 
        new Territory(879886, "Territory 2", 0, [ [48.434460, 5.234103], [48.458357, -0.054451], [45.049782, 2.475759], [46.199373, 0.069986], [47.602138, 2.330583],], "#FF5743"),
    ]
    };