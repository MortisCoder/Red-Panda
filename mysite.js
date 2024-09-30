document.getElementById('quizButton').addEventListener('click', function () {
	document.getElementById('quiz').style.display = 'block';
	this.style.display = 'none'; // Скрыть кнопку после нажатия
});

document.getElementById('submitQuiz').addEventListener('click', function () {
	const questions = document.querySelectorAll('.question');
	let resultText = '';

	questions.forEach((question, index) => {
		const answerInput = question.querySelector('.answer');
		const correctAnswer = question.querySelector('.correct-answer').textContent.replace('Правильный ответ: ', '').trim();

		if (answerInput.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
			resultText += `Вопрос ${index + 1}: Правильно!\n`;
			question.querySelector('.answer').classList.add('correct');
		} else {
			resultText += `Вопрос ${index + 1}: Неправильно! ${correctAnswer}\n`;
			question.querySelector('.answer').classList.add('incorrect');
		}
	});

	document.getElementById('result').textContent = resultText;
});

document.getElementById('theme-toggle').addEventListener('click', function () {
	document.body.classList.toggle('light-theme');
	if (document.body.classList.contains('light-theme')) {
		this.textContent = 'Сменить на темную тему';
	} else {
		this.textContent = 'Сменить на светлую тему';
	}
});
