import {

  ListaStyled,
  Itemlista,
  Foto,
  Informacoes,
  Nome,
  Descricao
} from './Lista.style'

export default function Lista(){
  return (
    <ListaStyled>
      <Itemlista>
        <Foto/>
          <Informacoes>
            <Nome>Bidu</Nome>
            <Descricao>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut vitae doloremque tempore delectus laborum corrupti minus provident pariatur error voluptates autem reiciendis veniam sit cum explicabo non temporibus, in fugiat.
            </Descricao>
          </Informacoes>
      </Itemlista>
    </ListaStyled>
  )
}