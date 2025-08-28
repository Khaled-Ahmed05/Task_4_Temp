var randName = "خالد أحمد";

document.getElementsByTagName("p")[0].innerHTML = randName;

function updateName(newName) {
    randName = newName;
    document.getElementsByTagName("p")[0].innerHTML = randName;
    passOrFail();
}

function toAnotherName() {
    var names = ['عمر محمد', 'ياسين عبدالله', 'حسين عبدالوهاب', 'أندرو أكرم', 'أحمد حسام', 'خالد أحمد'];
    var name = names[Math.floor(Math.random() * names.length)];
    updateName(name);
}

// Separator

var randGPA = 3;

document.getElementsByTagName("p")[1].innerHTML = randGPA;

function updateGPA(newGPA) {
    randGPA = newGPA;
    document.getElementsByTagName("p")[1].innerHTML = randGPA;
    passOrFail();
}

function toLess() {
    updateGPA(2.99);
}

function toThree() {
    updateGPA(3);
}

function toMore() {
    updateGPA(3.01);
}

// Separator

function passOrFail() {
    document.getElementsByTagName("span")[0].innerHTML = randName;
    if (randGPA >= 3) {
        document.getElementsByTagName("p")[4].innerHTML = "ناجح";
    } else {
        document.getElementsByTagName("p")[4].innerHTML = "ساقط";
    }
}

passOrFail();