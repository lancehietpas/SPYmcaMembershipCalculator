var membershipBaseAmount = {
    youthBase: 20,
    youngAdultBase: 33,
    adultBase: 48.5,
    doubleAdultBase: 67,
    familyBase: 72,
    singleParentFamilyBase: 58,
    seniorAdultBase: 46,
    seniorFamilyBase: 66,
  }

  var incomePercentage = {
    ps1: 0.4,
    ps2: 0.5,
    ps3: 0.6,
    ps4: 0.7,
    ps5: 0.9
  };

  var spIncomePercentage = {
    ps1: 0.3,
    ps2: 0.4,
    ps3: 0.5,
    ps4: 0.6,
    ps5: 0.7
  };

  var fIncomePercentage = {

    ps1: 0.55,
    ps2: 0.6,
    ps3: 0.65,
    ps4: 0.70,
    ps5: 0.80

  };

  function getMembership() {
    var memType = document.getElementById("memTypeSelected").value;
    var incomeRange = document.getElementById("income").value;
    var baseAmount = membershipBaseAmount[memType];
    var percentage;
  
    if (memType === "singleParentFamilyBase") {
      percentage = spIncomePercentage[incomeRange];
    } else if (memType === "familyBase") {
      percentage = fIncomePercentage[incomeRange];
    } else {
      percentage = incomePercentage[incomeRange];
    }
    
    var discountAmount = baseAmount * percentage;
    //var newRate = baseAmount - discountAmount;
    var newRate = discountAmount;
    newRate = Math.abs(newRate);
    document.getElementById("result").value = newRate.toFixed(2);
    document.getElementById("ogBaseRate").value = baseAmount.toFixed(2);
  }