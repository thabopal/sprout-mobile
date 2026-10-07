import { SQLiteProvider } from 'expo-sqlite';
import { Stack } from 'expo-router';
import { migrateDbIfNeeded } from '@/data/database/migrations';
export default function RootLayout(){return <SQLiteProvider databaseName="sprout.db" onInit={migrateDbIfNeeded}><Stack screenOptions={{headerShown:false}} /></SQLiteProvider>}
