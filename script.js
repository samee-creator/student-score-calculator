// Select all student rows
const rows = document.querySelectorAll('.student-row');

// Loop through each row and attach event listeners
rows.forEach((row) => {
  const ca1Input = row.querySelector('.ca1');
  const ca2Input = row.querySelector('.ca2');
  const ca3Input = row.querySelector('.ca3');
  const examInput = row.querySelector('.exam');
  const totalCell = row.querySelector('.total');
  const gradeCell = row.querySelector('.grade');

  // Function to calculate scores for a specific row
  function calculateScore() {
    // Bonus Challenge Validation: CA <= 10, Exam <= 70
    if (Number(ca1Input.value) > 10) ca1Input.value = 10;
    if (Number(ca2Input.value) > 10) ca2Input.value = 10;
    if (Number(ca3Input.value) > 10) ca3Input.value = 10;
    if (Number(examInput.value) > 70) examInput.value = 70;

    // Prevent negative numbers
    if (Number(ca1Input.value) < 0) ca1Input.value = 0;
    if (Number(ca2Input.value) < 0) ca2Input.value = 0;
    if (Number(ca3Input.value) < 0) ca3Input.value = 0;
    if (Number(examInput.value) < 0) examInput.value = 0;

    // Convert inputs to numbers
    const ca1 = Number(ca1Input.value) || 0;
    const ca2 = Number(ca2Input.value) || 0;
    const ca3 = Number(ca3Input.value) || 0;
    const exam = Number(examInput.value) || 0;

    // Calculate Total Score[cite: 1]
    const total = ca1 + ca2 + ca3 + exam;

    // Determine Grade based on Total Score[cite: 1, 2]
    let grade = '';
    if (total >= 70) {
      grade = 'A';
    } else if (total >= 60) {
      grade = 'B';
    } else if (total >= 50) {
      grade = 'C';
    } else if (total >= 45) {
      grade = 'D';
    } else if (total >= 40) {
      grade = 'E';
    } else {
      grade = 'F';
    }

    // Update DOM
    totalCell.textContent = total;
    gradeCell.textContent = grade;
  }

  // Attach input event listeners to all fields[cite: 2]
  ca1Input.addEventListener('input', calculateScore);
  ca2Input.addEventListener('input', calculateScore);
  ca3Input.addEventListener('input', calculateScore);
  examInput.addEventListener('input', calculateScore);
});