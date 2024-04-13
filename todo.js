const enter = document.getElementById('enter');
const list = document.getElementById('list');

let count = 1;
enter.addEventListener('keydown', function (event) {
  let string;
  if (event.key === 'Enter' && enter.value != '') {
    string = `
      <div class="boxes" id="box${count}">
        <div class="mini">
          <div class="store">
            <input type="checkbox" class="checks" id="check${count}">
          </div>
          <div class="todos" id="todo${count}">${enter.value}</div>
        </div>
        <button class="deletes" id="delete${count}">X</button>
      </div>
    `;
    list.innerHTML += string;
    count++;
    enter.value = '';
  }
})