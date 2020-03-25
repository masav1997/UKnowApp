import React from "react";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import AnswersBlock from "../../components/AnswersYes";
import AnswersBlock1 from "../../components/AnswersNo";
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle";
import Quit from "../../components/Quit";

const { width } = Dimensions.get("window");

export default class Answers extends React.Component {
  render() {
    return (
      <View style={{ width: width - 30, textAlign: "center" }}>
        <ScrollView>
        <Header left={<Quit />} center={<HeaderTitle title="Ответы" />} />
        <AnswersBlock id='1' question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" uAnswer="Жигули Лада 2108" answer="Mercedes Benz GlS-2510" />
        <AnswersBlock1 id='2' question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" uAnswer="Жигули Лада 2108" answer="Mercedes Benz GlS-2510" />
        <AnswersBlock id='3' question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" uAnswer="Жигули Лада 2108" answer="Mercedes Benz GlS-2510" />
        <AnswersBlock id='4' question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" uAnswer="Жигули Лада 2108" answer="Mercedes Benz GlS-2510" />
        <AnswersBlock id='5' question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" uAnswer="Жигули Лада 2108" answer="Mercedes Benz GlS-2510" />
        </ScrollView>
      </View>
    );
  }
}
