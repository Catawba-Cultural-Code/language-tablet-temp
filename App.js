import { WebView } from 'react-native-webview'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://catawbalanguage.org' }}
      />
      <StatusBar hidden={true} />
    </View>
  )
}
