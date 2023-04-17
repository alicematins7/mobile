import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from '../../navigation/login.navigation';

export function Cadastro({navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.primary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="secondary" onPressI={() => { console.log('Salvar') }} />
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={() => { navigation.navigate('Login') }} />
            </KeyboardAvoidingView>
        </View>
    )
}