const task = document.querySelector(".task");
const upload = document.querySelector("#upload");
const form = document.querySelector("form");
const boxTask = document.querySelector("#box-task");
const input = document.querySelector("input");
const trash = document.querySelector(".icon-bin");
const heart = document.querySelector(".icon-heart");
const iconAngry = document.querySelector(".icon-angry");
const line = document.querySelector(".line");
const iconStar = document.querySelector(".icon-star-full");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const up = ` <div class="task">

    <span class="icon-star-full"></span>
            <p class="line" > ${input.value} </p>

  <div class="divicon" >
      <span class="icon-bin"></span>
      <span class="icon-angry"></span>
  </div>

</div>`;

  boxTask.innerHTML += up;

  input.value = " ";
});

boxTask.addEventListener("click", (eo) => {
 
  switch (eo.target.className) {
    case "icon-bin":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry":
      eo.target.classList.add("dsnone");

      const heart = ` <span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("line")[0]
        .classList.add("line-text");

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.classList.add("dsnone");

      eo.target.parentElement.parentElement
        .getElementsByClassName("line")[0]
        .classList.remove("line-text");

      const angry = ` <span class="icon-angry"></span>`;

      eo.target.parentElement.innerHTML += angry;
      break;

    case "icon-star-full":
      eo.target.classList.add("star-up");
      boxTask.prepend(eo.target.parentElement);
      break;

    case "icon-star-full star-up":
      eo.target.classList.remove("star-up");
      break;



    default:
      break;


      
  }
});
