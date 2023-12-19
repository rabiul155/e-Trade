import Banner from "@/components/Banner/Banner";
import Comments from "@/components/Comments/Comments";
import Contuct from "@/components/Contuct/Contuct";
import TopSell from "@/components/TopSell/TopSell";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopSell></TopSell>
      <Comments></Comments>
      <Contuct></Contuct>
    </div>
  );
}
