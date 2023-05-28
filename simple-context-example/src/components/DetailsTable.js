import React, { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";

const DetailsTable = () => {
  const { price } = useContext(PriceContext);
  return (
    <div className="css-details">
      <div className="relative grid min-h-[500px] bg-white p-5 rounded-md shadow-card css-recentOrders">
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-primary">Recent Orders</h2>
          <button
            type="button"
            className="relative px-[10px] py-[5px] bg-primary list-none text-white rounded-md"
          >
            View All
          </button>
        </div>
        <table className="w-full border-collapse mt-[10px]">
          <thead>
            <tr className="text-black border-b p-5">
              <td className="font-semibold p-5">Name</td>
              <td className="font-semibold p-5 text-right">Price</td>
              <td className="font-semibold p-5 text-center">Payment</td>
              <td className="font-semibold p-5 text-right">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black box-border border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Star Refrogerator</td>
              <td className="text-right p-[10px]">{price}</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="deliveredStatus">Delivered</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Speakers</td>
              <td className="text-right p-[10px]">620€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="returndStatus">Return</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Laptop</td>
              <td className="text-right p-[10px]">110€</td>
              <td className="text-center p-[10px]">Due</td>
              <td className="text-right p-[10px]">
                <span className="inProgressStatus">In Progress</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Apple Watch</td>
              <td className="text-right p-[10px]">1200€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="deliveredStatus">Delivered</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Wall Fan</td>
              <td className="text-right p-[10px]">100€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="pendingStatus">Pending</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Adidas Shoes</td>
              <td className="text-right p-[10px]">200€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="returndStatus">Return</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Denim Shirts</td>
              <td className="text-right p-[10px]">100€</td>
              <td className="text-center p-[10px]">Due</td>
              <td className="text-right p-[10px]">
                <span className="inProgressStatus">In Progress</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Casual Shoes</td>
              <td className="text-right p-[10px]">543€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="pendingStatus">Pending</span>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect">
              <td className="p-[10px]">Wall Fan</td>
              <td className="text-right p-[10px]">100€</td>
              <td className="text-center p-[10px]">Paid</td>
              <td className="text-right p-[10px]">
                <span className="pendingStatus">Pending</span>
              </td>
            </tr>
            <tr className="text-black hover:hoverEffect">
              <td className="p-[10px]">Denim Shirts</td>
              <td className="text-right p-[10px]">100€</td>
              <td className="text-center p-[10px]">Due</td>
              <td className="text-right p-[10px]">
                <span className="inProgressStatus">In Progress</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="relative grid min-h-[500px] p-5 bg-white shadow-card rounded-md">
        <div className="cardHeader">
          <h2>Recent Customers</h2>
        </div>
        <table>
          <tbody>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="py-3 px-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img1.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  David
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">Italy</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img2.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Muhammad
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">India</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img3.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Amelia
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">France</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img4.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Olivia
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">USA</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img5.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Amit
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">Japan</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img6.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Ashraf
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">India</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img7.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Diana
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">Malaysia</span>
                </h4>
              </td>
            </tr>
            <tr className="text-black border-b p-5 hover:hoverEffect group">
              <td className="px-3 py-[10px]" width="60px">
                <div className="imgBx">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../assets/img8.jpg")}
                    alt=""
                  />
                </div>
              </td>
              <td className="p-[10px]">
                <h4 className="text-lg font-medium leading-4">
                  Amit
                  <br />
                  <span className="text-black2 text-sm group-hover:text-white">India</span>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsTable;
