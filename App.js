import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar, View, Dimensions } from 'react-native';

import MainPage from './screens/MainPage/MainPage';
import MainPageFilters from './screens/MainPageFilters/MainPageFilters';
import SignUpPhone from './screens/SignUpPhone/SignUpPhone';
import SignUpEmail from './screens/SignUpEmail/SignUpEmail';
import SignInPhone from './screens/SignInPhone/SignInPhone';
import SignInEmail from './screens/SignInEmail/SignInEmail';
import Code from './screens/Code/Code';
import CodeEmail from './screens/CodeEmail/CodeEmail';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import CreateQuiz from './screens/CreateQuiz/CreateQuiz';
import CreateQuestion from './screens/CreateQuestion/CreateQuestion';
import FinishCreate from './screens/FinishCreate/FinishCreate';
import EditQuiz from './screens/EditQuiz/EditQuiz';
import EditQuiz1 from './screens/EditQuiz1/EditQuiz1';
import Filters from './screens/Filters/Filters';
import AboutQuiz from './screens/AboutQuiz/AboutQuiz';
import AboutFond from './screens/AboutFond/AboutFond';
import Question from './screens/Question/Question';
import FinishPage1 from './screens/FinishPage/FinishPage1';
import FinishPage2 from './screens/FinishPage/FinishPage2';
import Results from './screens/Results/Results';
import Categories from './screens/Categories/Categories';
import MyQuiz from './screens/MyQuiz/MyQuiz';
import Achives from './screens/Achives/Achives';
import Profile from './screens/Profile/Profile';
import Achive from './screens/Achive/Achive';
import Balance from './screens/Balance/Balance';
import History from './screens/History/History';
import Help from './screens/Help/Help';
import Settings from './screens/Settings/Settings';
import Answers from './screens/Answers/Answers';
import Participants from './screens/Participants/Participants';
import Fonds from './screens/Fonds/Fonds';
import Quizes from './screens/Quizes/Quizes';

