import React, { useEffect, useState } from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput,
    Alert
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign, FontAwesome} from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface, ComponentLoading} from '../../components';
import { LoginTypes } from '../../navigation/login.navigation';
import { IRegister } from '../../services/data/User';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Cadastrar({navigation}: LoginTypes) {
    const [data, setData] = useState<IRegister>()
    const [isloading, setIsLoading] = useState(true)
    function handleChange(item: IRegister){
        setData({...data, ...item})
    }
    async function handleRegister() {
        try {
            setIsLoading(true) // clicou no botão de salvar
            if(data?.name && data.email && data.telefone && data.password){
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name}.cadastrado!!`) // crase é usada para concatenar variavel e texto no mesmo conteudo
                navigation.navigate("Login")

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
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastre-se</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor={colors.thirdLight}
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i) => handleChange({ name : i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i) => handleChange({ email: i})}
                    />
                </View>
                <View style={styles.formRow}>
                        <FontAwesome name="phone" size={24} color="#E32D59" />
                        <TextInput
                            placeholder='Telefone'
                            placeholderTextColor={colors.third}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                            onChangeText={(i) => handleChange({ telefone : i})}
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
                        onChangeText={(i) => handleChange({ password : i})}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Entrar" 
                    type="secondary" 
                    onPressI={handleRegister}
                />
                <ComponentButtonInterface 
                    title="Voltar" 
                    type="primary" 
                    onPressI={() => { navigation.navigate('Login') }}
                />
            </KeyboardAvoidingView>
        </View>  
      )}
      </>
    );
    }