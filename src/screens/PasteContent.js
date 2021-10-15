import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const windowWidth = Dimensions.get('window').width;

const PasteContent = () => {
  const [content, setContent] = useState('Copied Text will appear here');

  const fetchContent = async () => {
    const data = await Clipboard.getString();
    setContent(data);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
          <Text style={styles.text}> {content}</Text>
          <Button
            title="Click to Paste Copied Content"
            onPress={fetchContent}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
      width: windowWidth -30,
      textAlign: 'center',
    fontSize: 25,
    color: '#666666',
    backgroundColor: 'rgba(255, 127, 80, 0.15)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'coral',
    padding: 10,
    marginVertical: 20,
  },
});
export default PasteContent;
