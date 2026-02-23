import React from 'react';
import {
  View,
  Text,
  ImageStyle,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
// Utilities
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

interface UploadFileProps {
  title: string;
  description: string;
  defaultImg: ImageSourcePropType;
  imgStyle: ImageStyle;
  imageUri?: string | null;
  setImageUri: (uri: string | null) => void;
}

export default function UploadFile(props: UploadFileProps) {
  const handleChoosePicture = () => {
    // launchCamera(
    //   {
    //     mediaType: 'photo',
    //     cameraType: 'back',
    //     includeBase64: false,
    //     saveToPhotos: true,
    //   },
    //   response => {
    //     if (response.assets) {
    //       props.setImageUri(response.assets[0]?.uri ?? null);
    //     }
    //   },
    // );
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        const uri = response.assets?.[0]?.uri ?? null;
        props.setImageUri(uri);
      },
    );
  };
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <View>
        <Image
          source={props.imageUri ? { uri: props.imageUri } : props.defaultImg}
          style={props.imgStyle}
        />
        <TouchableOpacity onPress={handleChoosePicture}>
          <Text>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
