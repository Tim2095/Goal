import { FC } from "react";

type GoalItemProps = {
  title: string;
  description: string;
};

const GoalItm: FC<GoalItemProps> = ({ title, description }) => {
  return (
    <article>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default GoalItm;
