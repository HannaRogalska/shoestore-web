import { Container } from "../../Container";
import { Card } from "./Card";


export const FeaturedCollection = () => {
  return (
    <section>
      <Container>
        <div className="px-4 py-20 md:px-0">
          <h2 className="mb-10 text-center text-2xl md:text-3xl">
            Featured Collection
          </h2>
          <Card />
        </div>
      </Container>
    </section>
  );
};
