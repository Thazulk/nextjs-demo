export default async function Contact() {
  console.log("ContactPage rendered");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  console.log("Response from API:", posts);
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the content page of our application.</p>
      <p>Here you can find various articles and resources.</p>
    </div>
  );
}
