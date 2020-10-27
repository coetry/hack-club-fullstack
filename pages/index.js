import Nav from "../components/nav";

export default function IndexPage({ user }) {
  return (
    <div>
      <div className="py-20">
        {user ? (
          <h1 className="text-5xl text-center text-accent-1">
            Hi, {user.username}!
          </h1>
        ) : (
          <h1 className="text-5xl text-center text-accent-1">
            Next.js + Tailwind CSS
          </h1>
        )}
      </div>
    </div>
  );
}
