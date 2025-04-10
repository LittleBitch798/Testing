import './App.css'
import HLS from './Collaborators/HLS/index'
import { useStore } from './zuStand/index'

function App() {
  const { preferences: { theme }, toggleTheme } = useStore()
  return (
    <>
    <div className={`fixed top-0 left-0 w-screen h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <HLS />
    </div>
      
    </>
  )
}

export default App
