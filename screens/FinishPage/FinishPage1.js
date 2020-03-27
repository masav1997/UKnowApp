import React from "react";
import { View, Text, Dimensions } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Quit from "../../components/Quit";

const { height } = Dimensions.get("window");

export default class FinishPage1 extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <Header
          left={<Quit />}
          center={<HeaderTitle title="Викторина закончена" />}
        />
        <View style={{ marginBottom: height / 7 }}></View>
        <View
          style={{
            width: 204,
            height: 70,
            backgroundColor: "#FEAC5E",
            marginBottom: 15,
            alignSelf: "center",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            borderTopRightRadius: 16
          }}
        >
          <Text
            style={{
              textAlign: "center",
              top: 15,
              fontStyle: "normal",
              fontSize: 32,
              textAlign: "center",
              fontWeight: "bold",
              color: "#19232F"
            }}
          >
            1-e место
          </Text>
        </View>
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
          Викторина успешно закончена. Вы выиграли{" "}
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
            1 500 000 руб. + подарки
          </Text>
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 13,
            lineHeight: 16,
            fontWeight: "500",
            color: "#898F97",
            textAlign: "center"
          }}
        >
          Подарки:
        </Text>
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
          Сертификат на покупку техники
        </Text>
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
          Автомобиль
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "bold",
            color: "#FEAC5E",
            textAlign: "center",
            marginBottom: 50
          }}
        >
          Квартира
        </Text>
        <View style={{ position: "absolute", marginTop: height - 79 }}>
          <Button buttonTitle="Продолжить" />
        </View>
      </View>
    );
  }
}