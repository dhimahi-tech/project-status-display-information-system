/* Individual entity display function*/
const cardData = {
    "content": [
      {
        "id": "mj5386qj",
        "title": "CL245-2",
        "subtitle": "Jetson Nano: Edge AI Solution",
        "date": "2023-04-09T18:30:00.000Z",
        "milestone": "Published",
        "execstatus": "active",
        "deploymentrisk": "low",
        "demodate": "2023-06-09T18:30:00.000Z",
        "notes": "[Mar 16]: Addressed critical defects\n[Mar 09]: Discussion with marketing lead[Mar 16]: Addressed critical defects"
      }
    ]
  };
  function getCardTitle(card) {
    const title = card.title;
    console.log('Card Title:', title);
    return title;
  }
  function getCardSubTitle(card) {
    const subtitle = card.subtitle;
    console.log('Card SubTitle:', subtitle);
    return subtitle;
  }
  const card = cardData.content[0];
  getCardTitle(card);
  getCardSubTitle(card);

  /*All entities display function
  const cardData = {
    "content": [
      {
        "id": "mj5386qj",
        "title": "CL245-2",
        "subtitle": "Jetson Nano: Edge AI Solution",
        "date": "2023-04-09T18:30:00.000Z",
        "milestone": "Published",
        "execstatus": "active",
        "deploymentrisk": "low",
        "demodate": "2023-06-09T18:30:00.000Z",
        "notes": "[Mar 16]: Addressed critical defects\n[Mar 09]: Discussion with marketing lead[Mar 16]: Addressed critical defects"
      }
    ]
  };
  function logCardDetails(card) {
    console.log('Card Details:');
    console.log('Title:', card.title);
    console.log('Subtitle:', card.subtitle);
    console.log('Execution Status:', card.execstatus);
    console.log('Milestone:', card.milestone);
    console.log('Demo Date:', card.demodate);
    console.log('Deployment Risk:', card.deploymentrisk);
    console.log('Notes:', card.notes);
  }
  const card = cardData.content[0];
  logCardDetails(card);*/
  