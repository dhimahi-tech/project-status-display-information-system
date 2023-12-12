
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
  
  
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      
      const projects = data.content;
  
      
      console.log('Data Buffer:', data);
  
      
  
    
      const dashboard = document.querySelector('.dashboard');
      projects.forEach(project => {
        
        logCardDetails(project);
  
        const projectDiv = `
          <div class="project" style="background-color: white">
            <div class="header">
              <h3>${project.title}</h3>
              <h3>${new Date().toLocaleDateString('en-US', { month: 'short', year: '2-digit' }).replace(' ', "'")}</h3>
              <p>${project.subtitle}</p>
            </div>
            <div class="body1">
            <div class="row labels-row">
          <p><strong>Execution Status</strong></p>
          <p><strong>Milestone</strong></p>
          <p><strong>Deployment Risk</strong></p>
          <p><strong>Demo Date</strong></p>
        </div>
        <div class="row values-row">
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
  
        
        dashboard.innerHTML += projectDiv;
      });
  
    })
    .catch(error => console.error(error));
  