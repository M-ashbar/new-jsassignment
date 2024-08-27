
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Create student object
    const student = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        course: document.getElementById('course').value
    };

    // Display student information
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Registered Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Father Name:</strong> ${student.name}</p>
        <p><strong>Email Address:</strong> ${student.email}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
    `;

    // Optionally clear the form
    document.getElementById('registrationForm').reset();
});

