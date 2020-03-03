module.exports = function repeater(str, options) {

    let arr = [];

    //if repeatTimes and additionRepeatTimes are not defined, the corresponding string is not repeated
    if (!options.repeatTimes) arr.push(str);
    if (!options.additionRepeatTimes) arr.push(options.addition);

    for (let i = 1; i <= options.repeatTimes; i++) {
        //str should be string
        arr.push(String(str));

        for (let j = 1; j <= options.additionRepeatTimes; j++) {

            //addition should be string
            arr.push(String(options.addition));

            //push the additionSeparator after every addition but the last one
            if (j < options.additionRepeatTimes) 
                arr.push(options.additionSeparator || '|');
        }
        
        //push the separator after every str but the last one
        if (i < options.repeatTimes) 
            arr.push(options.separator || '+');
    }

    let result = arr.join('');

    return result;

};
