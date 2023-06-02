import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.sass";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mockMainPageContent = [
    {
      id: 1,
      title: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "Discover the latest additions to our collection. From trendy styles to timeless classics, our new arrivals have everything you need to stay on top of your fashion game.",
    },
    {
      id: 2,
      title: "Trending Products",
      image:
        "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "Explore our most popular items that everyone is talking about. Shop the latest trends and find your perfect style, from statement pieces to everyday essentials.",
    },
    {
      id: 3,
      title: "Seasonal Picks",
      image:
        "https://images.unsplash.com/photo-1612096536102-93f503aa2419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "Get ready for the season with our curated selection of seasonal favorites. Whether you're looking for summer or winter, we've got you covered with the latest fashion and trends.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>My E-commerce Store</title>
        <meta name="description" content="My e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        {mockMainPageContent.map((mainPageContent) => {
          return (
            <Link
              href={`/${mainPageContent.title}`}
              key={mainPageContent.id}
              style={{
                backgroundImage: `url(${mainPageContent.image}`,
              }}
              className={styles.mainPageContent}
            >
              <h2 className={styles.mainPageContentTitle}>
                {mainPageContent.title}
              </h2>
              <p className={styles.mainPageContentDescription}>
                {mainPageContent.description}
              </p>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
