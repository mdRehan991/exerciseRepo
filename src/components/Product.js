import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Product = props => {
  const [icon, setIcon] = useState(false);

  const iconFun = () => {
    let iconName = icon ? 'heart' : 'heart-outline';
    let colorCode = icon ? '#ff0000' : '#8c8c8c';
    return <Ionicons name={iconName} size={14} color={colorCode} />;
  };

  return (
    <View>
      <View>
        <Image style={styles.image} source={props.productData.path} />
        <View style={styles.container1}>
          <Text style={styles.textNew}>NEW</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => setIcon(!icon)}>
            <View style={styles.heartView}>{iconFun()}</View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.textTop}>{props.productData.text1}</Text>
        <Text style={styles.textMiddle}>{props.productData.text2}</Text>
        <Text style={styles.textMiddle}>{props.productData.text3}</Text>
        <Text style={styles.textEnd}>{props.productData.text4}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: windowWidth / 2 - 15,
    height: windowHeight / 3 - 15,
  },

  container1: {
    width: 35,
    height: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  textNew: {
    color: 'white',
    fontSize: 11,
  },

  container2: {
    position: 'absolute',
    left: windowWidth / 2 - 45,
    top: 7,
  },

  heartView: {
    width: 23,
    height: 23,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container3: {
    width: windowWidth / 2 - 40,
    marginTop: 10,
    marginBottom: 15,
  },

  textTop: {
    fontWeight: '500',
    marginBottom: 5,
  },

  textMiddle: {
    fontWeight: '300',
    marginBottom: 5,
    fontSize: 12,
  },

  textEnd: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default Product;
