const HOME_URL = 'https://catawbalanguage.org/'
const DELAY = 2 * 60 * 1000
import { WebView } from 'react-native-webview'
import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity } from 'react-native'
import useTimeout from './useTimeout'
import { useState } from 'react'
export default function App() {
  const [key, setKey] = useState(0)
  const [example, setExample] = useState('no timer')
  const [currentURL, setCurrentURL] = useState(HOME_URL)
  const [restart, clear, isActive] = useTimeout(
    () => {
      setExample('Timed out!')
      if (currentURL !== HOME_URL) {
        setKey((i) => i + 1)
      }
    },
    DELAY,
    false
  )
  const handleNavigation = ({ url }) => {
    // console.log(url)
    if (url !== HOME_URL) {
      setCurrentURL(url)
      restart()
      setExample('setting timer')
    }
  }
  const handlePress = () => {
    if (currentURL !== HOME_URL) {
      setExample('resetting timer')
      restart()
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ flex: 1 }}
      onPress={handlePress}
    >
      {/* <Text>{example}</Text> */}
      <WebView
        key={key}
        style={{ flex: 1 }}
        source={{ uri: HOME_URL }}
        onNavigationStateChange={handleNavigation}
      />
      <StatusBar hidden={true} />
    </TouchableOpacity>
  )
}
