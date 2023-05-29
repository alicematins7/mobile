import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

export function ButtonTAkePicture({ onPress, ...rest} : TouchableOpacityProps){
    return (
        <TouchableOpacity style={styles.ball} onPress={onPress} {...rest} />
    )
}