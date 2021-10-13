import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  SectionList,
  View,
} from 'react-native';

const data = [
  {
    title: 'T-shirt :',
    data: ['Tommy Hilfiger', "Men's Longsleeve T-Shirt", 'USD 299'],
  },
  {
    title: 'Coat :',
    data: ['Louis Vuitton', "Men's Slim Fit Coat", 'USD 690'],
  },
  {
    title: 'OverCoat :',
    data: ['Gucci', "Men's Loose Overcoat", 'USD 330'],
  },
  {
    title: 'Tank :',
    data: ['Balenciaga', "Men's Tank", 'USD 155'],
  },
  {
    title: 'Jacket :',
    data: ['Versace', "Men's Longsleeve Jacket", 'USD 799'],
  },
  {
    title: 'Vase Coat :',
    data: ['Prada', "Men's Vase Coat", 'USD 199'],
  },
];

const SectionListTest = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <SectionList
        sections={data}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.content}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {marginHorizontal: 15},

  header: {
    fontSize: 35,
    fontWeight: '500',
    color: 'steelblue',
    marginVertical: 10,
  },

  container: {
    alignItems: 'center',
    backgroundColor: 'coral',
    marginBottom: 10,
  },

  content: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
});

export default SectionListTest;