import { AppContextProvider} from './AppContextProvider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export default class App extends React.Component {
	state = {
		value: '',
	};

	render() {
		return (
			<AppContextProvider>
			<NavigationContainer>
				<StatusBar barStyle="light-content" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="SignUpPhone" component={SignUpPhone} />
					<Stack.Screen name="SignUpEmail" component={SignUpEmail} />
					<Stack.Screen name="SignInEmail" component={SignInEmail} />
					<Stack.Screen name="SignInPhone" component={SignInPhone} />
					<Stack.Screen name="Code" component={Code} />
					<Stack.Screen name="CodeEmail" component={CodeEmail} />
					<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
					<Stack.Screen name="MainPage">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;

										if (route.name === 'MainPage') {
											iconName = focused
												? require('./assets/icons/active_home.png')
												: require('./assets/icons/home.png');
										} else if (route.name === 'MyQuiz') {
											iconName = focused
												? require('./assets/icons/active_quiz.png')
												: require('./assets/icons/quiz.png');
										} else if (route.name === 'Achives') {
											iconName = focused
												? require('./assets/icons/active_achive.png')
												: require('./assets/icons/achive.png');
										} else if (route.name === 'Profile') {
											iconName = focused
												? require('./assets/icons/active_profile.png')
												: require('./assets/icons/profile.png');
										}

										// You can return any component that you like here!
										return (
											<Image source={iconName} style={{ width: 25, height: 25, bottom: 10 }} />
										);
									},
								})}
								tabBarOptions={{
									style: {
										borderTopLeftRadius: 21,
										borderTopRightRadius: 21,
										backgroundColor: '#060A10',
										position: 'absolute',
										bottom: -1,
										padding: 15,
										height: 54,
										zIndex: 8,
										borderTopColor: '#060A10',
										borderTopWidth: 0.3
									},
									showLabel: false,
								}}
							>
								<Tab.Screen name="MainPage" component={MainPage} />
								<Tab.Screen name="MyQuiz" component={MyQuiz} />
								<Tab.Screen name="Achives" component={Achives} />
								<Tab.Screen name="Profile" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="MainPageFilters">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;

										if (route.name === 'MainPageFilters') {
											iconName = focused
												? require('./assets/icons/active_home.png')
												: require('./assets/icons/home.png');
										} else if (route.name === 'MyQuiz') {
											iconName = focused
												? require('./assets/icons/active_quiz.png')
												: require('./assets/icons/quiz.png');
										} else if (route.name === 'Achives') {
											iconName = focused
												? require('./assets/icons/active_achive.png')
												: require('./assets/icons/achive.png');
										} else if (route.name === 'Profile') {
											iconName = focused
												? require('./assets/icons/active_profile.png')
												: require('./assets/icons/profile.png');
										}

										return (
											<Image source={iconName} style={{ width: 25, height: 25, bottom: 10 }} />
										);
									},
								})}
								tabBarOptions={{
									style: {
										borderTopLeftRadius: 21,
										borderTopRightRadius: 21,
										backgroundColor: '#060A10',
										position: 'absolute',
										bottom: -1,
										padding: 15,
										height: 54,
										zIndex: 8,
										borderTopColor: '#060A10',
										borderTopWidth: 0.3
									},
									showLabel: false,
								}}
							>
								<Tab.Screen name="MainPageFilters" component={MainPageFilters} />
								<Tab.Screen name="MyQuiz" component={MyQuiz} />
								<Tab.Screen name="Achives" component={Achives} />
								<Tab.Screen name="Profile" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="CreateQuiz" component={CreateQuiz} />
					<Stack.Screen name="CreateQuestion" component={CreateQuestion} />
					<Stack.Screen name="FinishCreate" component={FinishCreate} />
					<Stack.Screen name="EditQuiz" component={EditQuiz} />
					<Stack.Screen name="EditQuiz1" component={EditQuiz1} />
					<Stack.Screen name="Filters" component={Filters} />
					<Stack.Screen name="AboutQuiz" component={AboutQuiz} />
					<Stack.Screen name="AboutFond" >
					{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;

										if (route.name === 'AboutFond') {
											iconName = focused
												? require('./assets/icons/active_home.png')
												: require('./assets/icons/home.png');
										} else if (route.name === 'MyQuiz') {
											iconName = focused
												? require('./assets/icons/active_quiz.png')
												: require('./assets/icons/quiz.png');
										} else if (route.name === 'Achives') {
											iconName = focused
												? require('./assets/icons/active_achive.png')
												: require('./assets/icons/achive.png');
										} else if (route.name === 'Profile') {
											iconName = focused
												? require('./assets/icons/active_profile.png')
												: require('./assets/icons/profile.png');
										}

										// You can return any component that you like here!
										return (
											<Image source={iconName} style={{ width: 25, height: 25, bottom: 10 }} />
										);
									},
								})}
								tabBarOptions={{
									style: {
										borderTopLeftRadius: 21,
										borderTopRightRadius: 21,
										backgroundColor: '#060A10',
										position: 'absolute',
										bottom: -1,
										padding: 15,
										height: 54,
										zIndex: 8,
										borderTopColor: '#060A10',
										borderTopWidth: 0.3
									},
									showLabel: false,
								}}
							>
								<Tab.Screen name="AboutFond" component={AboutFond} />
								<Tab.Screen name="MyQuiz" component={MyQuiz} />
								<Tab.Screen name="Achives" component={Achives} />
								<Tab.Screen name="Profile" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="Question" component={Question} />
					<Stack.Screen name="FinishPage1" component={FinishPage1} />
					<Stack.Screen name="FinishPage2" component={FinishPage2} />
					<Stack.Screen name="Results" component={Results} />
					<Stack.Screen name="Categories">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;

										if (route.name === 'Categories') {
											iconName = focused
												? require('./assets/icons/active_home.png')
												: require('./assets/icons/home.png');
										} else if (route.name === 'MyQuiz') {
											iconName = focused
												? require('./assets/icons/active_quiz.png')
												: require('./assets/icons/quiz.png');
										} else if (route.name === 'Achives') {
											iconName = focused
												? require('./assets/icons/active_achive.png')
												: require('./assets/icons/achive.png');
										} else if (route.name === 'Profile') {
											iconName = focused
												? require('./assets/icons/active_profile.png')
												: require('./assets/icons/profile.png');
										}

										// You can return any component that you like here!
										return (
											<Image source={iconName} style={{ width: 25, height: 25, bottom: 10 }} />
										);
									},
								})}
								tabBarOptions={{
									style: {
										borderTopLeftRadius: 21,
										borderTopRightRadius: 21,
										backgroundColor: '#060A10',
										position: 'absolute',
										bottom: -1,
										padding: 15,
										height: 54,
										zIndex: 8,
										borderTopColor: '#060A10',
										borderTopWidth: 0.3
									},
									showLabel: false,
								}}
							>
								<Tab.Screen name="Categories" component={Categories} />
								<Tab.Screen name="MyQuiz" component={MyQuiz} />
								<Tab.Screen name="Achives" component={Achives} />
								<Tab.Screen name="Profile" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="Achive" component={Achive} />
					<Stack.Screen name="Balance" component={Balance} />
					<Stack.Screen name="History" component={History} />
					<Stack.Screen name="Help" component={Help} />
					<Stack.Screen name="Settings" component={Settings} />
					<Stack.Screen name="Answers" component={Answers} />
					<Stack.Screen name="Participants" component={Participants} />
					<Stack.Screen name="Fonds" component={Fonds} />
					<Stack.Screen name="Quizes" component={Quizes} />
				</Stack.Navigator>
			</NavigationContainer>
			</AppContextProvider>
		);
	}
}
