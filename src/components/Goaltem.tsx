import { FC } from "react";

type GoalItemProps = {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void
};

const GoalItm: FC<GoalItemProps> = ({ title, description, id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <article>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default GoalItm;
