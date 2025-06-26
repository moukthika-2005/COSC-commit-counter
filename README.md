# 🚀 COSC HackWeek Commit Counter

A simple real-time web app built for the CBIT Open Source Community (COSC) to track the number of commits made during **HackWeek**. Every time a pull request is shipped, the counter updates live and stores commit totals for each day. Built with **HTML, CSS, and JavaScript** — no backend required!

---

## 🌟 Features

- 🔢 **Live Commit Counter**  
  Shows the number of commits made today.

- ➕➖ **Increment & Decrement Buttons**  
  - `Increment`: Simulates a new commit.
  - `Decrement`: Reverts a commit (can't go below 0).
  - `Reset`: Resets the count to 0.

- 🔁 **Auto Daily Reset**  
  The counter automatically resets at midnight or when the system date changes to a new day.

- 🗓️ **Daily Commit History**  
  Stores commit counts for each day of HackWeek in your browser (using `localStorage`).

- ♻️ **Persistent State**  
  Commit data persists even after refreshing or reopening the browser.

---

## 🚀 How to Run Locally

**1. Clone the Repository**

  - ```bash
    git clone https://github.com/your-username/cosc-commit-counter.git
    cd cosc-commit-counter
    ```

**2. Open `index.html` in any browser**

