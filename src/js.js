let button = document.querySelector("#btn");
button.addEventListener("click", handleClick);

function handleClick() {
  let vitc = document.querySelector("#firstCheckboxStretched");
  vitc.addEventListener("change", (e) => {
    if (e.checked) {
      alert("You're using vitamin C");
    } else {
      alert("Oopsie");
    }
  });
}

//let subheading = document.querySelector("#sub");
//console.log(subheading.textContent);
