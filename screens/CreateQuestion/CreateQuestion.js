import React from "react";
import { View, ScrollView, Dimensions, Text } from "react-native";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import HeaderRedTitle from "../../components/HeaderRedTitle";
import BackButton from "../../components/BackButton";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputBorder from "../../components/InputBorder";
const { width } = Dimensions.get("window");

export default class CreateQuestion extends React.Component {
  state = {
    title: "",
    description: "",
    data: ""
  };
  render() {
    return (
      <View style={{ textAlign: "center", backgroundColor: "#09121C" }}>
        <ScrollView>
          <View style={{ width: width }}>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <Header
                left={<BackButton />}
                center={<HeaderTitle title="Создание викторины" />}
                right={<HeaderRedTitle title="Очистить" />}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#19232f",
              height: "auto",
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 20,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 15,
                color: "#898F97"
              }}
            >
              Вопрос №1
            </Text>
            <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
              <Input
                label="Текст вопроса"
                value={this.state.title}
                onChangeText={text => this.setState({ title: text })}
              />
              <InputBorder
                label="Верный ответ"
                value={this.state.title}
                onChangeText={text => this.setState({ title: text })}
              />
              <Input
                label="Ответ №2"
                value={this.state.title}
                onChangeText={text => this.setState({ title: text })}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  lineHeight: 16,
                  marginBottom: 10,
                  textAlign: "center",
                  color: "#FF3358"
                }}
              >
                + Вариант ответа
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#19232f",
              height: "auto",
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 20,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 15,
                color: "#898F97"
              }}
            >
              Вопрос №2
            </Text>
            <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  lineHeight: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  color: "#FF3358"
                }}
              >
                + Ещё вопрос
              </Text>
            </View>
          </View>
          <Button buttonTitle="Продолжить" />
        </ScrollView>
      </View>
    );
  }
}
