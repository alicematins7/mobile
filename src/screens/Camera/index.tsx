import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import React from 'react';
import { useState, useRef } from 'react';
import {styles} from './styles';
import { Alert, Button,Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Feather } from '@expo/vector-icons';

interface IPhoto{
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedida] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos de permissão para acessar sua câmera.</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }
    if (!permissionMedia) {
      // Media permissions are still loading
      return <View />;
    }
  
    if (!permissionMedia.granted) {
      // Media permissions are not granted yet
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>Nós precisamos de permissão para acessar sua galeria.</Text>
          <Button onPress={requestPermissionMedida} title="grant permission" />
        </View>
      );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
    const picture = await ref.current.takePictureAsync()
    setPhoto(picture)
    setTakePhoto(false)
    }
    
    
  }

  async function savePhoto(){
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }

  async function pickImage(){
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }


  return (
    <View style={styles.container}>
      {takePhoto ? (
        <>
        <ComponentButtonInterface title='flip' type='secondary' onPressI={toggleCameraType} />
        <Camera style={styles.camera} type={type}/>
        <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={takePicture} />
        </>
      ):(
        <>
        <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={()=>setTakePhoto(true)} />
        <ComponentButtonInterface title='Abrir Imagem' type='secondary' onPressI={pickImage} />
        <ComponentButtonInterface title='Salvar Imagem' type='secondary' onPressI={savePhoto} />
        {photo && photo.uri && (
          <Image source={{uri: photo!.uri}} style={styles.img} />
        )}
        </>
      )}
    </View>
  );
}
