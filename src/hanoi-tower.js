module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let result = {};

    let turns = Math.pow(2, disksNumber) - 1;

    //turns per second
    let turnsSpeedSec = turnsSpeed / 3600;
    let seconds = turns / turnsSpeedSec;

    result['turns'] = turns;
    result['seconds'] = seconds;
    
    return result;

}