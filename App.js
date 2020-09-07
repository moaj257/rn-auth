import React from 'react';
import Navigation from './Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar translucent={false} style='light' />
      <Navigation />
    </>
  );
}
