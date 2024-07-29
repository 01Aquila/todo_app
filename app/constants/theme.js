// theme.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

const lightTheme = {
  colors: {
    Primary: '#00273E', //001c38, -00273E, 
    Accent: '#14b8a6', // 1ca2f4 , 11ADBF
    Text: '#333333',
    Background: '#F5F5F5',
    Black: '#000000',
    White: "#ffff",
    grey1: "#f5f5f5",
    grey2: "#e0e0e0",
    grey3: "#bdbdbd",
    grey4: '#9e9e9e',
    grey5: '#757575',
    grey6: '#424242',
  },
  // ... other theme properties
};

const darkTheme = {
  colors: {
    Primary: '#001C38', // Darker shade of the original Primary color
    Accent: '#1CA2F4',  // Original Accent color as it works well in both themes
    Text: '#F5F5F5',    // Light color for text
    Background: '#333333', // Dark color for background
    Black: '#000000',
    White: "#ffffff",
    grey1: "#424242",
    grey2: "#757575",
    grey3: "#9e9e9e",
    grey4: '#bdbdbd',
    grey5: '#e0e0e0',
    grey6: '#f5f5f5',
  },
  // ... other theme properties
};

export { lightTheme, darkTheme };

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  // Load theme from AsyncStorage on app start
  useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme === 'dark') {
          setTheme(darkTheme);
        } else {
          setTheme(lightTheme);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
        // If there is an error, default to the light theme
        setTheme(lightTheme);
      }
    }
    loadTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);

    // Save the selected theme to AsyncStorage
    AsyncStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
  };

  // Set the StatusBar style based on the theme
  useEffect(() => {
    StatusBar.setBarStyle(theme === lightTheme ? 'dark-content' : 'light-content');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};