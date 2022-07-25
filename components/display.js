import Head from "next/head";
import styles from "./display.module.css";

import Link from "next/link";

export const siteTitle = "Next.js syd Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}></header>
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
      </p>
      <main className={styles.main}>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
