import { ChildAsFC } from "./Child";

export default function Parent() {
  return (
    <ChildAsFC color='red' onClick={() => console.log("clicked")}>
      awdawdaw
    </ChildAsFC>
  );
}
