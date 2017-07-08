var currentElement = null

function afficher_cacher(id) {
  if (currentElement != null)
  currentElement.style.display = "none";
  currentElement = document.getElementById(id);
  document.getElementById("main").style.height = "auto";
  currentElement.style.display = "block";
  return true;
}
