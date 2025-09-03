"use strict";
const flightsTable = [
    { flightNum: 1, flights: ["PEK-HKG"], tips: "" },
    { flightNum: 2, flights: ["PEK-CTU", "CTU-MNL"], tips: "" },
    { flightNum: 3, flights: ["PEK-CTU", "CTU-MNL", "MNL-MEL"], tips: "" },
    { flightNum: 4, flights: ["PEK-CTU", "CTU-MNL", "MNL-MEL", "MNL-MEL"], tips: "Around the World1" }
];
const getStops = (flightsTable) => {
    const stops = [];
    flightsTable.forEach(flight => {
        stops.push(flight.flights.length === 1 ? "Direct" : `${(flight.flights.length - 1).toString()} Stops ${flight.tips}`);
    });
    return stops;
};
console.log(getStops(flightsTable));
