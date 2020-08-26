function Case() {
    //input
    confirm("Press ok to continue, please!");
    var condition = prompt('Do you have a spinal deformity or injury?')
    var x = 'yes'
    var y = 'no'
    

    //processing
    while (condition !== 'yes' && condition !== 'no') {
        condition = prompt('Do you have a spinal deformity or injury?');
    }

    if (condition == x) {
        alert('You will find your solution with us')

    } else if (condition == y) {
        alert('Check our website')

        }

        //output
        return (condition);

    };



