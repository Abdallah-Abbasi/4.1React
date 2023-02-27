import './App.css'
import Box1 from './Components/Box1/Box1'
import Box2 from './Components/Box2/Box2'
import Box3 from './Components/Box3/Box3'
import Box4 from './Components/Box4/Box4'
function App() {

return (

  <div className="main">
  <Box1>
    <Box2>
      <Box3>
        <Box4></Box4>
        <Box4></Box4>
      </Box3>
    </Box2>
  </Box1>
</div>
)
}

export default App