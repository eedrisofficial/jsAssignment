// Getting the update button by ID
const toggleButton = document.getElementById("updating");

// Get the tags by ID
const htmlDisplay = document.getElementById("displayHtml");
const jsDisplay = document.getElementById("displayJavaScript");

// Add an onClick eventlistener to the update button
toggleButton.addEventListener("click", function () {
  // Checking the current visibility of the tags
  const ishtmlDisplayVisible = htmlDisplay.style.display !== "none";
  const isjsDisplayVisible = jsDisplay.style.display !== "none";

  // conditional statement for alternative display
  if (ishtmlDisplayVisible) {
    htmlDisplay.style.display = "none";
    jsDisplay.style.display = "block";
  } else if (isjsDisplayVisible) {
    htmlDisplay.style.display = "block";
    jsDisplay.style.display = "none";
  }
});
