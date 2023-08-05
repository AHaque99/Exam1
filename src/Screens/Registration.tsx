import React from "react";
import { View, Text, Button } from "react-native";

const Registration=(props:any)=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const match = {
        'name': 'AHaque99',
        'email' : 'test@gmail.com',
        'password': 'abcd1234'
    }

    const handleOnSubmit = (authData: IAuthProvider)=>{
        if(email === match['email'] && email === match['email'] && password === match['password'])
        {
            console.log("SUCCESSFULL")
            authData.setIsLoggedIn(true)
            // props.navigation.navigate("Counter")
        }
        else
        {
            console.log("FAILED")
        }
    }

    const handleNameInput = (nameInput:string) =>{
        // console.log(nameInput)
        setEmail(nameInput)

    const handleEmailInput = (emailInput:string) =>{
        // console.log(emailInput)
        setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
        // console.log(passInput)
        setPassword(passInput)