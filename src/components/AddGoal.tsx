import { FC, FormEvent, useRef } from "react";

type AddGoalProps = {
  handleAddGoal: (title: string, description: string) => void
}

const AddGoal: FC<AddGoalProps> = ({handleAddGoal}) => {

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const enteredTitle = title.current!.value
    const enteredDescription = description.current!.value

    handleAddGoal(enteredTitle, enteredDescription)

  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Goal Title</label>
        <input type="text" id="title" ref={title} />
      </p>
      <p>
        <label htmlFor="description">Goal description</label>
        <input type="text" id="description" ref={description} />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default AddGoal;
