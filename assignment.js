// https://github.com/Tazri/JavaScript-Assignment

// kilometerToMeter function
function kilometerToMeter(kilometer){
    // check it is number or not
    if(typeof(kilometer) == 'number'){
        if(kilometer < 0){
            return 'Distance can\'t be negative!';
        }
        else{
            return kilometer * 1000;
        }
    }else{
        return 'Please provide a number.';
    }
}


// budgetCalculator function
function budgetCalculator(watch,phone,laptop){
    // check everything is number
    if(typeof(watch) === 'number' && typeof(phone) === 'number' && typeof(laptop) === 'number'){
        // check everything is positive number
        if(watch < 0 || phone < 0 || laptop < 0){
            return 'Please provide positive number.';
        }
        // check everything is integer number 
        else if(!Number.isInteger(watch) || !Number.isInteger(phone) || !Number.isInteger(laptop)){
            return 'Please provide integer number';
        }
        else{
            let totalWatchPrice = 50*watch;
            let totalPhonePrice = 100*phone;
            let totalLaptopPrice = 500*laptop;
            return totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        }
    }else{
        // if every thing is not number
        return 'Please provide number.'
    }
}


// hotelCost function
function hotelCost(day){
    // check day is number
    if(typeof(day) === 'number'){
        // check day is not negative
        if(day < 0){
            return 'Please provide valid information.Day can\'t be negative!'
        }
        // check day is not float
        else if(!Number.isInteger(day)){
            return 'Please provide integer number. Day can\'t be float !'
        }
        else{
            if(day <= 10){
                return day * 100;
            }
            else if(day <= 20){
                let firstTenDay = 10 * 100;
                day -= 10;
                return firstTenDay + (day * 80);
            }
            else{
                let firstTenDay = 10 * 100;
                let nextTenDay = 10 * 80;
                day -= 20;
                return firstTenDay + nextTenDay + (day * 50);
            }
        }
    }
    else{
        return 'Please provide a number.';
    }
}



// megaFriend function
function megaFriend(friendList){
    //check is array or not 
    if(Array.isArray(friendList)){
        // Array empty or not
        if(friendList.length === 0){
            return 'Your list is empty.';
        }else{
            // Let's think array first name is logest name.
            let longestName = friendList[0];
            for(let i = 0; i < friendList.length;i++){
                // check friendList[i] is name i mean it is string;
                if(typeof(friendList[i]) === 'string' ){
                    longestName = longestName.length >= friendList[i].length ? longestName : friendList[i] ;
                }
                else{
                    return 'Inside the list you use something that is not name. Please Provide correct name list.';
                }
            }
            return longestName;
        }
    }
    else{
        return 'Please provide list of friend as array.'
    }
}