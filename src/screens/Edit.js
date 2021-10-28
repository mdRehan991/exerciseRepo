import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

class Edit extends Component {
  state = {
    updatedTitle: this.props.route.params.title,
    updatedBody: this.props.route.params.body,
  };

  componentDidMount() {
    this.props.saveItem(this.props.route.params);
  }

  saveFunction = () => {
    this.props.updateApi(this.state, this.props.objData.id);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit here !</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.inputTitle}
                maxLength={100}
                defaultValue={this.props.objData.title}
                multiline={true}
                scrollEnabled={false}
                onChangeText={val =>
                  this.setState({...this.state, updatedTitle: val})
                }
              />
            </View>
            <View>
              <View>
                <TextInput
                  style={styles.inputBody}
                  defaultValue={this.props.objData.body}
                  multiline={true}
                  scrollEnabled={false} //This only works in IOS.
                  onChangeText={val =>
                    this.setState({...this.state, updatedBody: val})
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.saveFunction}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    width: 85,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fdcece',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  inputTitle: {
    fontSize: 27,
    fontWeight: '500',
    color: '#ff8080',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  inputBody: {
    fontSize: 20,
    color: '#bfbfbf',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: '#ff8080',
    position: 'absolute',
    bottom: 90,
    right: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ff8080',
  },
});

const mapStateToProps = state => {
  return {objData: state.editRd};
};

const mapDispatchToProps = dispatch => {
  return {
    saveItem: val => dispatch({type: 'SAVE_ITEM', payload: val}),
    updateApi: (titleVal, idVal) => {
        const obj = {
          titleVal: titleVal,
          idVal: idVal,
        }
        dispatch({type: 'UPDATE_API', payload: obj})
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
