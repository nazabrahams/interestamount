function calcInt() {
    const amount = document.getElementById("amount").value;
    const percent = document.getElementById("percent").value.replace(/^([^%]+).*$/, "$1");
    const interestAmount = (amount * percent / 100);
    document.getElementById("result").innerHTML = `Interest Amount: ${interestAmount.toFixed(2)}`;
}
