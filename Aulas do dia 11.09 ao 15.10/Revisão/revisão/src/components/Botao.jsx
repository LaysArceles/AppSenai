export function Botao({cor, conteudo, altura,largura, hover}){
    return (
        <>
        <button className={`${cor} ${altura} ${largura} ${hover}`}>
      {conteudo}
    </button>
        </>
    )
}