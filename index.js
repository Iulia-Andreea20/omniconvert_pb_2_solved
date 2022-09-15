$(document).ready(function () {
    let donationAmount = document.querySelector('#donation-amount');
    let donateBtn = document.querySelector('#donate-btn');
    let amountNeeded = 500;
    let accumulatedMoney = 0;

    $('.money-needed').text('$' + amountNeeded + ' still needed for project');

    donationAmount.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            let progress = $('.progress-bar .visual-progress')
            let counter_value = 0;
            let moneyNeededAfterDonation = amountNeeded - Number(donationAmount.value);
            counter_value = (Number(donationAmount.value) * 100) / amountNeeded;

            if (counter_value >= 0 && counter_value <= amountNeeded) {

                $('.money-needed').text('$' + moneyNeededAfterDonation + ' still needed for project');
                progress.css({ 'width': counter_value + '%' });
            }

        }

    });

    donateBtn.addEventListener("click", function () {
        if (localStorage.getItem("accumulatedMoney") !== null) {
            localStorage.setItem("accumulatedMoney", Number(JSON.parse(localStorage.getItem("accumulatedMoney")) + Number(donationAmount.value)));
            console.log(localStorage.getItem("accumulatedMoney"));
        }
        else {
            localStorage.setItem("accumulatedMoney", JSON.stringify(Number(donationAmount.value)));
            console.log(localStorage.getItem("accumulatedMoney"));
        }
        // localStorage.clear();
    });

});

