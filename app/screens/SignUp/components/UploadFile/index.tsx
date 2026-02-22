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

interface UploadFileProps {
  title: string;
  description: string;
  defaultImg: ImageSourcePropType;
  imgStyle: ImageStyle;
}

export default function UploadFile(props: UploadFileProps) {
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  const handleChoosePicture = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        const uri = response.assets?.[0]?.uri ?? null;
        setImageUri(uri);
      },
    );
  };
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <View>
        <Image
          source={imageUri ? { uri: imageUri } : props.defaultImg}
          style={props.imgStyle}
        />
        <TouchableOpacity onPress={handleChoosePicture}>
          <Text>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
