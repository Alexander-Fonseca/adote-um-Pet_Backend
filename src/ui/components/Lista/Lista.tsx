import { Button } from '@mui/material'
import {

  ListaStyled,
  Itemlista,
  Foto,
  Informacoes,
  Nome,
  Descricao
} from './Lista.style'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListaProps{
  pets: Pet[];
}

export default function Lista(props: ListaProps){
    const tamanhoMaximoTexto = 200;
  return (
    <ListaStyled>
      {props.pets.map(pet =>(
        <Itemlista key={pet.id}>
        <Foto src={pet.foto} alt={pet.nome}/>
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {TextService.Limitartexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
              <Button variant={'contained'}fullWidth>
                Adotar{pet.nome}
              </Button>
          </Informacoes>
      </Itemlista>
      ))}
    </ListaStyled>
  )
}