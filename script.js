
function toggleSeeMore() {
  var seeMoreSection = document.getElementById("see-more-section");
  var arrowIcon = document.querySelector(".arrow");
  
  if (seeMoreSection.style.display === "none" || seeMoreSection.style.display === "") {
    seeMoreSection.style.display = "block";
    setTimeout(function() {
      seeMoreSection.classList.add("show");
      arrowIcon.style.transform = "rotate(180deg)"; // Rotate arrow icon
    }, 50); // Add a slight delay for smoother transition
  } else {
    seeMoreSection.classList.remove("show");
    arrowIcon.style.transform = "rotate(0deg)"; // Reset arrow icon rotation
    setTimeout(function() {
      seeMoreSection.style.display = "none";
    }, 500); // Adjust timing to match your transition duration
  }
}

