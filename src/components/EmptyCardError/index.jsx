import Empty from "./Empty";

export default function EmptyCardError() {
  return (
    <div className="empty-card-wrapper w-full">
      <div className="flex justify-center items-center w-full">
        <div>
          <div className="sm:mb-10 mb-5 transform scale-50 sm:scale-100">
            <Empty />
          </div>
          <div data-aos="fade-up" className="empty-content w-full">
            <h1 className="sm:text-xl text-base font-semibold text-center mb-5">
              Ei! Seu carrinho está vazio!
            </h1>
            <a href="/">
              <div className="flex justify-center w-full ">
                <div className="w-[180px] h-[50px] ">
                  <span type="button" className="yellow-btn">
                    Voltar para loja
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
