import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HelpBlock from '../../components/HelpBlock';
import BackButton from '../../components/BackButton';
const { width } = Dimensions.get('window');
import { AppConsumer } from '../../AppContextProvider';

export default class Help extends React.Component {
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
												center={<HeaderTitle title="Помощь" />}
											/>
										</View>
									</View>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
									<HelpBlock
										answer="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet"
										question="Как будет осуществляться вывод средств. Какие банковские системы?"
									/>
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
