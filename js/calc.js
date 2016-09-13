/**
 * Created by Tan on 13.09.2016.
 */

$(document).ready(function(){
    console.log("ready!");

    var distance = $("#distance");

    var diesle = $("#diesel");
    var costOfDieselLiter = $("#cost_of_diesel_liter");
    var volumeOfDiesel = $("#volume_of_diesel");
    var totalCostOfDiesel = $("#total_cost_of_diesel");

    var gas = $("#gas");
    var costOfGasLiter = $("#cost_of_gas_liter");
    var volumeOfGas = $("#volume_of_gas");
    var totalCostOfGas = $("#total_cost_of_gas");

    distance.on("change", function(){

        if(diesle.val() != '' && costOfDieselLiter.val() != ''){
          volumeOfDiesel.val((distance.val() / 100) * diesle.val());
          totalCostOfDiesel.val(volumeOfDiesel.val() * costOfDieselLiter.val());
        }

        if(gas.val() != '' && costOfGasLiter.val() != ''){
            volumeOfGas.val((distance.val() / 100) * gas.val());
            totalCostOfGas.val(volumeOfGas.val() * costOfGasLiter.val());
        }
    })

    diesle.on("change", function(){
        if(distance.val() != '' && costOfDieselLiter.val() != ''){
            volumeOfDiesel.val((distance.val() / 100) * diesle.val());
            totalCostOfDiesel.val(volumeOfDiesel.val() * costOfDieselLiter.val());
        }
    });

    gas.on("change", function () {
        if(distance.val() != '' && costOfGasLiter.val() != ''){
            volumeOfGas.val((distance.val() / 100) * gas.val());
            totalCostOfGas.val(volumeOfGas.val() * costOfGasLiter.val());
        }
    });

    costOfDieselLiter.on("change", function () {
        if(distance.val() != '' && diesle.val() != ''){
            volumeOfDiesel.val((distance.val() / 100) * diesle.val());
            totalCostOfDiesel.val(volumeOfDiesel.val() * costOfDieselLiter.val());
        }
    });

    costOfGasLiter.on("change", function () {
        if(distance.val() != '' && gas.val() != ''){
            volumeOfGas.val((distance.val() / 100) * gas.val());
            totalCostOfGas.val(volumeOfGas.val() * costOfGasLiter.val());
        }
    })
});

