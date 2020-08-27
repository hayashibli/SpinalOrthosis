function Case() {
    //input
    confirm("Press ok to continue, please!");
    var condition = prompt('Do you have a spinal deformity or injury?')
    var x = 'yes'
    var y= 'no'
    var patient = "";

    //processing
    while (condition !== 'yes' && condition !== 'no') {
        condition = prompt('Do you have a spinal deformity or injury?');
    }


    if (condition == x) {
        alert('You will find your solution with us')

    } else if (condition == y) {
        alert('Check our website')
    }
    var age = prompt('how old are you?');
        for (var count=0; count< 15; count++) {
            if (condition == "yes") {
                patient = patient + ('press the first link')}

        //output
        return (condition);

    };
        }