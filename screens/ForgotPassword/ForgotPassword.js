import React from "react";
import { View, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Logo from "../../components/Logo";
import BackButton from "../../components/BackButton";

export default class ForgotPassword extends React.Component {
  state = {
    email: ""
  };

  render() {
    return (
      <View style={{width: width - 30,}}>
        <Header left={<BackButton />} center={<Logo />} />
        <Title
          title="Забыли пароль?"
          subtitle="Введите адрес эл.почты и мы вышлем вам инструкцию по восстановлению пароля"
        />
        <Input
          label="Эл.почта"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <Button buttonTitle="Восстановить пароль" />
      </View>
    );
  }
}
