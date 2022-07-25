import { useState, useEffect } from "react";
// import "./style.css";
import axios from "axios";
// import Recommend from "../recommends";
import Link from "next/link";

// import Display from "../../components/display";

const localhost = axios.create({
  baseURL: "http://localhost:8080",
});

const Category = () => {
  // 解析初始值;
  //   const initialState = [
  //     {
  //       categoryId: 15,
  //       categoryName: "家电",
  //       categoryImage:
  //         "https://www.nitori-net.jp/ecstatic/image/sys-master/images/8993449607198/Bed.jpg",
  //       parentId: 0,
  //       subList: [
  //         {
  //           categoryId: 23,
  //           categoryName: "冰箱",
  //           categoryImage: null,
  //           parentId: 15,
  //         },
  //         {
  //           categoryId: 23,
  //           categoryName: "电视机",
  //           categoryImage: null,
  //           parentId: 15,
  //         },
  //       ],
  //     },
  //     {
  //       categoryId: 17,
  //       categoryName: "数码",
  //       categoryImage:
  //         "https://www.nitori-net.jp/ecstatic/image/sys-master/images/8993449607198/Bed.jpg",
  //       parentId: 0,
  //       subList: [
  //         {
  //           categoryId: 18,
  //           categoryName: "手机",
  //           categoryImage: null,
  //           parentId: 17,
  //         },
  //       ],
  //     },
  //   ];
  const [categories, setCategories] = useState([]);

  //1.查找serach
  useEffect(() => {
    async function getPost() {
      const response = await localhost.get("/categories");
      console.log(response.data.data);
      setCategories(response.data.data);
    }
    getPost();
  }, []);

  console.log(categories);
  // console.log(categories[0].subList[0].categoryName);

  return (
    <>
      <nav>
        <div className="category">
          <div className="global_category">カテゴリ</div>
          <div className="content_category">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category.categoryId}>
                    <div className="parent_category">
                      {category.categoryName}
                    </div>
                    <div className="children_category">
                      <p className="img_category">
                        <img src={category.categoryImage} alt="imgs" />
                        <span style={{ color: "#009e96" }}>
                          {category.categoryName}
                        </span>
                      </p>
                      <ul>
                        {category.secondLevelCategoryVOS.map((list) => {
                          return (
                            <li key={list.categoryId}>{list.categoryName}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }

          nav {
            background-color: rgb(222, 222, 222);
            width: 100%;
          }
          nav .category {
            margin: 0 auto;
            width: 1000px;
            height: 50px;
          }
          nav .category .global_category {
            width: 240px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: #333;
            background-color: #f0f0f0;
          }
          nav .category .global_category:hover + .content_category {
            display: block;
          }
          nav .category .content_category {
            z-index: 100;
            display: none;
            height: 300px;
            width: 1000px;
            border: 1px solid #dbdbdb;
            border-top-width: 0;
            background-color: #fff;
            position: relative;
            overflow: hidden;
          }
          nav .category .content_category:hover {
            display: block;
          }
          nav .category .content_category > ul {
            margin: 0;
            width: 240px;
            height: 100%;
            padding: 0;
            list-style: none;
            overflow: auto;
            overflow-x: hidden;
          }
          nav .category .content_category > ul > li {
            width: 100%;
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            background-color: #f7f7f7;
            border-top: 1px solid #f0f0f0;
          }
          nav .category .content_category > ul > li .parent_category {
            margin-left: 20px;
          }
          nav .category .content_category > ul > li .children_category {
            box-sizing: border-box;
            display: none;
            position: absolute;
            top: 0px;
            left: 240px;
            width: calc(100% - 240px);
            height: 100%;
            padding: 20px;
          }
          nav
            .category
            .content_category
            > ul
            > li
            .children_category
            .img_category {
            display: flex;
            height: 75px;
          }
          nav
            .category
            .content_category
            > ul
            > li
            .children_category
            .img_category
            img {
            width: 70px;
            height: 70px;
          }
          nav
            .category
            .content_category
            > ul
            > li
            .children_category
            .img_category
            span {
            margin-left: 10px;
            line-height: 75px;
            font-size: 40px;
            font-weight: bolder;
          }
          nav .category .content_category > ul > li:hover .children_category {
            display: block;
          }
          nav .category .content_category > ul > li:hover {
            background-color: #fff;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Category;
