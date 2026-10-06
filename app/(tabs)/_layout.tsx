import { Tabs } from 'expo-router';
export default function TabsLayout(){return <Tabs screenOptions={{headerShown:false}}><Tabs.Screen name="index" options={{title:'Today'}}/><Tabs.Screen name="plan" options={{title:'Plan'}}/><Tabs.Screen name="focus" options={{title:'Focus'}}/><Tabs.Screen name="history" options={{title:'History'}}/></Tabs>}
