const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const historyDiv = document.getElementById("history");

let dailyCommits = JSON.parse(localStorage.getItem("dailyCommits")) || {};
let today = new Date().toDateString();

// Initialize count for today if not present
if (!(today in dailyCommits)) {
  dailyCommits[today] = 0;
}

let count = dailyCommits[today];

function updateCounter() {
  counter.textContent = count;
}

function saveData() {
  dailyCommits[today] = count;
  localStorage.setItem("dailyCommits", JSON.stringify(dailyCommits));
  renderHistory();
}

function renderHistory() {
  historyDiv.innerHTML = "<h2>📊 Commit History</h2>";
  const list = document.createElement("ul");
  const sortedDates = Object.keys(dailyCommits).sort(
    (a, b) => new Date(b) - new Date(a)
  );
  for (const date of sortedDates) {
    const item = document.createElement("li");
    item.textContent = `${date}: ${dailyCommits[date]} commits`;
    list.appendChild(item);
  }
  historyDiv.appendChild(list);
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
  saveData();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
    saveData();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
  saveData();
});

// ⏰ Detect system date changes every 5 seconds
setInterval(() => {
  const currentDate = new Date().toDateString();
  if (currentDate !== today) {
    today = currentDate;
    if (!(today in dailyCommits)) {
      dailyCommits[today] = 0; // Only reset if it's a truly new date
    }
    count = dailyCommits[today]; // Load stored count for currentDate
    updateCounter();
    saveData();
  }
}, 5000); // Every 5 seconds

// Initial render
updateCounter();
renderHistory();
