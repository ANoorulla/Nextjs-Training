import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  function loadprojectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadprojectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
