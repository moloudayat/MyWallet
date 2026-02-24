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
import { launchImageLibrary } from 'react-native-image-picker';
// Styles
import { useStyle } from './index.style';

interface UploadFileProps {
  title: string;
  description: string;
  defaultImg: ImageSourcePropType;
  imgStyle: ImageStyle;
  imageUri?: string | null;
  setImageUri: (uri: string | null) => void;
}

export default function UploadFile(props: UploadFileProps) {
  const styles = useStyle();

  const handleChoosePicture = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.row}>
        <Image
          source={props.imageUri ? { uri: props.imageUri } : props.defaultImg}
          style={[props.imgStyle, styles.image]}
        />
        <TouchableOpacity style={styles.button} onPress={handleChoosePicture}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
