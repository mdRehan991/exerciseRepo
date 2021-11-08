import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('homeStore')
@observer
class Home extends Component {
  state = {
    id: 0,
    title: '',
    body: '',
  };

  createFunction = () => {
    this.setState({...this.state, id: this.state.id + 1}, () => {
      this.props.navigation.navigate('Edit', this.state);
    });
  };

  deleteNote = id => {
    Alert.alert('Delete this note?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => this.props.homeStore.deleteApi(id),
        style: 'destructive',
      },
    ]);
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.safeViewRest}>
          {this.props.homeStore.homeStoreState == '' ? (
            <View style={styles.header}>
              <Text style={styles.headerText}>you do not have any notes</Text>
            </View>
          ) : null}
          <ScrollView
            style={[
              this.props.homeStore.homeStoreState == ''
                ? styles.listOff
                : styles.listOn,
            ]}
            showsVerticalScrollIndicator={false}>
            {this.props.homeStore.homeStoreState.map((item, i) => (
              <View key={i}>
                <TouchableOpacity
                  style={styles.listButton}
                  onPress={() => this.props.navigation.navigate('Edit', item)}
                  onLongPress={() => this.deleteNote(item.id)}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.body} numberOfLines={3}>
                    {item.body}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.createButton}
            onPress={this.createFunction}>
            <Image
              style={styles.plusSign}
              source={require('../assets/plusMath.png')}
            />
            <Text style={styles.createButtonText}>ADD NEW NOTE</Text>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#808080',
  },
  listOff: {
    flexGrow: 0,
  },
  listOn: {
    flexGrow: 1,
    marginTop: 30,
  },
  listButton: {
    marginBottom: 30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
  },
  body: {
    fontSize: 15,
    color: '#808080',
  },
  createButton: {
    width: 150,
    height: 40,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#5fdac4',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  plusSign: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  createButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#808080',
  },
});

export default Home;
