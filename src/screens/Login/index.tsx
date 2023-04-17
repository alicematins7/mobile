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
import { LoginTypes } from '../../navigation/login.navigation';
import { Navigation } from '../../navigation';

export function Login({navigation}: LoginTypes) {
  return(
      <View style={styles.container}>
          <KeyboardAvoidingView>
              <Text style={styles.title}>Login</Text>
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
                      placeholderTextColor={colors.thirdLight}
                      secureTextEntry={true}
                      autoCapitalize="none"
                      style={styles.input}
                  />
              </View>
              <ComponentButtonInterface title="Entrar" type="secondary" onPressI={() => {console.log('Login') }} />
              <ComponentButtonInterface title="Cadastre-se" type="primary" onPressI={() => { navigation.navigate('Cadastro') }} />
          </KeyboardAvoidingView>
      </View>
  )
}