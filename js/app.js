const daysBox = document.querySelector(".days");

function displayDays() {
  days.forEach(day => {
    daysBox.innerHTML += `
        <div class="day">
            <div class="bar">
                <h2><span class="date">Day ${day.day}: </span><span class="title">${
    day.title
    }</span></h2>
            <button id="dropdown" class="btn-default">
                <i class="fas fa-caret-down"></i>
            </button>
            </div>

            <div class="summary">
            <p>${day.summary} <a href="#">Keep Reading <i class="fas fa-book"></i></a></p>
        </div>
        </div>

        `;
  });
}
displayDays();

const bars = document.querySelectorAll(".bar");
const summary = document.querySelectorAll(".summary");
let isDropdownOpen = false;

function displaySummary() {
  if (!isDropdownOpen) {
    this.nextElementSibling.style.display = "block";
    this.children[1].innerHTML = `<i class="fas fa-caret-up"></i>`;
    isDropdownOpen = true;
  } else {
    this.nextElementSibling.style.display = "none";
    this.children[1].innerHTML = `<i class="fas fa-caret-down"></i>`;
    isDropdownOpen = false;
  }
}

bars.forEach(bar => bar.addEventListener("click", displaySummary));
