function calling(number){
    var a = 1;
    var b;
    console.log(b = a + number++);
    setTimeout(() => {
       calling(number) 
    }, 2000);
};
calling(10)
