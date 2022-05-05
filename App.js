import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View } from "react-native";
import {Text, Stylesheet } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Text>Profile</Text>
      
      <Button onPress={navigation.openDrawer} title="Navigation Panel" />
      <Button
        onPress={() => navigation.navigate("Mobile Resources")}
        title="Go to Mobile Resources"
      />
      <Button
        onPress={() => navigation.navigate("Mobile Project")}
        title="Go to Mobile Project"
      />
    </View>
  );
}

function MobileResourcesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mobile Resources</Text>
      <Button onPress={navigation.openDrawer} title="Navigation Panel" />
      <Button onPress={() => navigation.goBack()} title="Go to Profile" />
      <Button
        onPress={() => navigation.navigate("Mobile Project")}
        title="Go to Mobile Project"
      />
    </View>
  );
}

function MobileProjectScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mobile Project</Text>
      <Button onPress={navigation.openDrawer} title="Navigation Panel" />
      <Button onPress={() => navigation.goBack()} title="Go to Profile" />
      <Button
        onPress={() => navigation.navigate("Mobile Resources")}
        title="Go to Mobile Resources"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Mobile Resources" component={MobileResourcesScreen} />
        <Drawer.Screen name="Mobile Project" component={MobileProjectScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
