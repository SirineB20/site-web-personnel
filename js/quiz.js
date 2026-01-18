// Fonction pour corriger le quiz
function corrigerQuiz() {
    // Les bonnes réponses
var reponses = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "a",
    q7: "a",
    q8: "b",
    q9: "a",
    q10: "c"
};


    
    var score = 0;
    var nbQuestions = 10;
    var detailsReponses = "";
    
  
    for (var i = 1; i <= nbQuestions; i++) {
        var questionName = "q" + i;
        var reponseUtilisateur = "";
     
        var radios = document.quizForm[questionName];
        
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                reponseUtilisateur = radios[j].value;
                break;
            }
        }
        
        
        if (reponseUtilisateur === reponses[questionName]) {
            score++;
            detailsReponses += "<p><strong>Question " + i + " :</strong> <span style='color: green;'>Correct ✓</span></p>";
        } else {
            if (reponseUtilisateur === "") {
                detailsReponses += "<p><strong>Question " + i + " :</strong> <span style='color: orange;'>Non répondue</span> (Bonne réponse : " + reponses[questionName].toUpperCase() + ")</p>";
            } else {
                detailsReponses += "<p><strong>Question " + i + " :</strong> <span style='color: red;'>Incorrect ✗</span> (Bonne réponse : " + reponses[questionName].toUpperCase() + ")</p>";
            }
        }
    }

    var pourcentage = (score / nbQuestions) * 100;
    
    var resultatDiv = document.getElementById("resultat");
    var message = "<h2>Résultat du Quiz</h2>";
    message += "<p><strong>Score : " + score + " / " + nbQuestions + " (" + pourcentage + "%)</strong></p>";
    
    if (pourcentage >= 80) {
        message += "<p style='color: green; font-size: 1.2em;'>Excellent ! Vous maîtrisez bien le sujet ! 🎉</p>";
        resultatDiv.className = "success";
    } else if (pourcentage >= 60) {
        message += "<p style='color: orange; font-size: 1.2em;'>Bien ! Mais vous pouvez encore progresser. 👍</p>";
        resultatDiv.className = "warning";
    } else {
        message += "<p style='color: red; font-size: 1.2em;'>Il faut réviser davantage ! 📚</p>";
        resultatDiv.className = "danger";
    }
    
    message += "<hr>";
    message += "<h3>Détails des réponses :</h3>";
    message += detailsReponses;
    
    resultatDiv.innerHTML = message;
    
   
    resultatDiv.scrollIntoView({ behavior: 'smooth' });
}