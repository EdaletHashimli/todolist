let addbutton = document.querySelector('.add')
let input = document.querySelector('input')
var ul = document.getElementById("list");
var ulli = document.querySelectorAll("ul li");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const ull = document.querySelector(".delete");


function check() {
  if (ul.children.length == 0) {
    ull.style.display = 'none'
    console.log('boshdur')
  }
}

addbutton.addEventListener('click', () => {

    ull.style.display = 'block'
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value))



    let deletebutton = document.createElement('img')
    deletebutton.src = 'img/delete.png'
    deletebutton.classList.add('del')
    li.appendChild(deletebutton)

    if (input.value == '') {
      alert('BOSHDUR')
    } else {
      ul.appendChild(li);
      check()

      let del = document.querySelectorAll('.del')



      del.forEach((item) => {
        item.addEventListener('click', function () {
          this.parentElement.remove()
          check()



        })
      })






    }



    input.value = ''

  }

)








function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }

  up.style.display = "none";
  down.style.display = "block";
}


function sortListreverse() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }

  down.style.display = "none";
  up.style.display = "block";
}