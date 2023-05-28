import {
  ChatBubbleLeftIcon as ChatIcon,
  CurrencyEuroIcon,
  EyeSlashIcon as EyeIcon,
  ShoppingBagIcon as ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import React, { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";

function CardsBox() {
  const { price, setPrice } = useContext(PriceContext);
  return (
    <div data-testid="cardBox" className="css-cardBox">
      <div data-testid="cardViews" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">1,504</div>
          <div className="kpiLabel group-hover:text-white">Daily Views</div>
        </div>
        <div className="iconBx">
          <EyeIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div data-testid="cardSales" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">80</div>
          <div className="kpiLabel group-hover:text-white">Sales</div>
        </div>
        <div className="iconBx">
          <ShoppingCartIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div data-testid="cardComments" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">284</div>
          <div className="kpiLabel group-hover:text-white">Comments</div>
        </div>
        <div className="iconBx">
          <ChatIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div data-testid="cardEarn" className="cardKpi hover:bg-primary group">
        <div onClick={() => setPrice(price + 10)}>
          <div className="kpiValue group-hover:text-white">{price}</div>
          <div className="kpiLabel group-hover:text-white">Earning</div>
        </div>
        <div className="iconBx">
          <CurrencyEuroIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default CardsBox;
