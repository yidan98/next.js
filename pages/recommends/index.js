import { useState, useEffect } from "react";
import GoodsCard from "./goodscard";
import axios from "axios";
import Display from "../../components/display";

const localhost = axios.create({
  baseURL: "http://localhost:8080",
});
export default function Recommend() {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    async function getPost() {
      const response = await localhost.get("/goods?configType=4");
      setRecommends(response.data.data);
    }
    getPost();
  }, []);
  return (
    <>
      <Display>
        <main>
          <h1>おすすめ商品</h1>

          <div className="recommends">
            <ul>
              {" "}
              {recommends.map((goodsInfo) => {
                return (
                  <li key={goodsInfo.goodsId}>
                    <GoodsCard goodsInfo={goodsInfo} />
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </Display>

      <style jsx>{`
        li {
          list-style: none;

          width: 200px;
          margin-left: 24px;
        }
        li:hover {
          opacity: 0.7;
        }
        ul {
          display: flex;
        }
      `}</style>
    </>
  );
}
