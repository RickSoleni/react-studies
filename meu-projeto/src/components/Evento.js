import Button from './Button'

function Evento (){
    function meuEvento()
    {
        console.log('Eu fui acionado')

    }
    function segundoEvento()
    {
        console.log('Acionado de novo')
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento