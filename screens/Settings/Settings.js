import React from 'react';
import { View, ScrollView, Dimensions, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import BackButton from '../../components/BackButton';
import { DarkTheme, LightTheme } from '../../Themes';
import { AppConsumer } from '../../AppContextProvider';

const { width } = Dimensions.get('window');

export default class Settings extends React.Component {
	state = { switchValue: false };
	toggleSwitch = value => {
		this.setState({ switchValue: value });
	};
	render() {
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View style={{ flex: 1, backgroundColor: appConsumer1.theme.colors.bg1, alignItems: 'center' }}>
						<SafeAreaView
							style={{
								paddingTop: Platform.OS === 'android' ? 25 : 0,
							}}
						>
							<View style={{ textAlign: 'center', backgroundColor: appConsumer1.theme.colors.bg1 }}>
								<ScrollView>
									<View style={{ width: width }}>
										<View style={{ marginLeft: 15, marginRight: 15 }}>
											<Header
												left={
													<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
														<View style={{ width: 60, height: 50, top: 10 }}>
															<BackButton />
														</View>
													</TouchableOpacity>
												}
												center={<HeaderTitle title="Настройки" />}
											/>
										</View>
									</View>
									<View style={{ flexDirection: 'row', marginBottom: 10 }}>
										<View style={{ flex: 4 }}>
											<Text
												style={{
													fontSize: 16,
													color: '#898F97',
													marginBottom: 20,
													marginLeft: 15,
												}}
											>
												Уведомления
											</Text>
										</View>
										<View style={{ flex: 1 }}>
											<Switch
												trackColor={{ false: '#898F97', true: '#FF3358' }}
												thumbColor={'#fff'}
												trackWidth={32}
												ios_backgroundColor="#898F97"
												value={false}
											/>
										</View>
									</View>
									<View style={{ flexDirection: 'row' }}>
										<View style={{ flex: 4 }}>
											<Text
												style={{
													fontSize: 16,
													color: '#898F97',
													marginLeft: 15,
												}}
											>
												Светлая тема
											</Text>
										</View>
										<View style={{ flex: 1 }}>
											<Switch
												onValueChange={this.toggleSwitch}
												onChange={() =>
													this.state.switchValue
														? (appConsumer1.updateTheme(DarkTheme),
														  this.setState({ switchValue: true }))
														: (appConsumer1.updateTheme(LightTheme),
														  this.setState({ switchValue: false }))
												}
												value={this.state.switchValue}
												trackColor={{ false: '#898F97', true: '#FF3358' }}
												thumbColor={'#fff'}
												trackWidth={32}
												ios_backgroundColor="#898F97"
											/>
										</View>
									</View>
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
