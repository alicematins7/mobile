import { Entypo, MaterialIcons } from '@expo/vector-icons'; import React from "react"
import{
  View, 
  KeyboardAvoidingView,
  Text,
  TextInput
 } from "react-native"
import { colors } from '../../styles/colors';
import { styles } from "./styles"

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
                </KeyboardAvoidingView>
        </View>
    )
}