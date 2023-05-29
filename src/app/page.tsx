import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default async function Home() {
  const staticData = await fetch("https://api.github.com/users/matheusburey", {
    next: { revalidate: 2592000 }, // 2592000 = 30 days
  });
  const data: IData = await staticData.json();

  return (
    <>
      <Header user={data} />
      <Main user={data} />
      <Footer user={data} />
    </>
  );
}
