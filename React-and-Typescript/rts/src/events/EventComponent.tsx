export default function EventComponent() {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(e);
  }

  function onDragStart(e: React.DragEvent<HTMLDivElement>) {
    console.log("I am been drag");
    console.log(e.screenX);
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
}
