import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.sass";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mockMainPageContent = [
    {
      id: 1,
      title: "New Arrivals",
      description:
        "Discover the latest additions to our collection. From trendy styles to timeless classics, our new arrivals have everything you need to stay on top of your fashion game.",
    },
    {
      id: 2,
      title: "Trending Products",
      description:
        "Explore our most popular items that everyone is talking about. Shop the latest trends and find your perfect style, from statement pieces to everyday essentials.",
    },
    {
      id: 3,
      title: "Seasonal Picks",
      description:
        "Get ready for the season with our curated selection of seasonal favorites. Whether you're looking for summer essentials or winter warmers, we've got you covered with the latest fashion and trends.",
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
            <div className={styles.mainPageContent} key={mainPageContent.id}>
              <h2>{mainPageContent.title}</h2>
              <p>{mainPageContent.description}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}
