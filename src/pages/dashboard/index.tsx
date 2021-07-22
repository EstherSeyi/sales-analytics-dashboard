import styled from "styled-components";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { AiFillPieChart, AiFillEdit } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { RiShieldStarFill } from "react-icons/ri";

import IncomeExpensesChart from "../../components/IncomeExpensesChart";

import smartphone from "../../assets/smartphone.png";
import headset from "../../assets/headset.jpeg";
import camera from "../../assets/camera.jpeg";

const OverviewContainer = styled.section`
  height: 100%;

  .search-input {
    width: 100%;
    padding: 1.5em 0 1.5em 3em;
    background-color: var(--search-bg-blue);
    border-radius: 100px;
    color: var(--primary-blue);

    border: none;

    ::placeholder {
      font-weight: 700;
      color: var(--search-ph-blue);
    }
  }

  .search-input:focus {
    outline: none;
    border: 2px solid var(--primary-blue);
  }

  .search-form {
    margin-bottom: 2em;
  }

  .section-title {
    font-weight: 700;
    color: var(--textbold-blue);
    margin-bottom: 0.75em;
    font-size: 1.125rem;
  }
  .all-totals,
  .total__percent-section {
    display: flex;
    justify-content: space-between;
  }
  .all-totals {
    flex-wrap: wrap;
  }
  .total {
    border: 2px solid var(--sideborder-grey);
    flex: 0 0 100%;
    padding: 1em;
    border-radius: 4px;
    margin-bottom: 1em;
  }

  .products-followers {
    border: 2px solid var(--sideborder-grey);
    display: flex;
    padding: 1em 0.5em;
    border-radius: 6px;
    margin-bottom: 1.5em;
  }

  .total__percent-section {
    margin-bottom: 1em;
  }
  .total__percent {
    font-weight: 700;
  }

  .total__value {
    color: var(--textbold-blue);
    font-weight: bold;
    margin-bottom: 0.25em;
  }
  .total__text {
    color: var(--navtext-grey);
    font-size: 0.75rem;
    font-weight: 700;
  }

  .pop-products-section,
  .income-graph {
    border: 2px solid var(--sideborder-grey);
    border-radius: 6px;
    padding: 1em;
    overflow-x: scroll;
  }

  .income-graph {
    margin-bottom: 1em;
  }

  .products-table__head {
    background-color: var(--search-bg-blue);
  }

  .products-table__head,
  .products-table__row {
    display: flex;
    padding: 0.5em;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--navtext-grey);

    width: 100%;
  }

  .products-table__row {
    color: var(--textbold-blue);
  }

  .products-table,
  .income-graph__box {
    min-width: 800px;
  }

  .income-graph__box {
    height: 250px;
    font-weight: 700;
    color: var(--navtext-grey);
  }

  .photos {
    flex: 0 0 10%;
  }

  .name,
  .date,
  .category,
  .brand,
  .price,
  .status {
    flex: 0 0 14.5%;
    margin-right: 0.5em;
  }

  .status {
    margin-right: 0;
  }

  .sub-text {
    font-size: 10px;
    color: var(--navtext-grey);
  }

  .price-value {
    color: var(--green-text);
  }

  .img-title {
    margin: 0 auto;
    text-align: center;
  }

  .products-followers__p-text {
    color: var(--navtext-grey);
  }

  .products-followers__card {
    flex: 0 0 48%;
    justify-content: center;
  }

  .products-card {
    border-right: 2px solid var(--sideborder-grey);
    margin-right: 0.5em;
    padding-right: 0.5em;
  }

  .title-text {
    margin-bottom: 1.5em;
  }

  .text-success {
    color: var(--green-text);
  }

  .text-danger {
    color: var(--red-text);
  }

  .blue-circle {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid var(--primary-blue);
    background-color: var(--primary-blue);
    border-radius: 9999px;
  }

  .bell-edit-icons {
    margin-bottom: 2em;
  }

  .individual-name {
    margin-top: 1.5em;
  }

  .products-followers__icon-box {
    padding: 0.5em;
    border-radius: 6px;
    background-color: var(--search-bg-blue);
  }

  .general {
    margin-bottom: 2em;
  }

  .rep-graph-box {
    border: 2px solid var(--sideborder-grey);
    padding: 1em;
  }
  .rep-graph-box {
    display: flex;
    margin-bottom: 2em;
  }

  .reputation-graph {
    width: 100%;
  }

  .reputation-graph__line {
    padding: 0.15em 0;
    border-radius: 10px;
    background-color: var(--sideborder-grey);
    position: relative;
  }
  .reputation-graph__line-inner {
    background-color: var(--steller-orange);
    position: absolute;
    left: 0px;
    top: 0px;
    right: 15%;
    padding: 0.15em 0;
    border-radius: 10px;
  }

  .reputation-graph__text {
    margin-bottom: 0.5em;
  }

  .reputation-graph__text {
    font-size: 0.75em;
  }

  .seeall {
    color: var(--seeall-blue);
  }

  .seeall-list {
    border: 2px solid var(--sideborder-grey);
    padding: 0.5em;
    border-radius: 6px;
  }

  .item-image {
    height: 32px;
    width: 48px;
    margin-right: 1em;
  }
  .seeall-list__row {
    margin-bottom: 1em;
  }

  .bell-edit-icons__circle {
    padding: 1em;
    border: 2px solid var(--sideborder-grey);
    border-radius: 9999px;
  }

  @media (min-width: 320px) {
    .total {
      flex: 0 0 48%;
    }
  }

  @media (min-width: 1200px) {
    display: flex;

    .products-table,
    .income-graph__box {
      min-width: 0px;
    }

    .general {
      flex: 1 1 70%;
      border-right: 2px solid var(--sideborder-grey);
      padding-right: 1em;
      margin-bottom: 0;
    }
    .individual {
      flex: 0 0 28%;
      padding-left: 2em;
    }
    .total {
      flex: 0 0 24%;
      margin-bottom: 0px;
    }

    .all-totals,
    .recent-orders-section {
      margin-bottom: 2em;
    }
  }
`;

