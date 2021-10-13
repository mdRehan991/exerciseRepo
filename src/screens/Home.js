import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTag from '../components/CustomTag';
import Product from '../components/Product';

const windowWidth = Dimensions.get('window').width;

const data = {
  list1: {
    path: {
      uri: 'https://i.pinimg.com/originals/e4/3f/9c/e43f9c840c894dc0a9ac87cad581c1be.png',
    },
    text1: 'Tommy Hilfiger',
    text2: "Men's Longsleeve T-Shirt",
    text3: 'T-Shirt, White/Black/Red',
    text4: 'USD 299',
  },
  list2: {
    path: {
      uri: 'https://i.pinimg.com/originals/e6/52/57/e652575fc77d76386536cd8ac0c24969.jpg',
    },
    text1: 'Louis Vuitton',
    text2: "Men's Slim Fit Coat",
    text3: 'Coat, Blue/Black/Green',
    text4: 'USD 690',
  },
  list3: {
    path: {
      uri: 'https://i.pinimg.com/originals/b4/5d/74/b45d74e5ffb13ca7b2cf47ef16847e1a.jpg',
    },
    text1: 'Gucci ',
    text2: "Men's Loose Overcoat",
    text3: 'Overcoat, Brown/Gray',
    text4: 'USD 330',
  },
  list4: {
    path: {
      uri: 'https://i.pinimg.com/originals/df/5e/fa/df5efa48065e60a42ec3a1b34f4a1309.jpg',
    },
    text1: 'Balenciaga',
    text2: "Men's Tank",
    text3: 'Tank, White/Black/Blue',
    text4: 'USD 155',
  },
  list5: {
    path: {
      uri: 'https://cdn.shopify.com/s/files/1/1083/6796/products/product-image-1051370402_800x.jpg?v=1579327658',
    },
    text1: 'Versace',
    text2: "Men's Longsleeve Jacket",
    text3: 'Jacket, Green/Brown',
    text4: 'USD 799',
  },
  list6: {
    path: {
      uri: 'https://qph.fs.quoracdn.net/main-qimg-d4ef505f1dade4ccbfdb9061db0121c8',
    },
    text1: 'Prada',
    text2: "Men's Vase Coat",
    text3: 'Vase Coat, White/Black',
    text4: 'USD 199',
  },
};

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomWidth: 0.5,
          borderBottomColor: '#b3b3b3',
        }}>
        <View style={{justifyContent: 'center', width: windowWidth / 2}}>
          <Text style={{fontSize: 11, marginLeft: 15}}>195 items</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton title="SORT" iconName="swap-vertical" />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: '100', color: '#bfbfbf'}}>
              |
            </Text>
          </View>
          <CustomButton title="FILTER" iconName="funnel-outline" />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 20,
          }}>
          <CustomTag title="Polo Shirts" />
          <CustomTag title="Dress Shirts" />
          <CustomTag title="Shorts" />
          <CustomTag title="T-Shirts" />
          <CustomTag title="Coats" />
          <CustomTag title="Shirts" />
          <CustomTag title="Jeans" />
          <CustomTag title="Jackets" />
        </View>
      </ScrollView>
      <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 15,
          }}>
          <Product productData={data.list1} />
          <Product productData={data.list2} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 15,
          }}>
          <Product productData={data.list3} />
          <Product productData={data.list4} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 15,
          }}>
          <Product productData={data.list5} />
          <Product productData={data.list6} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
