const container = document.querySelector('.container');

fetch('./people.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.textContent = `${
        data[i].lname[0].toUpperCase() + data[i].lname.slice(1)
      }, ${data[i].fname[0].toUpperCase() + data[i].fname.slice(1)}`;

      div.classList.add('name');
      container.appendChild(div);
    }
  });
