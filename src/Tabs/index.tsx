import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Consultas from './Consultas';
import Explorar from './Explorar';
import Perfil from './Perfil';
import Principal from './Principal';

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarStyle: { backgroundColor: '#002851' },
    tabBarActiveTintColor: '#339cff',
    tabBarInactiveTintColor: '#fff',
  };

  const tabs = [
    { id: 1, name: 'Principal', component: Principal, icon: 'home' },
    { id: 2, name: 'Consultas', component: Consultas, icon: 'calendar' },
    { id: 3, name: 'Explorar', component: Explorar, icon: 'search' },
    { id: 4, name: 'Perfil', component: Perfil, icon: 'person' },
  ];

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => <Ionicons name={tab.icon} color={color} size={size} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
