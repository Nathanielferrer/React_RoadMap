import Student from './Student.jsx'
import './App.css'

function App() {
  return (
    <>
      <Student name="Nathaniel" age={19} grade="A" isStudent={true} />
      <Student name="Bianca" age={22} grade="A++" isStudent={true} />
      <Student />
    </>
  )
}

export default App
