import { Depot } from '../_data/entities';
import { Address } from '../_data/entities';

export const AddDepots: Depot[] = [
    new Depot(undefined, true,"Depot 1", [48.870569, 2.356448], new Address("France", "Ile-de-France", "Paris", "Paris", "75001", "Rue de Rivoli", "1")),
    new Depot(undefined, true, "Depot 2", [45.652871, 25.585588], new Address("France", "Aquitaine", "Aquitaine", "Bordeaux", "33300", "Jean Jaures", "82"))
];

export const GetDepots: any = {
    miscLocations: [
        new Depot(16262, true,"Depot 1", [48.870569, 2.356448], new Address("France", "Ile-de-France", "Paris", "Paris", "75001", "Rue de Rivoli", "1")),
        new Depot(16263, true, "Depot 2", [45.652871, 25.585588], new Address("France", "Aquitaine", "Aquitaine", "Bordeaux", "33300", "Jean Jaures", "82"))
    ]
};

export const GetDepot : Depot = new Depot(16262, true,"Depot 1", [48.870569, 2.356448], new Address("France", "Ile-de-France", "Paris", "Paris", "75001", "Rue de Rivoli", "1"));
