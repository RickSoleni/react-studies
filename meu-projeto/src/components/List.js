import Item from "./Item"

function List()
{
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1992}/>
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item marca="Ford" ano_lancamento={2004}/>
                <Item marca="Volkswagem" ano_lancamento={2020}/>
                <Item />
            </ul>
        </>
    )
}
export default List