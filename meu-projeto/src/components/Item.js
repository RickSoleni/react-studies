import PropTypes from "prop-types"

function Item ({marca, ano_lancamento})
{
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Abluble</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "Digite a marca",
    ano_lancamento: 1222
}


export default Item