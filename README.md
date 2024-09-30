<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Красная панда</title>
    <link rel="stylesheet" href="mysite.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(270deg, #1e1e1e, #2e2e2e, #1e1e1e);
            color: #e0e0e0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: background 0.3s, color 0.3s;
        }

        .container {
            max-width: 800px;
            padding: 30px;
            background-color: rgba(30, 30, 30, 0.95);
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            margin-bottom: 40px;
        }

        .responsive-image {
            width: 100%;
            height: auto;
            border-radius: 15px;
            margin-bottom: 20px;
        }

        .title {
            text-align: center;
            font-size: 2.5em;
            margin: 15px 0;
        }

        .text {
            font-size: 1.1em;
            line-height: 1.8;
            margin-bottom: 30px;
        }

        button {
            background-color: #4caf50;
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            font-size: 18px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            margin: 20px auto;
        }

        button:hover {
            background-color: #45a049;
            transform: translateY(-2px);
        }

        #quiz {
            background-color: rgba(30, 30, 30, 0.95);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

        .question {
            margin-bottom: 20px;
            font-size: 1.2em;
        }

        .answer {
            width: calc(100% - 20px);
            padding: 10px;
            border: 1px solid #555;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #333;
            color: #ddd;
        }

        .correct-answer {
            margin-top: 5px;
            font-size: 14px;
            color: #4caf50;
            display: none;
        }

        .answer.correct {
            border-color: #4caf50;
        }

        .answer.incorrect {
            border-color: #f44336;
        }

        #quiz h2 {
            text-align: center;
            font-size: 2em;
            margin-bottom: 20px;
        }

        /* Стили для светлой темы */
        .light-theme {
            background: #ffffff;
            color: #333333;
        }

        .light-theme .container,
        .light-theme #quiz {
            background-color: rgba(240, 240, 240, 0.95);
        }

        .light-theme .answer {
            background-color: #ffffff;
            color: #333333;
        }

        .support-section {
            text-align: center;
            margin-top: 20px;
        }

        .support-section button {
            margin-top: 10px;
            background-color: #007bff;
        }

        .support-section button:hover {
            background-color: #0056b3;
        }

    </style>
</head>

<body>
    <div class="container" id="container">
        <img src="C:/Users/Admin/Downloads/red-panda.webp" alt="Редкая панда" class="responsive-image">
        <h1 class="title">Красная панда</h1>
        <p class="text">Красная панда — это маленькое млекопитающее, обитающее в горных лесах Восточной Гималаи и юго-восточной Азии.</p>

        <h2>Информация о красной панде</h2>
        <p><strong>Рацион:</strong> Красные панды в основном питаются бамбуком, но также могут есть фрукты, ягоды и насекомых.</p>
        <p><strong>Среда обитания:</strong> Они обитают в высокогорных лесах Восточной Гималаи и юго-восточной Азии.</p>
        <p><strong>Цвет меха:</strong> Мех рыжевато-коричневого цвета с черными ногами и белыми отметинами.</p>
        <p><strong>Количество детенышей:</strong> Обычно от одного до четырех детенышей за раз.</p>
        <p><strong>Вес:</strong> Взрослые красные панды могут весить от 3 до 6,5 килограммов.</p>

        <button id="quizButton">Я все прочитал</button>
    </div>

    <div id="quiz" style="display: none;">
        <h2>Викторина о красной панде</h2>
        <p>Теперь проверьте свои знания о красных пандах, ответив на следующие вопросы:</p>

        <div id="questions">
            <div class="question">
                <p>1. Какой основной рацион красной панды?</p>
                <input type="text" class="answer" placeholder="Ваш ответ...">
                <p class="correct-answer" style="display: none;">Правильный ответ: Бамбук.</p>
            </div>
            <div class="question">
                <p>2. Где обитают красные панды?</p>
                <input type="text" class="answer" placeholder="Ваш ответ...">
                <p class="correct-answer" style="display: none;">Правильный ответ: Восточная Гималая и юго-восточная Азия.</p>
            </div>
            <div class="question">
                <p>3. Какой цвет меха у красной панды?</p>
                <input type="text" class="answer" placeholder="Ваш ответ...">
                <p class="correct-answer" style="display: none;">Правильный ответ: Рыжевато-коричневый с черными ногами.</p>
            </div>
            <div class="question">
                <p>4. Сколько детенышей обычно рожает самка красной панды?</p>
                <input type="text" class="answer" placeholder="Ваш ответ...">
                <p class="correct-answer" style="display: none;">Правильный ответ: Обычно от одного до четырех.</p>
            </div>
            <div class="question">
                <p>5. Какой вес может достигать взрослая красная панда?</p>
                <input type="text" class="answer" placeholder="Ваш ответ...">
                <p class="correct-answer" style="display: none;">Правильный ответ: От 3 до 6,5 килограммов.</p>
            </div>
        </div>
        <button id="submitQuiz">Отправить ответы</button>
        <p id="result" style="margin-top: 10px;"></p>
        <button id="theme-toggle">Сменить тему</button>
    </div>

    <div class="support-section">
        <h2>Поддержите нас</h2>
        <p>Если вам нравится наш проект и вы хотите нас поддержать, пожалуйста, рассмотрите возможность пожертвования.</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations">
            <input type="hidden" name="business" value="your-paypal-email@example.com"> <!-- Замените на ваш PayPal email -->
            <input type="hidden" name="item_name" value="Поддержка проекта">
            <input type="hidden" name="currency_code" value="USD">
            <input type="hidden" name="amount" value="10.00"> <!-- Можно убрать, чтобы пользователь сам указывал сумму -->
            <button type="submit">Пожертвовать</button>
        </form>
    </div>

    <script>
        const quizButton = document.getElementById('quizButton');
        const quiz = document.getElementById('quiz');
        const submitQuiz = document.getElementById('submitQuiz');
        const result = document.getElementById('result');
        const themeToggle = document.getElementById('theme-toggle
