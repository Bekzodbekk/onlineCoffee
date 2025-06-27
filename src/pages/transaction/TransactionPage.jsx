import React from 'react';
import PaymentTypeCard from '../../Components/PaymentTypeCard/PaymentTypeCard';
import Counter from '../../Components/counter/Counter';
import RemoverBtn from '../../Components/removerBtn/RemoverBtn';
import "./TransactionPage.scss";
import { Link } from 'react-router-dom';

const TransactionPage = () => {
  return (
    <div className='transaction'>
      <div className="left-bar">
        <div className="basic-title">
          <h1>Complete seu pedido</h1>
        </div>

        <div className="form-bar">
          <div className="title">
            <img className={"icon"} src={"assets/icons/clientLocate.png"} alt="" />
            <div className="title-content">
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form className='form' action="">
            <input placeholder='CEP' type="text" />
            <input placeholder='Rua' type="text" />

            <div className="form-row">
              <input placeholder='Número' type="text" />
              <input placeholder='Complemento' type="text" />
            </div>

            <div className="form-row">
              <input placeholder='Bairro' type="text" />
              <input placeholder='Cidade' type="text" />
              <input placeholder='UF' type="text" />
            </div>
          </form>
        </div>

        <div className="payment-bar">
          <div className="title">
            <img src="assets/icons/usd.png" alt="usd" />
            <div className="title-icon">
              <h1>Pagamento</h1>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="choose-payment">
            <PaymentTypeCard img={"assets/icons/card.png"} title={"Cartão de crédito"} />
            <PaymentTypeCard img={"assets/icons/bank.png"} title={"cartão de débito"} />
            <PaymentTypeCard img={"assets/icons/kupyura.png"} title={"dinheiro"} />
          </div>
        </div>
      </div>

      <div className="right-bar">
        <div className="basic-title">
          <h1>Cafés selecionados</h1>
        </div>

        <div className="product-confirm-bar">
          {/* Product 1 */}
          <div className="product-item">
            <div className="img">
              <img src="assets/cofe/Coffee.png" alt="Expresso Tradicional" />
            </div>
            <div className="info">
              <p>Expresso Tradicional</p>
              <div className="btns">
                <Counter />
                <RemoverBtn />
              </div>
            </div>
            <div className="price">
              <span>R$ 9,90</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-item">
            <div className="img">
              <img src="assets/cofe/Coffee(2).png" alt="Latte" />
            </div>
            <div className="info">
              <p>Latte</p>
              <div className="btns">
                <Counter />
                <RemoverBtn />
              </div>
            </div>
            <div className="price">
              <span>R$ 9,90</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="price-summary">
            <div className="summary-item">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="summary-item">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button className="confirm-btn">
            <Link to={"/confirm-page"}>CONFIRMAR PEDIDO</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;