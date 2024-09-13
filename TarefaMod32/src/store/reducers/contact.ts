import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contact'

type ContactState = {
  contacts: Contato[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      fullName: 'Gabriel Santos de Oliveira',
      email: 'gabriel@gmail.com',
      phoneNumber: '11985345556'
    },
    {
      id: 2,
      fullName: 'Amanda Vaz de Lima',
      email: 'gabriel@gmail.com',
      phoneNumber: '11985345556'
    },
    {
      id: 3,
      fullName: 'Maria Fernanda Lima',
      email: 'gabriel@gmail.com',
      phoneNumber: '11985345556'
    },
    {
      id: 4,
      fullName: 'Gilda Pereira',
      email: 'gabriel@gmail.com',
      phoneNumber: '11985345556'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    addHandle: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const existsContact = state.contacts.find(
        (t) =>
          t.fullName.toLowerCase() === action.payload.fullName.toLowerCase()
      )

      if (existsContact) {
        alert('Já existe um contato com esse nome!')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    updateHandle: (state, action: PayloadAction<Contato>) => {
      const indexContact = state.contacts.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.contacts[indexContact] = action.payload
      }
    },
    deleteHandle: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { addHandle, updateHandle, deleteHandle } = contactSlice.actions

export default contactSlice.reducer
