import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import BackButton from '../../components/BackButton';
import RadioList from '../../components/RadioList';
import Multislider from '../../components/Multislider';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

const PROP = [
	{
		key: 'cars',
		text: 'Автомобили',
	},
	{
		key: 'knowledge',
		text: 'Знания',
	},
	{
		key: 'health',
		text: 'Красота и медицина',
	},
	{
		key: 'travel',
		text: 'Путешествия',
	},
	{
		key: 'games',
		text: 'Игры',
	},
	{
		key: 'films',
		text: 'Фильмы',
	},
	{
		key: 'music',
		text: 'Музыка',
	},
	{
		key: 'other',
		text: 'Разное',
	},
];

const PROP1 = [
	{
		key: 'title',
		text: 'Название фонда',
	},
];

export default class Filters extends React.Component {
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
									<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
										<View style={{ width: 60, height: 50, top: 10 }}>
											<BackButton />
										</View>
									</TouchableOpacity>
								}
								center={<HeaderTitle title="Фильтры" />}
								right={<HeaderRedTitle title="Очистить" />}
							/>
							<RadioList PROP={PROP} title="Категория" />
							<Multislider title="Стоимость входа" />
							<Multislider title="Призовой фонд" />
							<RadioList PROP={PROP1} title="Фонды" />
							<Button
								buttonTitle="Показать 35"
								onPress={() => this.props.navigation.navigate('MainPageFilters')}
							/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
