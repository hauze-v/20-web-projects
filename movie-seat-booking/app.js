// CACHE THE DOM
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)"); // places all the seats in a nodeList
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; // the + here converts the type from String to Number

// Update total price and count of selected seats
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatCount = selectedSeats.length;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

/* Instead of looping through seats nodeList and adding an eventListener to each seat, we can add one
to the container and check for if a seat was clicked. */
container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
