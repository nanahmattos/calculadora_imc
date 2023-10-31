import {useState} from "react"

import styles from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [mostraResultado, setmostraResultado] = useState("");
    const [classificaTabela, setClassificaTabela] = useState("");

    const calculadoraImc = () => {
        const calculaImc =  peso / (altura * altura)
        const resultadoImc = calculaImc.toFixed(2);
        setmostraResultado(+resultadoImc)
        
        if (resultadoImc <= 18.5) {
            return setClassificaTabela(
                <p>Você está a baixo do peso!</p>
            )
        } else if (resultadoImc >= 18.6 && resultadoImc <= 24.9 ) {
            return setClassificaTabela (
                <p>Parabéns! Seu peso está ideal</p>
            )
        } else if (resultadoImc >= 25 && resultadoImc <= 29.9){
            return setClassificaTabela (
                <p>Você está levemente acima do peso</p>
            )
        } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
            return setClassificaTabela (
                <p>Atenção! Obesidade grau I</p>
            ) 
        } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
            return setClassificaTabela (
                <p>Obesidade severa grau II</p>
            )
        } else if (resultadoImc >= 40) {
            return setClassificaTabela (
                <p>Obesidade mórbida grau III</p>
            )
        } else {
            return (
                <p>Digite um número válido</p>
            )
        }
    }

    const reset = () => {    
        setAltura(0)
        setPeso(0)
        setmostraResultado("")
        setClassificaTabela("")
    }

    return (
        <div className="container">
                <form className={styles.form}>
                    <h1>Calculadora de IMC</h1>
                    <p>Insira seus dados na calculadora para saber seu IMC:</p>
                    <input className={styles.input} type="number" placeholder="Altura(M)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                    <input className={styles.input} type="number" placeholder="Peso(kg)" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <button className={styles.button} onClick={calculadoraImc} type="button">Calcular</button>
                    <button className={styles.button} onClick={reset} type="button">Resetar</button>
                    <p>{mostraResultado}</p>
                    <p>{classificaTabela}</p>
                </form>
        </div>
    )
}

export default Formulario