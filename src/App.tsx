import { useState } from 'react';
import Header from "./components/Header";
import headerLogo from "../src/assets/goal.jpg";
import Goal from "./components/Goal";
import AddGoal from './components/AddGoal';

function App() {

  type CourseGoals = {
    id: number;
    title: string;
    description: string;
  }

  const [goals, setGoals] = useState<CourseGoals[]>([])

  const onAddGoal = (title: string, description: string) => {
    setGoals((prev) => {
      const newGoal = {
        id: Math.random(),
        title: title,
        description: description,
      }
      return [...prev, newGoal]
    })
  }

  const deleteGoalHandler = (id: number) => {
    setGoals((prev) => {
      return prev.filter(goal => goal.id !== id)
    })
  }

  return (
    <main>
      <Header image={{ src: headerLogo, alt: "header logo" }}>
        <h1>The Header</h1>
      </Header>
      <AddGoal handleAddGoal={onAddGoal} />
      <Goal goals={goals}  onDeleteGoal={deleteGoalHandler}/>
    </main>
  );
}

export default App;

