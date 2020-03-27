import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default class HelpBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: true };
  }
  
  _onShowUnderlay() {
    if(!this.state.pressStatus){
      this.setState({ pressStatus: true});
   } else {
     this.setState({ pressStatus: false});
   }
  }
  render() {
    const { question, answer } = this.props;
    const viewStyle = {
      backgroundColor: "#19232f",
      height: "auto",
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15
    };
    const viewStyle1 = {
      backgroundColor: "#19232f",
      height: "auto",
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15
    };
    const answerStyle = {
      textAlign: "center",
      fontSize: 13,
      fontWeight: "500",
      color: "#FFF",
      textAlign: "left",
      marginLeft:15,
      marginBottom: 15
    };
    return (
      <View style={this.state.pressStatus ? viewStyle : viewStyle1}>
        <TouchableOpacity
          onPress={this._onShowUnderlay.bind(this)}
          style={{ flexDirection: "row" }}
        >
          <View style={{flex: 4}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              lineHeight: 20,
              marginTop: 15,
              marginBottom: 15,
              marginLeft: 15,
              textAlign: "left",
              color: "#fff",
              
            }}
          >
            {question}
          </Text>
          </View>
          <View style={{flex:0.8}}>
          <Image
            source={require("../assets/icons/down.png")}
            style={{width:32, height:34, top:25, left: 15}}
          />
          </View>
          </TouchableOpacity>
          {this.state.pressStatus ? null : <Text style={answerStyle}>{answer}</Text>}
      </View>
    );
  }
}