const Dashboard = () => {
  return (
    <OverviewContainer>
      <div className="general">
        <form className="search-form">
          <input className="search-input" placeholder="Search for product" />
        </form>
        <p className="section-title">Overview</p>
        <div className="all-totals">
          <div className="total">
            <div className="total__percent-section">
              <span className="total__icon">
                <FaShoppingBag color="#ee7d3d" />
              </span>
              <span className="total__percent text-success">+24%</span>
            </div>
            <p className="total__value">$27,340.00</p>
            <span className="total__text">Total Sales</span>
          </div>
          <div className="total">
            <div className="total__percent-section">
              <span className="total__icon">
                <AiFillPieChart color="#9c54e1" />
              </span>
              <span className="total__percent text-danger">-32%</span>
            </div>
            <p className="total__value">$27,340.00</p>
            <span className="total__text">Total Expenses</span>
          </div>
          <div className="total">
            <div className="total__percent-section">
              <span className="total__icon">
                <BsPeopleFill color="#3ca07b" />
              </span>
              <span className="total__percent text-success">+48%</span>
            </div>
            <p className="total__value">$18,260.00</p>
            <span className="total__text">Total Visitors</span>
          </div>
          <div className="total">
            <div className="total__percent-section">
              <span className="total__icon">
                <FaShoppingCart color="#f64445" />
              </span>
              <span className="total__percent text-danger">-12%</span>
            </div>
            <p className="total__value">$11,340.00</p>
            <span className="total__text">Total Orders</span>
          </div>
        </div>
        <div className="income-graph">
          <div className="flex font-bold">
            <p className="mr-4">Income</p>
            <p className="opacity-50">Expenses</p>
          </div>
          <div className="income-graph__box">
            <IncomeExpensesChart />
          </div>
        </div>
        <div className="pop-products-section">
          <p className="section-title">Popular Products</p>
          <div className="products-table">
            <div className="products-table__head">
              <p className="photos">Photos</p>
              <p className="name">Name</p>
              <p className="date">Date</p>
              <p className="category">Category</p>
              <p className="brand">Brand</p>
              <p className="price">Price</p>
              <p className="status">Status</p>
            </div>
            <Row
              photo={headset}
              nameText="Cowboy Hat"
              itemId="#2807856940"
              date="Aug 12, 2020"
              category="Fashion"
              brand="Swallow"
              price="$99.89"
              status="Available"
              viewers="18k viewers"
            />
            <Row
              photo={smartphone}
              nameText="Cowboy Hat"
              itemId="#2807856940"
              date="Aug 12, 2020"
              category="Fashion"
              brand="Swallow"
              price="$99.89"
              status="Available"
              viewers="18k viewers"
            />
          </div>
        </div>
      </div>
      <div className="individual">
        <div className="bell-edit-icons flex justify-between">
          <div className="bell-edit-icons__circle">
            <IoNotifications size={20} />
          </div>
          <div className="bell-edit-icons__circle">
            <AiFillEdit size={20} />
          </div>
        </div>
        <div className="img-title">
          <div className="blue-circle"></div>
          <p className="title-text individual-name font-bold">Konter Pulsa</p>
        </div>

        <div className="products-followers justify-between">
          <div className="flex products-followers__card products-card">
            <div className="products-followers__icon-box">
              <FaShoppingBag />
            </div>
            <div className="ml-4">
              <p className="font-bold">218</p>
              <p className="products-followers__p-text sub-text font-bold">
                products
              </p>
            </div>
          </div>
          <div className="flex products-followers__card followers_card">
            <div className="products-followers__icon-box">
              <BsPeopleFill />
            </div>
            <div className="ml-4">
              <p className="font-bold">2580</p>
              <p className="products-followers__p-text sub-text font-bold">
                Followers
              </p>
            </div>
          </div>
        </div>

        <div className="reputation">
          <p className="section-title">Reputation</p>
          <div className="rep-graph-box">
            <RiShieldStarFill size={30} color="#ff8745" />
            <div className="reputation-graph ml-4">
              <div className="flex justify-between font-bold reputation-graph__text">
                <p>Star Seller</p>
                <p>85%</p>
              </div>
              <div className="reputation-graph__line">
                <div className="reputation-graph__line-inner"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-orders-section">
          <div className="flex justify-between">
            <p className="section-title">Recent Orders</p>
            <p className="font-bold seeall">See All</p>
          </div>

          <div className="seeall-list">
            <div className="seeall-list__row flex justify-between">
              <div className="flex">
                <img
                  className="item-image"
                  src={smartphone}
                  alt="smart phone"
                />
                <div>
                  <p className="font-bold">Redmi 4x</p>
                  <p className="sub-text font-bold">2 minutes Ago</p>
                </div>
              </div>
              <p className="font-bold text-success">+$80.00</p>
            </div>
            <div className="seeall-list__row flex justify-between">
              <div className="flex">
                <img className="item-image" src={headset} alt="headset" />
                <div>
                  <p className="font-bold">Acer E1-421</p>
                  <p className="sub-text font-bold">2 minutes Ago</p>
                </div>
              </div>
              <p className="font-bold text-success">+$80.00</p>
            </div>
            <div className="seeall-list__row flex justify-between">
              <div className="flex">
                <img className="item-image" src={camera} alt="camera" />
                <div>
                  <p className="font-bold">Nikon D3500</p>
                  <p className="sub-text font-bold">2 minutes Ago</p>
                </div>
              </div>
              <p className="font-bold text-success">+$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </OverviewContainer>
  );
};

type RowProps = {
  photo: string;
  nameText: string;
  itemId: string;
  date: string;
  category: string;
  brand: string;
  price: string;
  status: string;
  viewers: string;
};

const Row = ({
  photo,
  nameText,
  itemId,
  date,
  category,
  brand,
  price,
  status,
  viewers,
}: RowProps) => {
  return (
    <div className="products-table__row">
      <p className="photos">
        <img className="item-image" src={photo} alt={nameText} />
      </p>
      <p className="name flex flex-col">
        <span>{nameText}</span>
        <span className="sub-text">{itemId}</span>
      </p>
      <p className="date">{date}</p>
      <p className="category">{category}</p>
      <p className="brand">{brand}</p>
      <p className="price price-value">{price}</p>
      <p className="status flex flex-col">
        <span>{status}</span>
        <span className="sub-text">{viewers}</span>
      </p>
    </div>
  );
};

export default Dashboard;
