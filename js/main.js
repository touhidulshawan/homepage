const submitQuery = (evt) => {
  evt.preventDefault();
  let userInput = document.getElementById("urlBar").value;
  const url = `https://${userInput}`
  /* window.location.replace(`https://google.com/search?q=${userInput}`); */
    window.location.href = url
};
