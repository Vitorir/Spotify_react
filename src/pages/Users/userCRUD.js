import React, { Component } from 'react'

const baseURL = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class userCRUD {
    state  = { ...initialState }
    
    clear() {
        this.setState({ user: initialState.user })   
    }

    save() { // incluir novo usuario ( POST ) e alterar um usuario existente ( PUT )
        const user = this.state.user
    }

    render() {
        return(

        )
    }
}