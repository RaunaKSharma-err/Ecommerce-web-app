import "./App.css";

interface Products {
  description: string;
  title: string;
  price: number;
  image: string;
}

interface Props {
  product: Products[];
}
export default function Products({ product }: Props) {
  let finalproduct = product.map((v, i) => {
    return (
      <div key={i} className="product-items w-[100%]">
        <div className="card bg-base-100 w-86 shadow-xl">
          <figure>
            <img src={v.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {v.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>description</p>
            <div className="card-actions justify-center">
              <button className="btn badge badge-outline">Rs{v.price}</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <div className="content grid-cols-3">{finalproduct}</div>
      </div>
    </>
  );
}
