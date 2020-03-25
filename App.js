import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import FinishPage2 from "./screens/FinishPage/FinishPage2";

export default class App extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? 25 : 0
          }}
        >
          <FinishPage2 />
        </SafeAreaView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19232F",
    alignItems: "center"
  }
});
