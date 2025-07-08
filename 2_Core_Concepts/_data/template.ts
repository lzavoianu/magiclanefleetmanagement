///template.js

import { TemplateParameters } from "./entities";

export const AddTemplateParameters : TemplateParameters = new TemplateParameters(
    undefined, // id
    "Paris - test Optimization 50 vehicles in Berlin",//name  
    false, // ignoreTw
    0, //balancedRoute
    1, //optCriterion
    0, //arrangeCriterion
    2, //optQuality
    600, //maxTimeToOptimize
    800, //waitTime
    2, //routeType
    1, //matrix build type
    0, //restriction
    0, //vehicle Category
    false, //sameDepartureForAll
    false,//sameDestinationForAll
    true, //sameVehicleConstraintsForAll
);

export const GetTemplateParameters : TemplateParameters = new TemplateParameters(
    87988, // id
    "Paris - test Optimization 50 vehicles in Berlin",//name  
    false, // ignoreTw
    0, //balancedRoute
    1, //optCriterion
    0, //arrangeCriterion
    2, //optQuality
    600, //maxTimeToOptimize
    800, //waitTime
    2, //routeType
    1, //matrix build type
    0, //restriction
    0, //vehicle Category
    false, //sameDepartureForAll
    false,//sameDestinationForAll
    true, //sameVehicleConstraintsForAll
);

export const GetTemplatesParameters : any  = {
    templatesParameters: [
        new TemplateParameters(
            87987, // id
            "Paris - test Optimization 50 vehicles in Berlin",//name  
            false, // ignoreTw
            0, //balancedRoute
            1, //optCriterion
            0, //arrangeCriterion
            2, //optQuality
            600, //maxTimeToOptimize
            800, //waitTime
            2, //routeType
            1, //matrix build type
            0, //restriction
            0, //vehicle Category
            false, //sameDepartureForAll
            false,//sameDestinationForAll
            true, //sameVehicleConstraintsForAll
        ), 
        new TemplateParameters(
            87988, // id
            "Paris - test Optimization 25 vehicles in Berlin",//name  
            false, // ignoreTw
            0, //balancedRoute
            1, //optCriterion
            0, //arrangeCriterion
            2, //optQuality
            600, //maxTimeToOptimize
            800, //waitTime
            2, //routeType
            1, //matrix build type
            0, //restriction
            0, //vehicle Category
            false, //sameDepartureForAll
            false,//sameDestinationForAll
            true, //sameVehicleConstraintsForAll
        )
      ],
    }