import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import HomeScreen from './app/screens/HomeScreen';
import { ThemeProvider } from './app/constants/theme';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    'light': require('./app/constants/fonts/oktah_round_light-BF6407f0ed773d3.otf'),
    'bold-italic': require('./app/constants/fonts/oktah_round_bold_italic-BF6407f0ed72273.otf'),
    'round-light': require('./app/constants/fonts/Fontspring-DEMO-oktah_round_light-BF6407f0f62843b.otf'),
    'round-light-italic': require('./app/constants/fonts/Fontspring-DEMO-oktah_round_light_italic-BF6407f0f68acb5.otf'),
    'regular': require('./app/constants/fonts/Fontspring-DEMO-oktah_round_regular-BF6407f0f67a04a.otf'),
    'regular-light': require('./app/constants/fonts/Fontspring-DEMO-oktah_round_regular_italic-BF6407f0f67d91f.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App