import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigation/login.navigation';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface IPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen({ navigation }: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permission) {
    // As permissões da câmera estão sendo carregadas
    return <View />
  }

  if (!permission.granted) {
    // A permissão da câmera ainda não foi dada
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permita o acesso à sua câmera!!</Text>
        <Button onPress={requestPermission} title="Pemissão do Uso da Câmera" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }
  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Uber", asset, true)
    Alert.alert("Imagem salva com sucesso!")
  }
  return (
    <View style={styles.container}>
      {photo && photo.uri ? (
        <>
          <View style={styles.buttonContainer}>
            <View>
              <View style={styles.ladinho}>
                <TouchableOpacity onPress={() => { navigation.navigate('Photo') }}>
                  <Ionicons name="caret-back-circle" size={40} color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={SavePhoto}  /*Para salvar */>
                  <Feather name="save" size={40} color="black" />
                </TouchableOpacity>
              </View>
              <Image source={{ uri: photo.uri }} style={styles.img} />
            </View>
          </View>
        </>
      ) : (
        <Camera style={styles.camera} type={type} ref={ref}>
          <View style={styles.ladinho}>
            <TouchableOpacity onPress={() => navigation.navigate('Photo')} /*Para voltar para o tab */>
              <Ionicons name="caret-back-circle-outline" size={75} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}  /* Para tirar  a foto */>
              <AntDesign name="camerao" size={75} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType} /* Para mudar a câmera */>
              <MaterialCommunityIcons name="camera-flip-outline" size={75} color="black" />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}