import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Dimensions, StyleSheet } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

const windowWidth = Dimensions.get('window').width;

const CopyContent =() => {
    const [copiedText, setCopiedText] = useState('');

    const copyContent = () => {
        Clipboard.setString(copiedText);
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <TextInput 
            style={styles.textInput} 
            multiline 
            placeholder="Write something here ..."
            onChangeText={ (val) => setCopiedText(val) } />
            <Button title="Click to Copy above Content" onPress={ () => copyContent()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    textInput: {
        width: windowWidth - 20,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "coral",
        fontSize: 30,
        textAlign: "center",
        color: "coral",
        backgroundColor: "rgba(255, 127, 80, 0.15)",
    }
})
export default CopyContent;