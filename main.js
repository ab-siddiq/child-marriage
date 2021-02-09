
// name
const childNameNext = document.getElementById("child-name-next");

childNameNext.addEventListener("click", function () {
    const childNameInput = document.getElementById("child-name").value;
   


    const childMarriageCurrentAge = document.getElementById("child-marriage-current-age");
    const marriageName = document.getElementById("child-marriage-name");

    marriageName.style.display = "none";
    childMarriageCurrentAge.style.display = "block";
    document.getElementById("name-display").innerHTML = childNameInput;
    document.getElementById("child-marriage-user").innerHTML = childNameInput;
})
// child current age
const childAgePrevious = document.getElementById("child-age-previous");
const childAgeNext = document.getElementById("child-age-next");

childAgePrevious.addEventListener("click", function () {
    const childMarriageName = document.getElementById("child-marriage-name");
    const childMarriageCurrentAge = document.getElementById("child-marriage-current-age");
    childMarriageName.style.display = "block";
    childMarriageCurrentAge.style.display = "none";
    
})

childAgeNext.addEventListener("click", function () {
    const childCurrentAgeInput = document.getElementById("child-current-age").value;
   


    const childMarriageAnnualIncome = document.getElementById("child-marriage-annual-income");
    const childMarriageCurrentAge = document.getElementById("child-marriage-current-age");
    childMarriageAnnualIncome.style.display = "block";
    childMarriageCurrentAge.style.display = "none";

    document.getElementById("current-age-display").innerHTML  = childCurrentAgeInput;
})
//child marriage annual income

const childAnnualIncomePrevious = document.getElementById("child-annual-income-previous");
const childAnnualIncomeNext = document.getElementById("child-annual-income-next");

childAnnualIncomePrevious.addEventListener("click", function () {
    const childAnnualIncome = document.getElementById("child-marriage-annual-income");
    const childMarriageCurrentAge = document.getElementById("child-marriage-current-age");
    childMarriageCurrentAge.style.display = "block";
    childAnnualIncome.style.display = "none";
    
})

childAnnualIncomeNext.addEventListener("click", function () {
    const childAnnualIncomeInput = document.getElementById("child-annual-income").value;
   


    const childMarriageCost = document.getElementById("child-marriage-cost");
    const childAnnualIncome = document.getElementById("child-marriage-annual-income");
    childAnnualIncome.style.display = "none";
    childMarriageCost.style.display = "block";
    
    document.getElementById("annual-income-display").innerHTML  = childAnnualIncomeInput;
})

//child marriage cost
const marriageCostPrevious = document.getElementById("marriage-cost-previous");
const marriageCostNext = document.getElementById("marriage-cost-next");

marriageCostPrevious.addEventListener("click", function () {
    
    const childMarriageCost = document.getElementById("child-marriage-cost");
    const childMarriageAnnualIncome = document.getElementById("child-marriage-annual-income");
    childMarriageCost.style.display = "none";
    childMarriageAnnualIncome.style.display = "block";
   
})

marriageCostNext.addEventListener("click", function () {
    const childMarriageCostInput = document.getElementById("marriage-cost").value;
    


    const childMarriageCost = document.getElementById("child-marriage-cost");
    const childsCurrentAge = document.getElementById("childs-marriage-current-age");
    childMarriageCost.style.display = "none";
    childsCurrentAge.style.display = "block";
    
    document.getElementById("marriage-cost-display").innerHTML  = childMarriageCostInput;
})

//childs current age
const childsAgePrevious = document.getElementById("childs-age-previous");
const childsAgeNext = document.getElementById("childs-age-next");

childsAgePrevious.addEventListener("click", function () {
    const childsCurrentAge = document.getElementById("childs-marriage-current-age");
    const childMarriageCost = document.getElementById("child-marriage-cost");
    childMarriageCost.style.display = "block";
    childsCurrentAge.style.display = "none";
    // nameDisplay.innerHTML = wealthName;
})

