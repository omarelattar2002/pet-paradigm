
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("message").innerText = "Thank you! Your request has been submitted.";
        });
    }
});


function searchFunction() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    alert("Search functionality is not yet implemented, but you searched for: " + query);
}


function toggleAnswer(index) {
    let answers = document.querySelectorAll(".answer");
    let allQuestions = document.querySelectorAll(".faq-item h3");

    if (answers[index].style.display === "block") {
        answers[index].style.display = "none";
        allQuestions[index].innerHTML = allQuestions[index].innerHTML.replace("▲", "▼");
    } else {

        answers.forEach((answer, i) => {
            answer.style.display = "none";
            allQuestions[i].innerHTML = allQuestions[i].innerHTML.replace("▲", "▼");
        });

        answers[index].style.display = "block";
        allQuestions[index].innerHTML = allQuestions[index].innerHTML.replace("▼", "▲");
    }
}
