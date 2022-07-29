// import Head from "next/head";
// import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>大家好，我是syd</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               {title}
//               <br />
//               {id}
//               <br />
//               {date}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          {" "}
          <Link href="/swiper">
            <a>swiper</a>
          </Link>
          /{" "}
          <Link href="/recommends">
            <a>recommends</a>
          </Link>
          /{" "}
          <Link href="/category">
            <a>category</a>
          </Link>
          /{" "}
          <Link href="/serch">
            <a>serch</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
