import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class AnswerBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: true };
  }
  _onShowUnderlay() {
    if (!this.state.pressStatus) {
      this.setState({ pressStatus: true });
    } else {
      this.setState({ pressStatus: false });
    }
  }
  render() {
    const { answer, id } = this.props;
    const viewStyle = {
      backgroundColor: "#19232f",
      height: "auto",
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
      marginLeft: 15,
      marginRight: 15,
      flexDirection: "row",
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
      flexDirection: "row",
      marginBottom: 15,
      borderColor: "#FF3358",
      borderWidth: 5
    };
    const varStyle = {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "#898F97",
      textAlign: "center",
      marginTop: 15,
      marginBottom: 20
    };
    const varStyle1 = {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#FF3358",
      textAlign: "center",
      marginTop: 15,
      marginBottom: 20
    };
    const answerStyle = {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      color: "#FFF",
      textAlign: "left",
      marginTop: 15,
      marginBottom: 20
    };
    return (
      <View style={this.state.pressStatus ? viewStyle : viewStyle1}>
        <View style={{ flex: 0.8 }}>
          <Text style={this.state.pressStatus ? varStyle : varStyle1}>
            {id}
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <TouchableOpacity
            onPress={this._onShowUnderlay.bind(this)}
          >
            <Text style={answerStyle}>{answer}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
