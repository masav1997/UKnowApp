import React from "react";
import { View, ScrollView, Dimensions, Text } from "react-native";
import Header from "../../components/Header";
import HeaderQuestionTitle from "../../components/HeaderQuestionTitle";
import HeaderQuestionDesc from "../../components/HeaderQuestionDesc";
import BackButton from "../../components/BackButton";
import QuestionBlock from "../../components/Question";
import AnswerBlock from "../../components/AnswerBlock";

export default class Question extends React.Component {
  render() {
    return (
      <View style={{ textAlign: "center", backgroundColor: "#09121C" }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#19232f",
              height: "auto",
              borderBottomLeftRadius: 35,
              borderBottomRightRadius: 35,
              marginBottom: 35
            }}
          >
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <Header
                left={<BackButton />}
                center={<HeaderQuestionTitle title="15:45" />}
                right={<HeaderQuestionDesc question="8 из 15" />}
              />
            </View>
            <QuestionBlock question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" />
          </View>
          <AnswerBlock id="A" answer="Mercedes Benz GlS-2510" />
          <AnswerBlock id="B" answer="Ferrari F350" />
          <AnswerBlock id="C" answer="Lotus MG-13" />
          <AnswerBlock id="D" answer="Жигули Лада 2108" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 20,
              marginTop: 15,
              marginBottom: 25,
              textAlign: "center",
              color: "#FF3358"
            }}
          >
            Пропустить
          </Text>
        </ScrollView>
      </View>
    );
  }
}
