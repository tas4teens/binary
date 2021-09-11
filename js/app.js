var binaryString = '';
for (var i = 0; i < 10000; i++){
    var inner = Math.round(Math.random());
    if (inner == 1){
        binaryString += 1;
    }else{
        binaryString += 0;
    }
}

document.getElementById('binary').innerHTML = binaryString;