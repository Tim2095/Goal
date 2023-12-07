import { FC } from "react";
import GoalItem from "./Goaltem";

type Goals = {
  goals: {
    id: number;
    title: string;
    description: string;
  }[];
};

const Goal: FC<Goals> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalItem title={goal.title} description={goal.description} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default Goal;
