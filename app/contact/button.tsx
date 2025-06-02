"use client";
export default function Button() {
  console.log("Button component rendered");

  return (
    <div>
      <button onClick={() => alert("Button clicked!")}>Click me</button>
    </div>
  );
}
