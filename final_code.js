// Function to log card details
function logCardDetails(card) {
    console.log('Project Details:');
    console.log('Title:', card.title);
    console.log('Subtitle:', card.subtitle);
    console.log('Execution Status:', card.execstatus);
    console.log('Milestone:', card.milestone);
    console.log('Demo Date:', card.demodate);
    console.log('Deployment Risk:', card.deploymentrisk);
    console.log('Notes:', card.notes);
  }
  
  // Fetching data from JSON
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Extracting projects from data
      const projects = data.content;
  
      // Logging the entire data buffer
      console.log('Data Buffer:', data);
  
      let activeCount = 0;
      let deployCount = 0;
      let blockCount = 0;
      let delayCount = 0;
      let publishCount = 0;
  
      // Looping through projects to update counts
      projects.forEach(project => {
        switch (project.execstatus) {
          case 'Active':
            activeCount++;
            break;
          case 'Deploy':
            deployCount++;
            break;
          case 'Block':
            blockCount++;
            break;
          case 'Delay':
            delayCount++;
            break;
          case 'Publish':
            publishCount++;
            break;
        }
      });
  
      // Updating block values
      document.querySelector('.active2').textContent = activeCount.toString();
      document.querySelector('.deploy2').textContent = deployCount.toString();
      document.querySelector('.block2').textContent = blockCount.toString();
      document.querySelector('.delay2').textContent = delayCount.toString();
      document.querySelector('.publish2').textContent = publishCount.toString();
  
     
      const dashboard = document.querySelector('.dashboard');
      projects.forEach(project => {
      
        logCardDetails(project);
  
        // Determine background color based on deployment risk
        let bgColor;
        switch (project.execstatus) {
          case 'Active':
            bgColor = '#A569BD ';
            break;
          case 'Deploy':
            bgColor = '#3498DB ';  
            break;
          case 'Block':
            bgColor = '#E6546D';
            break; 
          case 'Delay':
            bgColor = '#FFC300';
            break;
          case 'Publish':  
            bgColor = '#2ECC71 ';
            break;
          default:
            bgColor = 'white';  
        }
  
        // Creating projectDiv dynamically with background color
        const projectDiv = `
          <div class="project" style="background-color: ${bgColor}">
            <div class="header">
              <h3>${project.title}</h3>
              <h3>${new Date().toLocaleDateString('en-US', { month: 'short', year: '2-digit' }).replace(' ', "'")}</h3>
              <p>${project.subtitle}</p>
            </div>
            <div class="body1">
            <div class="row_labels_row">
          <p><strong>Execution Status</strong></p>
          <p><strong>Milestone</strong></p>
          <p><strong>Deployment Risk</strong></p>
          <p><strong>Demo Date</strong></p>
        </div>
        <div class="row_values_row">
          <p>${project.execstatus}</p>
          <p>${project.milestone}</p>
          <p>${project.deploymentrisk}</p>
          <p>${new Date(project.demodate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).split('T')[0]}</p>
        </div>
            </div>
            <div class="footer">
              <p>${project.notes}</p>
            </div>
          </div>
        `;
  
        // Adding the projectDiv to the dashboard
        dashboard.innerHTML += projectDiv;
      });
  
    })
    .catch(error => console.error(error));
  