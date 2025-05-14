window.onload = function() {
    // Retrieve the saved classes from localStorage
    const classes = JSON.parse(localStorage.getItem('classes')) || [];

    // Get the schedule table element by id
    const scheduleGrid = document.getElementById('scheduleGrid');
    console.log("Loaded Classes from localStorage: ", classes); // Debugging line to check loaded data

    // Loop through the saved classes and display them in the schedule grid
    classes.forEach(classData => {
      const dayIndex = getDayIndex(classData.time); // Get day index from the time (Mon, Tue, etc.)
      const timeIndex = getTimeIndex(classData.time); // Get time index (9, 10, etc.)

      if (dayIndex !== -1 && timeIndex !== -1) {
        // Access the specific table cell where the class should be displayed
        const cell = scheduleGrid.rows[timeIndex].cells[dayIndex];
        
        // Create a new div to represent the class and place it in the correct cell
        const classElement = document.createElement('div');
        classElement.classList.add('class-item');
        classElement.textContent = `${classData.className}\n${classData.time} - ${classData.instructor}`;
        classElement.style.backgroundColor = classData.color;  // Set the color for the class
        classElement.style.padding = '10px'; // Optional, to ensure the text fits within the div
        cell.appendChild(classElement);
      }
    });
  };

  // Helper function to map day to day index (Mon, Tue, etc.)
  function getDayIndex(day) {
    const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];
    return days.indexOf(day);
  }

  // Helper function to map time to row index (9, 10, etc.)
  function getTimeIndex(time) {
    const times = [9, 10, 11, 12]; // Adjust this to match your actual time range
    return times.indexOf(time);
  }