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
export interface IErrorApi{
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Login({navigation}: LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);

    async function handleSignIn() {
        try{
            setIsLoading(true);
            console.log(data)
            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!");
                setIsLoading(false);
            }
        } catch(error) {
            console.log(error)
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false);
        }
    }
    //ajustes
    function handleChange(item: IAuthenticate){
        setData({...data, ...item})
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    },[])
    return(
        <>
        {isLoading ? (
          <ComponentLoading />
        ) : (
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
                        onChangeText={(i) => handleChange({ email: i })}
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
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Entrar" 
                    type="secondary" 
                    onPressI={handleSignIn} 
                />
                <ComponentButtonInterface 
                    title="Cadastre-se" 
                    type="primary" 
                    onPressI={() => { navigation.navigate('Cadastrar') }} 
                    />
            </KeyboardAvoidingView>
        </View>
    )}
    </>
  );
}