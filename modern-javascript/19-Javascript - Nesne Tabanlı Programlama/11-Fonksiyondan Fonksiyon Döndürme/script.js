function Question(hobby) {
    switch (hobby) {
        case 'car':
            return function (name) {
                console.log(name + " Do you have a car?");
            }
            break;

        case 'book':
            return function (name) {
                console.log(name + " What is your favourite book?");
            }
            break;

        case 'software':
            return function (name,type) {
                console.log(name + " Are you interested in "+type+" ?");
            }
            break;
        default:
            return function (name) {
                console.log(name + " How are you ?");
            }
    }
}

var carQuestion = Question('car');
carQuestion("Beyza");

var bookQuestion=Question('book');
bookQuestion("Beyza");
bookQuestion("Vizyonsuz Köpke");

var softwareQuestion=Question('software');
softwareQuestion("Beyza",'nodejs');

