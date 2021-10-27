import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.containerMain}>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Counter</Text>
          </View>
          <View>
            <Text style={styles.text}>{this.props.counterValue}</Text>
          </View>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={this.props.decrementCounter}>
                <Image
                  style={styles.image}
                  source={require('../assets/minusSign.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.props.incrementCounter}>
                <Image
                  style={styles.image}
                  source={require('../assets/plusSign.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  containerMain: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 6,
    borderColor: '#c7ebca',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  counterContainer: {
    position: 'absolute',
  },
  counterText: {
    fontSize: 60,
    color: '#fff',
    opacity: 0.05,
  },
  text: {
    fontSize: 90,
    color: '#6ac872',
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
});

const mapStateToProps = state => {
  return {counterValue: state.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({type: 'INCREMENT_COUNTER'}),
    decrementCounter: () => dispatch({type: 'DECREMENT_COUNTER'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
