import React, {Component, Fragment} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('homeStore', 'editStore')
@observer
class Edit extends Component {
  state = {
    updatedTitle: this.props.route.params.title,
    updatedBody: this.props.route.params.body,
  };

  componentDidMount() {
    this.props.editStore.saveItem(this.props.route.params);
  }

  saveFunction = () => {
    if (
      this.props.route.params.title === '' &&
      this.props.route.params.body === ''
    ) {
      if (this.state.updatedTitle) {
        this.props.homeStore.saveApi([
          ...this.props.homeStore.homeStoreState,
          {
            id: this.props.route.params.id,
            title: this.state.updatedTitle,
            body: this.state.updatedBody,
          },
        ]);
        this.props.navigation.navigate('Home');
      }
    } else {
      this.props.homeStore.updateApi(
        this.state,
        this.props.editStore.editStoreState.id,
      );
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.safeViewRest}>
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.inputTitle}
                maxLength={100}
                placeholder="Add Title Here"
                placeholderTextColor="#808080"
                defaultValue={this.props.editStore.editStoreState.title}
                onChangeText={val =>
                  this.setState({...this.state, updatedTitle: val})
                }
              />
            </View>
            <View>
              <View>
                <TextInput
                  style={styles.inputBody}
                  placeholder="Add Note Here"
                  placeholderTextColor="#808080"
                  defaultValue={this.props.editStore.editStoreState.body}
                  multiline={true}
                  onChangeText={val =>
                    this.setState({...this.state, updatedBody: val})
                  }
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.saveFunction}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/checkmark.png')}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safeViewTop: {
    flex: 0,
    backgroundColor: '#5fdac4',
  },
  safeViewRest: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  inputTitle: {
    height: 50,
    paddingLeft: 10,
    fontSize: 23,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#5fdac4',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  inputBody: {
    height: 250,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: '#d9d9d9',
  },
  buttonContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#5fdac4',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  buttonImage: {
    width: 20,
    height: 20,
  },
});

export default Edit;
