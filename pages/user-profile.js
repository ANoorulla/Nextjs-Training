function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(contex) {
  const { params, req, res } = contex;

  return {
    props: {
      username: "Max",
    },
  };
}
