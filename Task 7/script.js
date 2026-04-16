document.getElementById("convertBtn").addEventListener("click", convertCurrency);

async function convertCurrency() {

    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    // validation
    if (amount === "" || isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a valid amount";
        return;
    }

    document.getElementById("result").innerText = "Converting...";

    try {
        var response = await fetch("https://api.exchangerate-api.com/v4/latest/" + from);
        var data = await response.json();

        var rate = data.rates[to];
        var result = amount * rate;

        document.getElementById("result").innerText =
            amount + " " + from + " = " + result.toFixed(2) + " " + to;

    } catch (error) {
        document.getElementById("result").innerText = "Error fetching data";
        console.log(error);
    }
}