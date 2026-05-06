import { Container } from "../../Container";
import { Cart } from "./Cart";


export const FeaturedCollection = () => {
  return (
    <section>
      <Container>
        <div className="px-[16px] py-[80px] md:px-0">
          <h2 className="pb-[40px] text-center text-[30px]">
            Featured Collection
          </h2>
          <Cart />
        </div>
      </Container>
    </section>
  );
};
