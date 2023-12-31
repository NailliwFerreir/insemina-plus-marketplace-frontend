import React, { useEffect, useState } from "react";

import { currencyMaskBR } from "../../masks";
import InputQuantityCom from "../Helpers/InputQuantityCom";

export default function ProductsTable({ className }) {
  const [totalValue, setTotalValue] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  const cartProductHandler = async () => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartProduct(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalValue = () => {
    let total = 0;
    cartProduct.forEach((cart) => {
      total += Number(cart.value) * Number(cart.quantity);
    });
    setTotalValue(total.toFixed(2));
  };

  const deleteHandle = (index) => {
    const array = JSON.parse(localStorage.getItem("cart") || "[]");
    array.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(array));
    cartProductHandler();
  };

  useEffect(() => {
    cartProductHandler();
  }, []);

  useEffect(() => {
    calculateTotalValue();
  }, [cartProduct]);

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                Produto
              </td>
              <td className="py-4 whitespace-nowrap text-center">Raça</td>
              <td className="py-4 whitespace-nowrap text-center">Detalhes</td>
              <td className="py-4 whitespace-nowrap text-center">Preço</td>
              <td className="py-4 whitespace-nowrap  text-center">
                Quantidade
              </td>
              <td className="py-4 whitespace-nowrap  text-center">Total</td>
              <td className="py-4 whitespace-nowrap text-right w-[114px]"></td>
            </tr>
            {/* table heading end */}
            {cartProduct?.length > 0 &&
              cartProduct.map((carts, index) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                  key={carts.id}
                >
                  <td className="pl-10  py-4  w-[380px]">
                    <div className="flex space-x-6 items-center">
                      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                        <img
                          src={carts?.productImage}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="font-medium text-[15px] text-qblack">
                          {carts.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className=" flex justify-center items-center">
                      <span className="text-[15px] font-normal">
                        {carts.race}
                      </span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        {carts.category}
                      </span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        {currencyMaskBR(carts.value)}
                      </span>
                    </div>
                  </td>
                  <td className=" py-4">
                    <div className="flex justify-center items-center">
                      <InputQuantityCom
                        calculateAgain={cartProductHandler}
                        productQuantity={carts.quantity}
                        productId={carts.id}
                      />
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        {" "}
                        {currencyMaskBR(
                          (
                            Number(carts.value) * Number(carts.quantity)
                          ).toFixed(2)
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">
                      <button onClick={() => deleteHandle(index)} type="button">
                        <span>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                              fill="#AAAAAA"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            <div className=" flex justify-between  p-5">
              <p className="text-[15px] font-medium text-qblack">Subtotal</p>
              <p className="text-[15px] font-medium text-qred">
                {currencyMaskBR(totalValue)}
              </p>
            </div>
            <tr className="bg-white border-b hover:bg-gray-50"></tr>
            <tr className="bg-white border-b hover:bg-gray-50"></tr>
          </tbody>
        </table>
      </div>
      <div className="w-full sm:flex justify-between mt-4">
        <div className="flex space-x-2.5 items-center">
          <a href="/checkout">
            <button
              disabled={cartProduct.length === 0}
              className="w-[220px] h-[50px] bg-[#F6F6F6] flex justify-center items-center disabled:bg-[#F6F6F6] disabled:cursor-not-allowed"
            >
              <span className="text-sm font-semibold">Finalizar venda</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
