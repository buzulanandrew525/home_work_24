/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/
console.log(`Завдання №1`);
document.write(`Завдання №1` + "<br>");

function sumArray(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

// Використання функції
const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum) // Виведення суми
document.write('Сума елементів масиву:', sum + "<br>" + "<br>")

/*
 * #2
 *
 * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/
console.log(`Завдання №2`);
document.write(`Завдання №2` + "<br>");

function doubleArrayElements(numbers) {
  return numbers.map(number => number * 2);
}

// Використання функції
const exampleArrays = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArrays)
console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів
document.write('Подвоєні елементи масиву:', doubledArray + "<br>" + "<br>")


/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
*/
console.log(`Завдання №3`);
document.write(`Завдання №3` + "<br>");

class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill === 'string' && skill.trim().length >= 2) {
      this.skills.push(skill.trim());
      return skill.trim();
    }
    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

const skillsManager = new SkillsManager()

console.log(skillsManager.addSkill('JavaScript') + "<br>")
document.write(skillsManager.addSkill('JavaScript') + "<br>");
console.log(skillsManager.addSkill('CSS') + "<br>")
document.write(skillsManager.addSkill('CSS') + "<br>");
console.log(skillsManager.getAllSkills() + "<br>")
document.write(skillsManager.getAllSkills() + "<br>" + "<br>");

/*
 * #4
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */
console.log(`Завдання №4`);
document.write(`Завдання №4` + "<br>");
function DateCalculator(initialDate) {
  this.currentDate = new Date(initialDate);

  if (isNaN(this.currentDate)) {
    console.log("Це не є датою");
  };

  this.addDays = function(days) {
    if (typeof days !== 'number' || !Number.isInteger(days)) {
      console.log('Дні мають бути цілими числами');
    }
    this.currentDate.setDate(this.currentDate.getDate() + days);
  };

  this.subtractDays = function(days) {
    if (typeof days !== 'number' || !Number.isInteger(days)) {
      console.log('Дні мають бути цілими числами');
    }
    this.currentDate.setDate(this.currentDate.getDate() - days);
  };

  this.getResult = function() {
    const year = this.currentDate.getFullYear();
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
};


// Демонстрація використання
const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів
document.write(dateCalculator.getResult() + "<br>");

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів
document.write(dateCalculator.getResult());