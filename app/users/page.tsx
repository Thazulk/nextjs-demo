export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1>Users Page</h1>
      <p>This is the content page of our application.</p>
      <p>Here you can find various articles and resources.</p>
      <h2>Users List:</h2>
      {users.map((user: { id: number; name: string }) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
      <p>Users data fetched from an external API.</p>
    </div>
  );
}
