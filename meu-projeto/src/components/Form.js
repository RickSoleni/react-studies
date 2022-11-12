import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`Usuário ${name} foi cadastrado!`)
    }
    const [name, setName] = useState('Nome não inserido')
    const [password, setPassword] = useState('Senha não inserida')
    return(
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password"
                     id="password"
                     name="password" placeholder="Digite sua senha"
                     onChange={(e) => setPassword(e.target.value)}
                      />
                </div>

                <div>
                    <br></br>
                    <input type="submit" value="Cadastrar"/>
                </div>
            
            </form>
        </div>
    )
}

export default Form