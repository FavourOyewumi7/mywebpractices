


function random(){
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let lis = alphabets.length;
    let val = Math.floor(Math.random() * lis);
    let ans = alphabets[val];
    
    return (ans);
};

var run = random();


console.log(run);

function check() {
    var letter = document.getElementsByClassName('word')[0].value[2];

    var res = document.getElementsByClassName('result')[0];
    var write = document.getElementsByClassName('things')[0];
    var run = random();
    console.log(run);
    write.innerHTML = `The third value is ${letter}`
    if (letter == run){
        res.value = 'YOU ARE RIGHT';
    }
    else{
        res.value = 'TRY AGAIN';
    };
 };
