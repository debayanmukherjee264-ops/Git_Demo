
// Student Grade Calculator

let studentName = "Rahul";
let marks = [85, 90, 78, 92, 88];

// Calculate total marks
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

// Calculate percentage
let percentage = total / marks.length;

// Determine grade
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

// Display result
console.log("Student Name:", studentName);
console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
