const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, 
// a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, value) => {
    obj[key] = value;
};
addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKey(obj) {
   return Object.keys(obj);
    
} console.log(listKey(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
const size = (obj) => Object.keys(obj).length;
console.log(size(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValue(obj) {
    return Object.values(obj);
     
 } console.log(listValue(lesson3));
 
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula,
//  sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);





