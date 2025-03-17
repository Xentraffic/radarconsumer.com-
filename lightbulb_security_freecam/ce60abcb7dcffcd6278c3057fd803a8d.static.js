let today = new Date();
const yeasterday = new Date() - 86400000;
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
// assign many before  to all last-date elemnts
document.querySelectorAll(".days-before").forEach((date) => {
  today -= 86400000 * 20.2;
  date.textContent = new Intl.DateTimeFormat("en-US", options).format(today);
});

// assign some days before  to all last-date elemnts
document.querySelectorAll(".last-date").forEach((date) => {
  today -= 86400000 * 6.34;
  date.textContent = new Intl.DateTimeFormat("en-US", options).format(today);
});

// assign yesterday to all yesterday elemnts
document.querySelectorAll(".yesterday").forEach((date) => {
  date.textContent = new Intl.DateTimeFormat("en-US", options).format(
    yeasterday
  );
});

// assign today to all today elements
document.querySelectorAll(".today").forEach((date) => {
  date.textContent = new Intl.DateTimeFormat("en-US", options).format(today);
});

// Print Year
document.querySelectorAll(".year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});
