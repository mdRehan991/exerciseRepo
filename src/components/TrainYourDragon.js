import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const TrainYourDragon = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Product Details</Text>
        </View>

        <View style={styles.middleContainer1}>
          <View style={styles.dragonView}></View>

          <Text>How To Train Your Dragon The Hidden</Text>
          <Text>World</Text>
          <Text style={styles.part3_Text}>Part III</Text>

          <View style={styles.middleButtonsContainer}>
            <TouchableOpacity style={styles.middleButtonsTouchableOpacity}>
              <Text style={styles.middleButtonsText}>Adventure</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middleButtonsTouchableOpacity}>
              <Text style={styles.middleButtonsText}>Family</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middleButtonsTouchableOpacity}>
              <Text style={styles.middleButtonsText}>Fantasy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine}></View>

          {/*   ycl = year country length    */}

          <View style={styles.yclContainer}>
            <View style={styles.yclSubContainer}>
              <Text style={styles.yclText}>Year</Text>
              <Text>2019</Text>
            </View>

            <View style={styles.yclSubContainer}>
              <Text style={styles.yclText}>Country</Text>
              <Text>USA</Text>
            </View>

            <View style={styles.yclSubContainer}>
              <Text style={styles.yclText}>Length</Text>
              <Text>112 min</Text>
            </View>
          </View>

          {/*    mts = Movie Text Screenshot    */}

          <View style={styles.mtsContainer}>
            <Text>About Movie</Text>

            <Text style={styles.mtsText}>
              When Hiccup discovers Toothless isn't the only Night Fury, he must
              seek "The Hidden World", a secret Dragon Utopia before a hired
              tyrant named Grimmel finds it first.
            </Text>

            <Text>Screenshots</Text>
          </View>
        </View>

        <View style={styles.middleContainer2}>
          <View style={styles.screenshotsView}></View>
          <View style={styles.screenshotsView}></View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerText}>BUY TICKET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Header Section
  header: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 12,
  },

  //Middle Container(View) - 1
  middleContainer1: {
    backgroundColor: '#edf0f7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dragonView: {
    width: 250,
    height: 370,
    backgroundColor: '#4682b4',
    borderRadius: 10,
    marginVertical: 25,
  },

  part3_Text: {
    fontSize: 10,
    marginVertical: 10,
  },

  middleButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 65,
  },

  middleButtonsTouchableOpacity: {
    width: 60,
    height: 23,
    borderRadius: 50,
    backgroundColor: '#376bfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },

  middleButtonsText: {
    color: '#fff',
    fontSize: 8,
  },

  horizontalLine: {
    width: windowWidth,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.5,
  },

  yclContainer: {
    flexDirection: 'row',
  },

  yclSubContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  yclText: {
    fontSize: 10,
    fontWeight: '300',
  },

  mtsContainer: {
    margin: 13,
    marginBottom: 0,
  },

  mtsText: {
    fontWeight: '300',
    color: '#8c8c8c',
    marginVertical: 20,
  },

  //Middle Container(View) - 2
  middleContainer2: {
    flexDirection: 'row',
    marginVertical: 15,
  },

  screenshotsView: {
    backgroundColor: '#4682b4',
    width: windowWidth / 2 - 20,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  //Footer Section
  footerContainer: {
    width: windowWidth,
    height: 80,
    backgroundColor: '#edf0f7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerButton: {
    width: windowWidth - 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#376bfb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    color: '#fff',
  },
});

export default TrainYourDragon;
