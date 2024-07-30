import { Link } from "react-router-dom";
import { useCategoryContext } from "../context/categoryProvider";
import { useProductNumContext } from "../context/productNumProvider";
import { useCookies } from "react-cookie";

interface Props {
  getCatName?: (v: string) => void;
}

const CartNumber: React.FC = () => {
  const [cookie, setCookie] = useCookies(["ids"]);
  if (cookie.ids instanceof Array) {
    return (
      <>
        <span className={"badge badge-sm indicator-item bg-red-600"}>
          {cookie.ids.length}
        </span>
      </>
    );
  }
  return <></>;
};

export default function Header({ getCatName }: Props) {
  const { productsNum } = useProductNumContext();
  const allCategories = useCategoryContext();
  let CatName = allCategories?.map((v, i) => {
    return (
      <li key={i}>
        <a
          onClick={() => {
            if (getCatName != undefined) {
              getCatName(v);
            }
          }}
        >
          {v}
        </a>
      </li>
    );
  });

  return (
    <div className="navbar bg-base-100 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>
            {CatName}
            <li>
              <Link to={"/About"}>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-orange-500">YO-Chaiyo</a>
      </div>
      <div className="navbarEnd">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <CartNumber />
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-white">
                {productsNum} Items
              </span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link className="btn-block" to={"/cart"}>
                  <button className="btn btn-primary btn-block text-white">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-7 rounded-full object-cover">
              <img
                alt="Tailwind CSS Navbar component"
                src="/78ba53ab-c07c-4834-9141-e2d78b7751ed.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <a className="justify-between text-white">
                Profile
                <span className="badge bg-red-600">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
