import { Container } from "../../Container";
import { Cart } from "./Cart";


export const FeaturedCollection = () => {
  return (
    <Container>
      <section className="md:px-[60px] px-[16px] py-[80px]">
        <h2 className="pb-[40px] text-center text-[30px]">
          Featured Collection
        </h2>
        <Cart />
      </section>
    </Container>
  );
};
