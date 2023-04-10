import { Entypo, MaterialIcons } from '@expo/vector-icons' 
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons' 
import{
  View, 
  KeyboardAvoidingView,
  Text,
  TextInput
 } from "react-native"
import { colors } from '../../styles/colors';
import { styles } from "./styles"
import {ComponentButtonInterface} from "../../components"

export function Login(){
    return (
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.formRow}>
              <MaterialIcons name="email" style={styles.icon} />
              <TextInput
                placeholder='E-mail'
                placeholderTextColor={colors.third}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
            <View style={styles.formRow}>
            <FontAwesome name="key" size={24} color="black" style={styles.icon} />
              <TextInput
                placeholder='Senha'
                placeholderTextColor={colors.third}
                secureTextEntry={true}
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
                <ComponentButtonInterface title="Login" type="primary" onPressI={() => {console.log('Login')}} />
                <ComponentButtonInterface title="Cadastre-se" type="secondary" onPressI={() => {console.log('Cadastro')}} />
                </KeyboardAvoidingView>
        </View>

    )
}