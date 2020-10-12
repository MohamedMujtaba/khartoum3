const numbOne = document.getElementById('numbOne');
const numbTwo = document.getElementById('numbTwo');
const numbThree = document.getElementById('numbThree');
const btnSubmit = document.getElementById('btnSubmit');
const valed = document.getElementById('valed');
const valed2 = document.getElementById('valed2');
btnSubmit.addEventListener('click', toDo);
let scrolled = false;
function toDo(e) {
    // year1
    if (numbOne.value == 0 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('hi1');
    } else if (numbOne.value == 0 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('hi1-2');
    }
    // year2 
    else if (numbOne.value == 0 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('hi2');
    } else if (numbOne.value == 0 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('hi2-2');
    }
    // year3
    else if (numbOne.value == 0 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('hi3');
    } else if (numbOne.value == 0 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('hi3-2');
    }
    // year4
    else if (numbOne.value == 0 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('hi4');
    }
    else if (numbOne.value == 0 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('hi4-1');
    }
    // year5
    else if (numbOne.value == 0 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('hi5');
    }
    else if (numbOne.value == 0 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('hi5-1');
    }
    // mic
    // year1
    else if (numbOne.value == 1 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('him1');
    } else if (numbOne.value == 1 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('him1-2');
    }
    // year2 
    else if (numbOne.value == 1 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('him2');
    } else if (numbOne.value == 1 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('him2-2');
    }
    // year3
    else if (numbOne.value == 1 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('him3');
    } else if (numbOne.value == 1 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('him3-2');
    }
    // year4
    else if (numbOne.value == 1 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('him4');
    }
    else if (numbOne.value == 1 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('him4-1');
    }
    // year5
    else if (numbOne.value == 1 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('him5');
    }
    else if (numbOne.value == 1 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('him5-1');
    }
    // civell
    // year1
    else if (numbOne.value == 2 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('hici1');
    } else if (numbOne.value == 2 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('hici1-2');
    }
    // year2 
    else if (numbOne.value == 2 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('hici2');
    } else if (numbOne.value == 2 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('hici2-2');
    }
    // year3
    else if (numbOne.value == 2 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('hici3');
    } else if (numbOne.value == 2 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('hici3-2');
    }
    // year4
    else if (numbOne.value == 2 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('hici4');
    }
    else if (numbOne.value == 2 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('hici4-1');
    }
    // year5
    else if (numbOne.value == 2 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('hici5');
    }
    else if (numbOne.value == 2 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('hici5-1');
    }
    // chim
    // year1
    else if (numbOne.value == 3 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('hi-chimm1');
    } else if (numbOne.value == 3 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('hichim1-2');
    }
    // year2 
    else if (numbOne.value == 3 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('hichim2');
    } else if (numbOne.value == 3 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('hichim2-2');
    }
    // year3
    else if (numbOne.value == 3 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('hichim3');
    } else if (numbOne.value == 3 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('hichim3-2');
    }
    // year4
    else if (numbOne.value == 3 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('hichim4');
    }
    else if (numbOne.value == 3 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('hichim4-1');
    }
    // year5
    else if (numbOne.value == 3 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('hichim5');
    }
    else if (numbOne.value == 3 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('hichim5-1');
    }
    // gass
    // year1
    else if (numbOne.value == 4 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('higass1');
    } else if (numbOne.value == 4 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('higass1-2');
    }
    // year2 
    else if (numbOne.value == 4 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('higass2');
    } else if (numbOne.value == 4 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('higass2-2');
    }
    // year3
    else if (numbOne.value == 4 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('higass3');
    } else if (numbOne.value == 4 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('higass3-2');
    }
    // year4
    else if (numbOne.value == 4 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('higass4');
    }
    else if (numbOne.value == 4 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('higass4-1');
    }
    // year5
    else if (numbOne.value == 4 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('higass5');
    }
    else if (numbOne.value == 4 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('hi-gass5-1');
    }
    // min
    // year1
    else if (numbOne.value == 5 && numbTwo.value == 0 && numbThree.value == 0) {
        console.log('higass1');
    } else if (numbOne.value == 5 && numbTwo.value == 0 && numbThree.value == 1) {
        console.log('higass1-2');
    }
    // year2 
    else if (numbOne.value == 5 && numbTwo.value == 1 && numbThree.value == 0) {
        console.log('higass2');
    } else if (numbOne.value == 5 && numbTwo.value == 1 && numbThree.value == 1) {
        console.log('higass2-2');
    }
    // year3
    else if (numbOne.value == 5 && numbTwo.value == 2 && numbThree.value == 0) {
        console.log('higass3');
    } else if (numbOne.value == 5 && numbTwo.value == 2 && numbThree.value == 1) {
        console.log('higass3-2');
    }
    // year4
    else if (numbOne.value == 5 && numbTwo.value == 3 && numbThree.value == 0) {
        console.log('higass4');
    }
    else if (numbOne.value == 5 && numbTwo.value == 3 && numbThree.value == 1) {
        console.log('higass4-1');
    }
    // year5
    else if (numbOne.value == 5 && numbTwo.value == 4 && numbThree.value == 0) {
        console.log('higass5');
    }
    else if (numbOne.value == 5 && numbTwo.value == 4 && numbThree.value == 1) {
        console.log('hi-gass5-1');
    }
    e.preventDefault();
}