// Employee Type
type Employee = {
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
};

// Employee Data
const employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

// Function to get variable pay percentage
function getVariablePay(rating: number): number {

    if (rating >= 4.0) {
        return 15;
    }
    else if (rating >= 3 && rating < 4) {
        return 10;
    }
    else {
        return 3;
    }
}

// Function to get bonus
function getBonus(rating: number): number {

    if (rating >= 4.0) {
        return 1500;
    }
    else if (rating >= 3 && rating < 4) {
        return 1200;
    }
    else {
        return 300;
    }
}

// Function to calculate reward based on experience
function getReward(experience: number): number {

    if (experience >= 5) {
        return 5000;
    }

    return 0;
}

// Function to calculate hike percentage
function calculateHike(employee: Employee): number {

    const variablePayPercent = getVariablePay(employee.rating);
    const bonus = getBonus(employee.rating);
    const reward = getReward(employee.experience);

    const hike =
        (employee.baseSalary * variablePayPercent / 100) +
        bonus +
        reward;

    const hikePercent = (hike / employee.baseSalary) * 100;

    return hikePercent;
}


const hikeMap = new Map<string, number>();

// Loop through employees
for (let emp of employees) {

    const hikePercent = calculateHike(emp);

    hikeMap.set(emp.name, hikePercent);
}

// Print Results
console.log("Employee Hike Percentage");

hikeMap.forEach((value, key) => {
    console.log(key + " : " + value.toFixed(2) + "%");
});