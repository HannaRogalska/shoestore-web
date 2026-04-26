import { Container } from "../components/Container";
import Header from "../components/layout/Header";
import { FeaturedCollection } from "../components/sections/FeaturedCollection/FeaturedCollection";
import { Hero } from "../components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container size="wide">
        <Hero />
      </Container>
      <Container>
        <FeaturedCollection />
      </Container>
    </>
  );
}
