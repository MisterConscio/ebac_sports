import { useSelector } from 'react-redux/es/exports'

import * as S from './styles'

//import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

//type Props = {
//  //itens: Produto[]
//  favoritos: Produto[]
//}

const Header = () => {
  //const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const carrinhoItens = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  //const valorTotal = itens.reduce((acc, item) => {
  //  acc += item.preco
  //  return acc
  //}, 0)
  const valorTotal = carrinhoItens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta" />
        <span>
          {carrinhoItens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
