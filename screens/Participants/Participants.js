import React from 'react';
import { View, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ResultsBlock from '../../components/Results';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import Quit from '../../components/Quit';

const { width } = Dimensions.get('window');

export default class Participants extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ width: width - 30, textAlign: 'center' }}>
						<ScrollView>
							<Header
								left={
									<TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}>
										<View style={{ width: 40, height: 35, top: 5 }}>
											<Quit />
										</View>
									</TouchableOpacity>
								}
								center={<HeaderTitle title="Список участников" />}
							/>
							<ResultsBlock id="1" name="Imam Farrhouk" />
							<ResultsBlock id="2" name="Imam Farrhouk" />
							<ResultsBlock id="3" name="Imam Farrhouk" />
							<ResultsBlock id="4" name="Imam Farrhouk" />
							<ResultsBlock id="5" name="Imam Farrhouk" />
							<ResultsBlock id="6" name="Imam Farrhouk" />
							<ResultsBlock id="7" name="Imam Farrhouk" />
							<ResultsBlock id="8" name="Imam Farrhouk" />
							<ResultsBlock id="9" name="Imam Farrhouk" />
							<ResultsBlock id="10" name="Imam Farrhouk" />
							<ResultsBlock id="11" name="Imam Farrhouk" />
							<ResultsBlock id="12" name="Imam Farrhouk" />
							<ResultsBlock id="13" name="Imam Farrhouk" />
							<ResultsBlock id="14" name="Imam Farrhouk" />
							<ResultsBlock id="15" name="Imam Farrhouk" />
							<ResultsBlock id="16" name="Imam Farrhouk" />
							<ResultsBlock id="17" name="Imam Farrhouk" />
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
