// Loan Eligibility Program - TypeScript

function loanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
)

 {

  console.log(" Loan Eligibility Details");
  console.log("Customer Name:", customerName);
  console.log("Credit Score:", creditScore);
  console.log("Income:", income);
  console.log("Employed:", isEmployed);
  console.log("DTI Ratio (%) :", debtToIncomeRatio);
 

  // Credit Score above 750
  if (creditScore > 750) {
    console.log("Loan Status : APPROVED (Excellent Credit Score)");
  }

  // Credit Score below 650
  else if (creditScore < 650) {
    console.log("Loan Status : DENIED (Low Credit Score)");
  }

  // Credit Score between 650 and 750
  else {

    // Income 
    if (income < 50000) {
      console.log("Loan Status : DENIED (Income less than 50,000)");
      
    }

    // Employment status
    if (!isEmployed) {
      console.log("Loan Status : DENIED (Customer is unemployed)");
    
    }

    // Debt-to-Income ratio 
    if (debtToIncomeRatio < 40) {
      console.log("Loan Status : APPROVED");
    } else {
      console.log("Loan Status : DENIED (DTI Ratio too high)");
    }
  }

  
}

let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35;

loanEligibility(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);