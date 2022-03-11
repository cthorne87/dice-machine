let dice = $(":button").on("click", function(event){
    let multiplier = $("#multiple").val();
    //console.log(multiplier);
    var sum = 0;
    for (let i = 0; i < multiplier; i++){
        result = Math.floor(Math.random() * event.target.id + 1);
        sum += result;
        //console.log(sum);
    }
    console.log(sum);
    
})

