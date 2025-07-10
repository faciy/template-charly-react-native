import { app_routes } from '../routes/routes';
import { Text, View } from 'react-native';
import { app_colors, app_font_family } from '../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@/screens/home/HomeScreen';
import SettingsScreen from '@/screens/settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={app_routes.home}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <View style={{ alignItems: 'center', gap: 5 }}>
              {/* {focused && (
                <View
                  style={{
                    backgroundColor: app_colors.YELLOW,
                    width: 50,
                    height: 8,
                  }}
                />
              )} */}
              <Icon
                name="house-chimney"
                color={focused ? app_colors.green : app_colors.primary}
                size={20}
              />
            </View>
          ),

          tabBarLabel: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => (
            <>
              <Text
                style={{
                  color: focused ? app_colors.green : app_colors.primary,
                  fontFamily: app_font_family.PoppinsBold,
                }}
              >
                Accueil
              </Text>
            </>
          ),
        }}
        name={app_routes.home}
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <View style={{ alignItems: 'center' }}>
              {/* {focused && (
                <View
                  style={{
                    backgroundColor: app_colors.YELLOW,
                    width: 50,
                    height: 8,
                  }}
                />
              )} */}
              <Icon1
                name="incognito"
                color={focused ? app_colors.green : app_colors.primary}
                size={30}
              />
            </View>
          ),

          tabBarLabel: ({ focused, color }: { focused: boolean; color: string }) => (
            <>
              <Text
                style={{
                  color: focused ? app_colors.green : app_colors.primary,
                  fontFamily: app_font_family.PoppinsBold,
                }}
              >
                Paramètres
              </Text>
            </>
          ),
        }}
        name={app_routes.settings}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
