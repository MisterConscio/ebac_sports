import { useSelector } from 'react-redux'
import { Produto } from '../App'
import ProdutoComponent from '../components/Produto'
import { RootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootReducer) => state.produtos.produtos)

  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  const produtoEstaNosFavoritos = (produto: Produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
