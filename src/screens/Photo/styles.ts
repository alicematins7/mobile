import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: Dimensions.get('window').width,
    height: '100%'
    }

});
