// Student data
const students = [
    // Student data here...
  ];
  
  // Function to display student list
  function displayStudentList() {
    const studentListDiv = document.getElementById('studentList');
    students.forEach(student => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'attendance';
      checkbox.value = student.rollNo;
  
      const label = document.createElement('label');
      label.textContent = `${student.name} (${student.rollNo}) - ${student.class}`;
      label.appendChild(checkbox);
  
      studentListDiv.appendChild(label);
      studentListDiv.appendChild(document.createElement('br'));
    });
  }
  
  // Function to save attendance
  function saveAttendance() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const presentStudents = Array.from(checkedCheckboxes).map(checkbox => checkbox.value);
  
    // You can save the attendance data here, either locally or on a server
    console.log('Present students:', presentStudents);
    alert('Attendance saved!');
  }
  
  // Call the function to display student list
  displayStudentList();
  