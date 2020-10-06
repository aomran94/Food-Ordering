
var foodMap = new Map();
foodMap.set("pizza", {name: "Pizza", count: 0, cost:75});
foodMap.set("bechamel", {name: "Bechamel", count: 0, cost:60});
foodMap.set("kofta", {name: "Kofta", count: 0, cost:50});


function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
};

function docParserOnLoad(){
    var name = findGetParameter("username");
    document.getElementById("greeting").innerText = "Welcome " + name + ". Choose Your Items !";
    foodMap.forEach((foodObject,foodId)=>{
        document.getElementById(foodId).innerText = foodObject.cost + "LE " + foodObject.name + " (" + foodObject.count + ")";
    });
};

function foodClickHandler(foodID){
    foodMap.get(foodID).count++;
    document.getElementById(foodID).innerText = foodMap.get(foodID).cost + "LE " + foodMap.get(foodID).name + " (" + foodMap.get(foodID).count + ")";
};

function checkoutHandler(){
    var totalCost = 0;
    foodMap.forEach((foodObject,foodId)=>{
        totalCost += foodObject.cost * foodObject.count;
    });
    alert("Total Price is " + totalCost);
}