const toggleButtons = document.querySelectorAll('.toggle-option');
let selectedType = 'Blood';

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    selectedType = button.dataset.type;
  });
});

// Set min date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById("needby").setAttribute("min", today);

// Form submission logic
document.getElementById('bloodForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const bloodGroup = document.getElementById('bloodgroup').value;
  const units = document.getElementById('units').value;
  const needBy = document.getElementById('needby').value;
  const age = document.getElementById('age').value;
  const reason = document.getElementById('reason').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    alert('Please select patient gender.');
    return;
  }

  const formData = {
    type: selectedType,
    bloodGroup,
    units,
    needBy,
    gender: gender.value,
    age,
    reason
  };

  console.log("Form Submitted:", formData);
  alert("Request submitted successfully!");

  // Reset form and toggle
  this.reset();
  toggleButtons[0].click();
});
