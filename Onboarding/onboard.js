// Function to show the selected section
function showSection(sectionNumber) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    document.getElementById('section' + sectionNumber).classList.add('active');
  }
  
  // Function to move to the next section
  function nextSection(currentStep) {
    const totalSteps = 8;
    const nextStep = currentStep + 1;
    
    if (nextStep <= totalSteps) {
      // Show the next section
      showSection(nextStep);
  
      // Update progress on the left sidebar
      updateSidebarProgress(nextStep);
  
      // Update top progress bar
      updateTopProgress(nextStep, totalSteps);
    }
  }
  // Function to update sidebar progress with dynamic line height
function updateSidebarProgress(currentStep) {
    const steps = document.querySelectorAll('.progress-list li');
    const progressLine = document.getElementById('progress-line');
    
    // Calculate the distance to the latest completed section
    const lastCompletedStep = document.querySelector(`.progress-list li:nth-child(${currentStep})`);
    
    if (lastCompletedStep) {
      const progressHeight = lastCompletedStep.offsetTop + lastCompletedStep.offsetHeight / 2;
      
      // Update the height of the green progress line
      progressLine.style.height = `${progressHeight}px`;
    }
  
    steps.forEach((step, index) => {
      if (index < currentStep - 1) {
        step.classList.add('completed');
        step.classList.remove('current');
        step.querySelector('.circle').textContent = '✔'; // Update the circle icon
      } else if (index === currentStep - 1) {
        step.classList.add('current');
        step.classList.remove('completed');
        step.querySelector('.circle').textContent = index + 1;
      } else {
        step.classList.remove('completed', 'current');
        step.querySelector('.circle').textContent = index + 1;
      }
    });
  }
  
  // Example: Call updateSidebarProgress with the current step
  document.addEventListener('DOMContentLoaded', () => {
    updateSidebarProgress(1); // Initialize with the first step
  });
  
  
  
  
  // Update top progress bar
  function updateTopProgress(currentStep, totalSteps) {
    const progressPercentage = (currentStep / totalSteps) * 100;
    document.getElementById('top-progress-bar').style.width = progressPercentage + '%';
    document.getElementById('top-progress-text').innerText = `${progressPercentage}% Complete`;
  }
  
  // Initialize the first section
  document.addEventListener('DOMContentLoaded', () => {
    showSection(1);
    updateTopProgress(1, 8);
  });
  
  // Function to jump to a specific section
function jumpToSection(sectionNumber) {
    // Show the selected section
    showSection(sectionNumber);
  
    // Update progress on the left sidebar
    updateSidebarProgress(sectionNumber);
  
    // Update top progress bar
    updateTopProgress(sectionNumber, 8);
  }
  
  // Update the `showSection`, `updateSidebarProgress`, and `updateTopProgress` functions remain the same
  