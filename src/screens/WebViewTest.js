import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewTest = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? <ActivityIndicator /> : null}

      <WebView
        source={{uri: 'https://www.w3schools.com/html/'}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </SafeAreaView>
  );
};

export default WebViewTest;
