import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import {TabTypes} from "../../navigation/tab.navigation"
import React, { useCallback, useEffect, useState } from "react";
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import * as Notification from 'expo-notifications';
import { useAuth } from "../../hooks/auth";
import { registerForPushNotificationsAsync } from '../../services/data/Push'
import { IUserLogin } from "../../services/data/User";
import { api } from "../../services/api";

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
});

export function Perfil({ navigation }:TabTypes) {
    const { user, signOut } = useAuth();
    const[isLoading, setIsLoading] = useState(true);
    async function  HandleVoltar(){
        await signOut()
    }
    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);
    useEffect(() => {
        async function fetchToken() {
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);

    return (
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <Text>Perfil</Text>
                    <TouchableOpacity onPress={HandleVoltar}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            )}   
        </>
    )
}

