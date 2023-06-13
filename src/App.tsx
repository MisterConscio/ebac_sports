import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { setProdutos } from './store/reducers/produtos'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  //const [produtos, setProdutos] = useState<Produto[]>([])
  //const [carrinho, setCarrinho] = useState<Produto[]>([])
  //const [favoritos, setFavoritos] = useState<Produto[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(setProdutos(res)))
  }, [])

  //function favoritar(produto: Produto) {
  //  if (favoritos.find((p) => p.id === produto.id)) {
  //    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
  //    setFavoritos(favoritosSemProduto)
  //  } else {
  //    setFavoritos([...favoritos, produto])
  //  }
  //}

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
