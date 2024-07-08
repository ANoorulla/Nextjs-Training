import { useRouter } from "next/router";

function ProtofolioProjectPage() {
  const router = useRouter();

  console.log("roter", router);
  console.log("routerPath", router.pathname);
  console.log("roterquery", router.query);

  return (
    <div>
      <h1>The Protofolio Project Page</h1>
    </div>
  );
}

export default ProtofolioProjectPage;
