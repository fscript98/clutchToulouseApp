import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Eroutes from "../Eroutes";
import Acceuil from "../../screens/Acceuil";
import NavigationOptions from "../NavigationOptions";

const HomeStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={NavigationOptions}>
            <Stack.Screen name={Eroutes.HOME_SCREEN} component={Acceuil}/>
        </Stack.Navigator>
    )
}

export default HomeStack