import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Goals from "./pages/Goals";
import WorkoutTracker from "./pages/WorkoutTracker";
import WorkoutSchedule from "./pages/WorkoutSchedule";

function App() {

  return (
    <div className="w-96 h-screen mx-auto border bg-white rounded-2xl p-2">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={ <Page1/> } />
        <Route path="/page2" element={ <Page2/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/goals" element={ <Goals/> } />
        <Route path="/workout_tracker" element={ <WorkoutTracker/> } />
        <Route path="/workout_schedule" element={ <WorkoutSchedule/> } />
      </Routes>
    </div>
  )
}

export default App
