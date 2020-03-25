import React from "react";
import { View, Text, Dimensions } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Quit from "../../components/Quit";

const { height } = Dimensions.get("window");

export default class FinishPage2 extends React.Component {
  render() {
    return (
      <View style={{ textAlign: "center" }}>
        <Header
          left={<Quit />}
          center={<HeaderTitle title="Викторина закончена" />}
        />
        <View style={{ marginBottom: height / 5 }}></View>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 20,
            fontWeight: "bold",
            color: "#FFF",
            marginBottom: 10,
            textAlign: "center"
          }}
        >
          Поздравляем!
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "500",
            color: "#FFF",
            marginBottom: 40,
            textAlign: "center"
          }}
        >
          Викторина успешно закончена. Дождитесь пока все участники закончат.
          Осталось {" "}
          <Text
            style={{
              fontStyle: "normal",
              fontSize: 16,
              lineHeight: 20,
              fontWeight: "bold",
              color: "#FEAC5E",
              textAlign: "center"
            }}
          >
            15 из 250
          </Text>
        </Text>
        <View style={{ position: "absolute", marginTop: height - 79 }}>
          <Button buttonTitle="Продолжить" />
        </View>
      </View>
    );
  }
}
