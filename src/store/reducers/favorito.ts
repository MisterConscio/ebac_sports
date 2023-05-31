import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      //const favoritos = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
        //state.itens.push(favoritosSemProduto)
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }

