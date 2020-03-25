import React from "react";
import { View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from "../../components/Logo";
import ControlTab from "../../components/ControlTab";
import Agreement from "../../components/Agreement";

export default class SignInPhone extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <View style={{width: width - 30,}}>
        <Logo />
        <ControlTab selectedIndex={0}/>
        <Title
          title="Авторизация"
          subtitle="Ещё нет аккаунта?"
          linkTitle="Регистрация."
        />
        <Input
          label="Номер телефона"
          value={this.state.value}
          onChangeText={(text) => this.setState({value: text})}
          keyboardType="phone-pad"
        />
        <Button buttonTitle="Авторизоваться" />
        <Agreement titleName="Авторизоваться" />
      </View>
    );
  }
}
