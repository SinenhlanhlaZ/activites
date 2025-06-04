/* Removed unused import */
import { View, Text, Image, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}> {/* Missing closing tag */}
      <Text style={styles.title}>Welcome to the App</Text>
      <Image source={{ uri: 'https://www.bluestone.africa/wp-content/uploads/2024/08/logo_blue-120x75.png' }} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /* Missing comma */
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24, /* Missing semi colon */
    color: 'blue'
  },
  logo: {
    width: 100,
    height: 100
  }
});

export default App;