childsAgeNext.addEventListener("click", function () {
    const childsCurrentAgeInput = document.getElementById("childs-current-age").value;

    const childMarriageCurrentAge = document.getElementById("childs-marriage-current-age");
    const childAgeOnMarriageYear = document.getElementById("child-age-on-marriage-year");
    childMarriageCurrentAge.style.display = "none";
    childAgeOnMarriageYear.style.display = "block";

    document.getElementById("child-current-age-display").innerHTML  = childsCurrentAgeInput;
   
})

//child age on marriage year

const ageOnMarriageYearPrevious = document.getElementById("age-on-marriage-year-previous");
const ageOnMarriageYearNext = document.getElementById("age-on-marriage-year-next");

ageOnMarriageYearPrevious.addEventListener("click", function () {
    const childAgeOnMarriageYear = document.getElementById("child-age-on-marriage-year");
    const childMarriageCurrentAge = document.getElementById("childs-marriage-current-age");
    childAgeOnMarriageYear.style.display = "none";
    childMarriageCurrentAge.style.display = "block";
    
})

ageOnMarriageYearNext.addEventListener("click", function () {
    const ageOnMarriageYearInput = document.getElementById("age-on-marriage-year").value;

    const childAgeOnMarriageYear = document.getElementById("child-age-on-marriage-year");
    const childMarriageInvestment = document.getElementById("child-marriage-upfront-investment");
    childAgeOnMarriageYear.style.display = "none";
    childMarriageInvestment.style.display = "block";
    
    document.getElementById("child-age-marriage-year-display").innerHTML  = ageOnMarriageYearInput;
})
//child marriage upfront investment

const marriageInvestmentPrevious = document.getElementById("marriage-investment-previous");
const marriageInvestmentNext = document.getElementById("marriage-investment-next");

marriageInvestmentPrevious.addEventListener("click", function () {
    const childMarriageInvestment = document.getElementById("child-marriage-upfront-investment");
    const childAgeOnMarriageYear = document.getElementById("child-age-on-marriage-year");
    childMarriageInvestment.style.display = "none";
    childAgeOnMarriageYear.style.display = "block";
    
})

marriageInvestmentNext.addEventListener("click", function () {
    const marriageInvestmentInput = document.getElementById("marriage-investment").value;

    const childMarriageRisk = document.getElementById("child-marriage-risk");
    const childMarriageInvestment = document.getElementById("child-marriage-upfront-investment");
    childMarriageInvestment.style.display = "none";
    childMarriageRisk.style.display = "block";
    
    document.getElementById("investment-display").innerHTML  = marriageInvestmentInput;
})

//
const childMarriageRiskPrevious = document.getElementById("child-marriage-risk-previous");


childMarriageRiskPrevious.addEventListener("click", function () {
    // const riskInput = document.getElementById("wealth-risk").value;
    
    const childMarriageRisk = document.getElementById("child-marriage-risk");
    const childMarriageInvestment = document.getElementById("child-marriage-upfront-investment");
    childMarriageRisk.style.display = "none";
    childMarriageInvestment.style.display = "block";
    
    // document.getElementById("risk-display").innerHTML  = riskInput;
})





// question one

const wealthQuestionOneNext = document.getElementById("wealth-question-one-next");
wealthQuestionOneNext.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthQuestionOne = document.getElementById("wealth-question-one");
    const wealthQuestionTwo = document.getElementById("wealth-question-two");
    wealthQuestionTwo.style.display = "block";
    wealthQuestionOne.style.display = "none";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})


// question two
const wealthQuestionTwoPrevious = document.getElementById("wealth-question-two-previous");
const wealthQuestionTwoNext = document.getElementById("wealth-question-two-next");

wealthQuestionTwoPrevious.addEventListener("click", function () {
    const wealthQuestionOne = document.getElementById("wealth-question-one");
    const wealthQuestionTwo = document.getElementById("wealth-question-two");
    wealthQuestionOne.style.display = "block";
    wealthQuestionTwo.style.display = "none";
    
})

wealthQuestionTwoNext.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthQuestionThree = document.getElementById("wealth-question-three");
    const wealthQuestionTwo = document.getElementById("wealth-question-two");
    wealthQuestionThree.style.display = "block";
    wealthQuestionTwo.style.display = "none";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})


