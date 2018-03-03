const daysBox = document.querySelector(".days");
const searchBox = document.querySelector("#search");

function displayDays(displayedDays) {
  displayedDays.forEach(day => {
    daysBox.innerHTML += `
        <div class="day">
            <div class="bar">
                <h2><span class="date">Day ${
                  day.day
                }: </span><span class="title">${day.title}</span></h2>
            <button id="dropdown" class="btn-default">
                <i class="fas fa-caret-down"></i>
            </button>
            </div>

            <div class="summary">
            <p>${
              day.summary
            } <a href="#">Keep Reading <i class="fas fa-book"></i></a></p>
        </div>
        </div>

        `;
  });
  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => bar.addEventListener("click", displaySummary));
}
displayDays(days);

function searchDays() {
  daysBox.innerHTML = "";
  let filteredDays = days.filter(day => {
    if (
      day.title.toLowerCase().includes(this.value.toLowerCase()) ||
      day.summary.toLowerCase().includes(this.value.toLowerCase())
    ) {
      return day;
    }
  });
  displayDays(filteredDays);
}


function displaySummary() {
  if (this.nextElementSibling.style.display !== "block") {
    this.parentNode.classList.add("expand");
    this.nextElementSibling.style.display = "block";
    this.children[1].innerHTML = `<i class="fas fa-caret-up"></i>`;
  } else {
    this.parentNode.classList.remove("expand");
    this.nextElementSibling.style.display = "none";
    this.children[1].innerHTML = `<i class="fas fa-caret-down"></i>`;

  }
}

searchBox.addEventListener("input", searchDays);
