import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentButtonInterface } from "../../components";
import { styles } from "./styles";
import {TabTypes} from "../../navigation/tab.navigation"
import React from "react";

export function Perfil({ navigation }:TabTypes) {
    function HandleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <ComponentButtonInterface title="Voltar" type="secondary" onPressI={HandleVoltar}/>
        </View>
    )
}