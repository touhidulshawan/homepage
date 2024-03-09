const submitQuery = (evt) => {
  evt.preventDefault();
  let userInput = document.getElementById("urlBar").value;
  window.location.replace(`https://google.com/search?q=${userInput}`);
};
