import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {insertNewEmployee} from '../realm/schema';

class Edit extends Component {
  state = {
    id: this.props.route.params.id,
    name: this.props.route.params.name,
    designation: this.props.route.params.designation,
    salary: this.props.route.params.salary,
  };

  saveFunction = async () => {
    if (this.props.route.params.name === '') {
      if (this.state.name && this.state.designation && this.state.salary) {
        insertNewEmployee(this.state);
        this.props.navigation.navigate('Home');
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffc299" />
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.inputTitle}
              maxLength={20}
              placeholder="Enter Name"
              placeholderTextColor="#808080"
              defaultValue={this.state.name}
              onChangeText={val => this.setState({...this.state, name: val})}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputTitle}
              maxLength={20}
              placeholder="Enter Designation"
              placeholderTextColor="#808080"
              defaultValue={this.props.route.params.designation}
              onChangeText={val =>
                this.setState({...this.state, designation: val})
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.inputTitle}
              maxLength={15}
              placeholder="Enter Salary"
              placeholderTextColor="#808080"
              defaultValue={this.props.route.params.salary}
              onChangeText={val => this.setState({...this.state, salary: val})}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonContainer}
          onPress={this.saveFunction}>
          <Image
            style={styles.buttonImage}
            source={require('../assets/checkmark.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
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
    fontSize: 20,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#ffb380',
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
    backgroundColor: '#ffb380',
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
