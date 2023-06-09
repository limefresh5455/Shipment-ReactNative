import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import SignIn from "./Screen/SignIn";
import BusinessProfile from "./Screen/BusinessProfile";
import ConfirmEmail from "./Screen/ConfirmEmail";
import SignUp from "./Screen/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmShipment from "./Screen/ConfirmShipment";
import SubmitShipment from "./Screen/SubmitShipment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DownloadShipment from "./Screen/DownloadShipment";
 import Header from "./Screen/Header";
import ShipmentProgressStep from "./Screen/ShipmentProgressStep";
import ShipmentInfo from "./Screen/ShipmentInfo";
import PaymentScreen from "./Screen/PaymentScreen";
import Trial from "./Screen/Trial";

// import Tabs from './Screen/Tabs';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false, headerBackTitleVisible: false }}

          />
          <Stack.Screen
            name="BusinessProfile"
            component={BusinessProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShipmentProgressStep"
            component={ShipmentProgressStep}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="ShipmentInfo"
            component={ShipmentInfo}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="ConfirmShipment"
            component={ConfirmShipment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Submit"
            component={SubmitShipment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmEmail"
            component={ConfirmEmail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

    //   <BusinessProfile/>
    //    <ShipmentProgressStep/>
    //  <Trial/>
    //    <CreateShipment/>
    // <BusinessProfile1/>
    //   <ShipmentInfo/>
    //   <DownloadShipment/>
    //  <SignIn/>
    // <PaymentScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1e6",
  },
});
