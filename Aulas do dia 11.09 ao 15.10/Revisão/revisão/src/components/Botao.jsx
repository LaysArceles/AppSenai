export function Botao({cor, conteudo, altura,largura}){
    return (
        <>
        <button className={`${cor} ${altura} ${largura}`}>
      {conteudo}
    </button>
        </>
    )
}