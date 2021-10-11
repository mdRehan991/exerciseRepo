import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;

const Post = ({navigation}) => {
  const [post, setPost] = useState('');

  const func = () => {
    navigation.navigate('Home Screen', {
      postItem: post,
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Post Screen !</Text>
        <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Your Post here..."
          onChangeText={text => setPost(text)}
        />
        </View>
        <CustomButton title="Go to Home Screen" buttonEvent={func} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20,
  },

  view : {
    alignItems : "center",
  },

  textInput: {
    width: windowWidth - 20,
    height: 100,
    textAlign: "center",
    borderWidth: 1,
    borderRadius : 5,
    borderColor: 'steelblue',
    fontSize: 20,
    
    marginBottom: 20,
  },
});

export default Post;
