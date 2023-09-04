import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Alert} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface, ComponentLoading} from '../../components';
import { LoginTypes } from "../../navigation/login.navigation"
import { useAuth } from '../../hooks/auth';
import { IUserLogin,IAuthenticate } from '../../services/data/User';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}
export function Login({navigation}: LoginTypes) {
    const { signIn} = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isloading, setIsLoading] = useState(true);
    async function SignIn() {

}
    const [data, setData] = useState<IUserLogin>()
    const [isloading, setIsLoading] = useState(true)
    function handleChange(item: IUserLogin){
        setData({...data, ...item})
    }
    async function handleLogin() {
        try {
            setIsLoading(true) // clicou no botão de salvar
            if(user?.user, user?.token){
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name}.cadastrado!!`) // crase é usada para concatenar variavel e texto no mesmo conteudo
                navigation.navigate("Drawer")
            } else {
                Alert.alert("Preencha todos os campos")
            }
        } catch (error){
            const err = error as AxiosError
            const errorData = err.response?.data as IErrorApi
            let message = ""
            if (errorData){
                for ( const iterator of errorData.errors) {
                    message = `${message} ${iterator.message}`
                }
            }
        Alert.alert(message)
        } finally {
            setIsLoading
        }   
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500) // aguarda meio segundo, e dá falso
    }, [])
    return(
        <> 
        {isloading ? ( // se ele for verdadeiro, dá carregando, se for falso, mostra o formulário
           <ComponentLoading />
    ) : (  
    );
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Entrar" 
                    type="secondary" 
                    onPressI={() => {navigation.navigate('Tab') }} 
                />
                <ComponentButtonInterface 
                    title="Cadastre-se" 
                    type="primary" 
                    onPressI={() => { navigation.navigate('Cadastrar') }} 
                    />
            </KeyboardAvoidingView>
        </View>
    )
}