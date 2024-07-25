import Login from "@/components/forms/Login";

function auth() {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full sm:bg-opacity-50">
        <Login></Login>
      </div>
    </div>
  );
}

export default auth;
