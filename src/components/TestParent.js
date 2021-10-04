import React, { Component } from "react";
import { View, Button } from "react-native";
import TestChild from "./TestChild";

class TestParent extends Component {

    constructor() {
        super();
        this.state = {
            count : 0
        };
        console.log("Parent constructor called");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Parent getDerivedStateFromProps called");
        return null;
    }

    componentDidMount() {
        console.log("Parent componentDidMount called");
    }

//..............................

    shouldComponentUpdate() {
        console.log("Parent shouldComponentUpdate called");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("Parent getSnapshotBeforeUpdate called");
        return null;
    }

    componentDidUpdate() {
        console.log("Parent componentDidUpdate called");
    }

//..............................

    componentWillUnmount() {
        console.log("Parent componentWillUnmount called");
    }

//..............................

    countFunction() {
        this.setState({
            count : this.state.count+1
        })
    }

    render() {

        console.log("Parent render called");

        return(
            <View>
                <TestChild count={this.state.count} />
                <Button title="Press Me !!!" onPress={()=>{this.countFunction()}} />
            </View>
        )
    }
}

export default TestParent;