// question three
const wealthQuestionThreePrevious = document.getElementById("wealth-question-three-previous");
const wealthQuestionThreeNext = document.getElementById("wealth-question-three-next");

wealthQuestionThreePrevious.addEventListener("click", function () {
    const wealthQuestionThree = document.getElementById("wealth-question-three");
    const wealthQuestionTwo = document.getElementById("wealth-question-two");
    wealthQuestionThree.style.display = "none";
    wealthQuestionTwo.style.display = "block";
    
})

wealthQuestionThreeNext.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthQuestionThree = document.getElementById("wealth-question-three");
    const wealthQuestionFour = document.getElementById("wealth-question-four");
    wealthQuestionThree.style.display = "none";
    wealthQuestionFour.style.display = "block";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})


// question four
const wealthQuestionFourPrevious = document.getElementById("wealth-question-four-previous");
const wealthQuestionFourNext = document.getElementById("wealth-question-four-next");

wealthQuestionFourPrevious.addEventListener("click", function () {
    const wealthQuestionThree = document.getElementById("wealth-question-three");
    const wealthQuestionFour = document.getElementById("wealth-question-four");
    wealthQuestionThree.style.display = "block";
    wealthQuestionFour.style.display = "none";
    
})

wealthQuestionFourNext.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthQuestionFive = document.getElementById("wealth-question-five");
    const wealthQuestionFour = document.getElementById("wealth-question-four");
    wealthQuestionFive.style.display = "block";
    wealthQuestionFour.style.display = "none";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})
// question five
const wealthQuestionFivePrevious = document.getElementById("wealth-question-five-previous");
const wealthQuestionFiveNext = document.getElementById("wealth-question-five-next");

wealthQuestionFivePrevious.addEventListener("click", function () {
    const wealthQuestionFour = document.getElementById("wealth-question-four");
    const wealthQuestionFive = document.getElementById("wealth-question-five");
    wealthQuestionFour.style.display = "block";
    wealthQuestionFive.style.display = "none";
    
})

wealthQuestionFiveNext.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthQuestionFive = document.getElementById("wealth-question-five");
    const wealthQuestionSix = document.getElementById("wealth-question-six");
    wealthQuestionFive.style.display = "none";
    wealthQuestionSix.style.display = "block";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})

// question six
const wealthQuestionSixPrevious = document.getElementById("wealth-question-six-previous");
const wealthQuestionSixSubmit = document.getElementById("wealth-question-six-submit");

wealthQuestionSixPrevious.addEventListener("click", function () {
    const wealthQuestionSix = document.getElementById("wealth-question-six");
    const wealthQuestionFive = document.getElementById("wealth-question-five");
    wealthQuestionSix.style.display = "none";
    wealthQuestionFive.style.display = "block";
    
})

wealthQuestionSixSubmit.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthDemographicCalculation = document.getElementById("wealth-demographic-calculation");
    const wealthRiskQuestionArea = document.getElementById("wealth-risk-question-area");
    wealthDemographicCalculation.style.display = "block";
    wealthRiskQuestionArea.style.display = "none";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})

// demographic score calculation
const wealthDemographicsScoreBack = document.getElementById("wealth-demographic-score-back");
const wealthDemographicScoreEvaluate = document.getElementById("wealth-demographic-score-evaluate");

wealthDemographicsScoreBack.addEventListener("click", function () {
    const wealthQuestionSix = document.getElementById("wealth-question-six");
    const wealthRiskQuestionArea = document.getElementById("wealth-risk-question-area");
    const wealthDemographicCalculation = document.getElementById("wealth-demographic-calculation");
    wealthQuestionSix.style.display = "block";
    wealthRiskQuestionArea.style.display = "block";
    wealthDemographicCalculation.style.display = "none";
    
})

wealthDemographicScoreEvaluate.addEventListener("click", function () {
    // const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    // console.log(annualIncomeInput);


    const wealthDemographicCalculation = document.getElementById("wealth-demographic-calculation");
    const wealthDemographicRiskQuotient = document.getElementById("wealth-demographic-risk-quotient");
    wealthDemographicRiskQuotient.style.display = "block";
    wealthDemographicCalculation.style.display = "none";

    // document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})