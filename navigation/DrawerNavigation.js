import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator =() =>{
    return(
        <Drawer.DrawerNavigator>
            
            <Drawer.screen name = "Home" component = {TabNavigator}/>
            <Drawer.screen name = "Profile" component = {Profile}/>
        </Drawer.DrawerNavigator>
    )

    }
    export default DrawerNavigator;