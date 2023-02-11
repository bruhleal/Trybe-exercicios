
const nome = 'Bruna';
const desc = 'Qualquer coisa sobre mim.';
const skills = 'Minhas Habilidades';
const arraizin = ['HTML', 'CSS', 'JS','JEST', 'DOM']

const listaNaoOrdenada = () => {
   return arraizin.map((element) => <li>{element}</li>)
}

export function aboutMe() {

    return (
        <div>
        <h1>{nome}</h1>
        <p>{desc}</p>
        <h2>{skills}</h2>
        <ol>
          {listaNaoOrdenada()}
        </ol>
        </div>
    )
}

