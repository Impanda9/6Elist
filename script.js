const answerButtons = document.querySelectorAll('button[name="answer"]');
const submitButton = document.querySelector('.submit-button');

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    answerButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedButton = document.querySelector('button[name="answer"].selected');

  if (selectedButton) {
    const answerValue = selectedButton.value;

    localStorage.setItem("Oldest employe", answerValue);
    console.log("Selected answer registered in local storage:", answerValue);

    window.location.href = "https://impanda9.github.io/7Missnr/";
  } else {
    console.log("No answer selected");
  }
});
