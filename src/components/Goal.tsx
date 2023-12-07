import { FC } from "react";
import GoalItem from "./Goaltem";

type Goals = {
  goals: {
    id: number;
    title: string;
    description: string;
  }[];
  onDeleteGoal: (id: number) => void
};

const Goal: FC<Goals> = ({ goals, onDeleteGoal }) => {

  const handleDelete = (id: number) => {
    onDeleteGoal(id)
  }

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalItem title={goal.title} description={goal.description} id={goal.id} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default Goal;
