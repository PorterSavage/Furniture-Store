function getFurniture(){
  fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Furniture</h2>';
    data.body.data.forEach(function(furniture){
      output += `
        <div>
          <h3>${furniture.name}</h3>
          <img src="${furniture.imageUrl}" height="25%" width="25%">
          <p>${furniture.description}</p>
          <hr>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}

function getBrown(){
  fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
  .then((res) => res.json())
  .then((data) => {
    const filtered = data.body.data.filter(furniture => furniture.colors.includes("brown"));
    let output = '<h2>Furniture available in brown:</h2>';
    filtered.forEach(function(furniture){
      output += `
        <div>
          <h3>${furniture.name}</h3>
          <img src="${furniture.imageUrl}" height="25%" width="25%">
          <p>${furniture.description}</p>
          <hr>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}

function getTan(){
  fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
  .then((res) => res.json())
  .then((data) => {
    const filtered = data.body.data.filter(furniture => furniture.colors.includes("tan"));
    let output = '<h2>Furniture available in tan:</h2>';
    filtered.forEach(function(furniture){
      output += `
        <div>
          <h3>${furniture.name}</h3>
          <img src="${furniture.imageUrl}" height="25%" width="25%">
          <p>${furniture.description}</p>
          <hr>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}

function getRed(){
  fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
  .then((res) => res.json())
  .then((data) => {
    const filtered = data.body.data.filter(furniture => furniture.colors.includes("red"));
    let output = '<h2>Furniture available in red:</h2>';
    filtered.forEach(function(furniture){
      output += `
        <div>
          <h3>${furniture.name}</h3>
          <img src="${furniture.imageUrl}" height="25%" width="25%">
          <p>${furniture.description}</p>
          <hr>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}

function getDelivery(){
  fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Furniture</h2>';
    data.body.data.forEach(function(furniture){
      output += `
        <div>
          <h3>${furniture.name}</h3>
          <img src="${furniture.imageUrl}" height="25%" width="25%">
          <p>${furniture.description}</p>
          <p>Deliverable: ${furniture.deliverable}</p>
          <hr>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}

$(document).ready(function(){
  document.getElementById('getFurniture').addEventListener('click', getFurniture);
  document.getElementById('getTan').addEventListener('click', getTan);
  document.getElementById('getBrown').addEventListener('click', getBrown);
  document.getElementById('getRed').addEventListener('click', getRed);
  document.getElementById('getDelivery').addEventListener('click', getDelivery);
})