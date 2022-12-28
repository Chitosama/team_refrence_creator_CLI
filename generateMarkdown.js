//generate HTML page
function generateMarkdown(manager, ep, ip){
let html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE-Edge">
        <meta name="viewport" content="width=device=width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="manager">${manager[0].manager_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">${manager[0].manager_id}</p>
    <a href="#" class="card-link">${manager[0].manager_email}</a>
    <a href="#" class="card-link">${manager[0].manager_office}</a>
  </div>
  `

  ep.forEach(function(element){
    html = html + 
    `
    <div class="card-body">
    <h5 class="engineer">${element.engineer_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">${element.engineer_id}</p>
    <a href="#" class="card-link">${element.engineer_email}</a>
    <a href="#" class="card-link">${element.engineer_git}</a>
  </div>
  `

  })

  ip.forEach(function(element){
    html = html + 
    `
    <div class="card-body">
    <h5 class="engineer">${element.intern_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">${element.intern_id}</p>
    <a href="#" class="card-link">${element.intern_email}</a>
    <a href="#" class="card-link">${element.intern_school}</a>
  </div>
  `

  })



  html = html +  `
</div>

    </body>
</html>
`

return html}

module.exports = generateMarkdown;
