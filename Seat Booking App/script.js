//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button

document.addEventListener("DOMContentLoaded", () => {
  const selectMovie = document.getElementById("selectMovie");
  const movieName = document.getElementById("movieName");
  const moviePrice = document.getElementById("moviePrice");
  const totalPrice = document.getElementById("totalPrice");
  const seatCont = document.getElementById("seatCont");
  const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
  const proceedBtn = document.getElementById("proceedBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const numberOfSeat = document.getElementById("numberOfSeat");

  let selectedSeats = [];
  let currentMoviePrice = 7;

  function populateMovieList() {
    moviesList.forEach(movie => {
      const option = document.createElement("option");
      option.value = movie.price;
      option.textContent = movie.movieName;
      selectMovie.appendChild(option);
    });

    selectMovie.addEventListener("change", (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      movieName.textContent = selectedOption.textContent;
      moviePrice.textContent = `$ ${selectedOption.value}`;
      currentMoviePrice = parseInt(selectedOption.value);
      updateTotalPrice();
    });
  }

  function updateTotalPrice() {
    const total = selectedSeats.length * currentMoviePrice;
    totalPrice.textContent = `$ ${total}`;
  }

  function updateSelectedSeatsHolder() {
    numberOfSeat.textContent = selectedSeats.length;
    if (selectedSeats.length === 0) {
      selectedSeatsHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
    } else {
      selectedSeatsHolder.innerHTML = selectedSeats.map(index => `<span>Seat ${index + 1}</span>`).join(", ");
    }
  }

  function handleSeatClick(e) {
    const seat = e.target;
    if (seat.classList.contains("occupied")) {
      return;
    }

    const seatIndex = [...seatCont.querySelectorAll(".seat")].indexOf(seat);

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      selectedSeats = selectedSeats.filter(index => index !== seatIndex);
    } else {
      seat.classList.add("selected");
      selectedSeats.push(seatIndex);
    }

    updateTotalPrice();
    updateSelectedSeatsHolder();
  }

  function handleProceedClick() {
    if (selectedSeats.length === 0) {
      alert("Oops no seat Selected");
    } else {
      alert("Yayy! Your Seats have been booked");
      selectedSeats.forEach(index => {
        const seat = seatCont.querySelectorAll(".seat")[index];
        seat.classList.remove("selected");
        seat.classList.add("occupied");
      });
      selectedSeats = [];
      updateTotalPrice();
      updateSelectedSeatsHolder();
    }
  }

  function handleCancelClick() {
    selectedSeats.forEach(index => {
      const seat = seatCont.querySelectorAll(".seat")[index];
      seat.classList.remove("selected");
    });
    selectedSeats = [];
    updateTotalPrice();
    updateSelectedSeatsHolder();
  }

  seatCont.querySelectorAll(".seat").forEach(seat => {
    seat.addEventListener("click", handleSeatClick);
  });

  proceedBtn.addEventListener("click", handleProceedClick);
  cancelBtn.addEventListener("click", handleCancelClick);

  populateMovieList();
});
