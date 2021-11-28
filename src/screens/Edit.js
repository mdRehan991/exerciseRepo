import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';

const {width} = Dimensions.get('window');
const os = Platform.OS;

const Edit = ({navigation, route}) => {
  const [state, setState] = useState({
    id: route.params.id,
    email: route.params.email,
    first_name: route.params.first_name,
    last_name: route.params.last_name,
    avatar: route.params.avatar,
    username: route.params.username,
    isSelected: route.params.isSelected,
  });
  const [editable, setEditable] = useState(false);

  const regMail = /^([a-z 0-9 \. -]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

  const dispatch = useDispatch();
  const updateApi = val => dispatch({type: 'UPDATE_API', payload: val});

  const saveFunction = () => {
    if (state.email !== '' && state.username !== '') {
      if (regMail.test(state.email)) {
        updateApi(state);
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Invalid E-mail Address !',
          'Should be like: example@gmail.com',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
          ],
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <View>
            <Image style={styles.image} source={{uri: state.avatar}} />
            <TouchableOpacity
              style={styles.editContainer}
              activeOpacity={0.8}
              onPress={() => setEditable(!editable)}>
              <Image
                style={styles.editImage}
                source={require('../assets/icons/edit.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.nameContainer}>
            <TextInput
              style={[
                styles.nameInput,
                styles.nameMargin,
                editable ? styles.nameBorder : null,
              ]}
              defaultValue={state.first_name}
              maxLength={10}
              editable={editable}
              onChangeText={val => setState({...state, first_name: val})}
            />
            <TextInput
              style={[styles.nameInput, editable ? styles.nameBorder : null]}
              defaultValue={state.last_name}
              maxLength={10}
              editable={editable}
              onChangeText={val => setState({...state, last_name: val})}
            />
          </View>
          <Text style={styles.text2}>Senior Designer</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            defaultValue={state.email}
            onChangeText={val => setState({...state, email: val})}
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="@username"
            defaultValue={state.username}
            onChangeText={val => setState({...state, username: val})}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            defaultValue="@Ed1"
            secureTextEntry
          />
          <Text style={styles.label}>Birth Date (Optional)</Text>
          <View style={styles.birthDateContainer}>
            <TextInput style={styles.birthDateInput} defaultValue="14" />
            <TextInput style={styles.birthDateInput} defaultValue="April" />
            <TextInput style={styles.birthDateInput} defaultValue="1994" />
          </View>
        </View>

        <View style={styles.buttonContainerMain}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={saveFunction}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#3a85fd',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  editImage: {
    width: 18,
    height: 18,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: os === 'ios' ? 10 : 5,
  },
  nameInput: {
    height: os === 'ios' ? 30 : 50,
    fontSize: 25,
    fontWeight: '600',
  },
  nameMargin: {
    marginRight: 10,
  },
  nameBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  text2: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
    color: '#808080',
  },
  container2: {
    marginHorizontal: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a6a6a6',
  },
  input: {
    height: os === 'ios' ? 30 : 40,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  birthDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthDateInput: {
    width: width / 3 - 45,
    height: os === 'ios' ? 30 : 40,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  buttonContainerMain: {
    height: 160,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: 'steelblue',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'steelblue',
  },
});

export default Edit;
