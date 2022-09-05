import Link from "next/link";

const articleDetail = () => {
  return (
    <div>
      <p>Hai</p>
      <br />
      <Link href="/"> Go Back </Link>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3AzuoHqIA5CJixL6DxwrwQbgYNpVo1Su"
//   );
//   const data = await res.json();

//   const paths = data.results.map((detail) => {
//     return {
//       params: { id: detail.id.toString() },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3AzuoHqIA5CJixL6DxwrwQbgYNpVo1Su/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

export default articleDetail;
