import { useState, useEffect } from "react";
// import "./style.css";
import axios from "axios";
import styles from "./serch.module.css";
import Pic from "./pic";
import Page from "./page";
// const url = "http://localhost:5000/sofa/";
// const headers = { Accept: "application/json" };
const localhost = axios.create({
  baseURL: "http://localhost:5000",
});
export default function serch() {
  //获取input value的值
  const smit = (e) => {
    console.log("e", e.target.value);
  };

  function fun() {
    //获取所有的 checkbox 属性的 input标签
    let obj = document.getElementsByName("test");
    let check_val = [];
    for (var k in obj) {
      //判断复选框是否被选中
      if (obj[k].checked)
        //获取被选中的复选框的值
        check_val.push(obj[k].value);
      // console.log("objChk", obj[k].checked);
    }
    // var tArea = document.getElementById("view");
    // tArea.value = check_val;
    // console.log("check", check_val);
    return check_val;
  }
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [serch, setSerch] = useState([]);
  const [sofa, setSofa] = useState([]);
  const [sofaAll, setSofaAll] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await localhost.get("/sofa");
      const response2 = await localhost.get("/sofaList");
      console.log(response);
      console.log(response2);
      console.log("jhaha", response.data[0].feature);
      // const response = await localhost.get("/posts");
      // console.log(response.data.data);
      // setSerch(response.data.data);
      setSerch(response.data[0].feature);
      setSofa(response2.data);
      setSofaAll(response2.data);
    }
    getPost();
  }, []);
  //value 取得
  // function hoge(e) {
  //   console.log(e.target.value);
  // }

  // const submitHandler = () => {
  //   // e.preventDefault();
  //   setMessage([...message, input]);
  // };
  //改变上面的框
  const inputHandler = (e) => {
    let obj = document.getElementsByName("test");
    let check_val = [];
    for (var k in obj) {
      //判断复选框是否被选中
      if (obj[k].checked)
        //获取被选中的复选框的值
        check_val.push(obj[k].value);
      setMessage(check_val);
    }
    setInput([e.target.value]);
    console.log("input", input);

    console.log("message", message);

    // if (input) {
    //   setMessage([...message, input]);
    // }
  };
  //delete
  const deleteHandler = (mes) => {
    setMessage(message.filter((m) => m !== mes));
    let obj = document.getElementsByName("test");
    console.log("messageL", message.length);
    for (var k in obj) {
      //判断复选框是否被选中
      if (obj[k].checked && obj[k].value == mes)
        //获取被选中的复选框的值

        obj[k].checked = false;
    }
    if (message.length === 1) {
      console.log("sofaAll", sofaAll);
      setSofa(sofaAll);
    } else {
      const newList = sofa.filter((item) => {
        return item.feature !== mes;
      });
      const newListIn = sofaAll.filter((items) => {
        if (!newList.includes(items)) return items;
      });
      console.log("newList2", newList);
      console.log("newListIn", newListIn);
      setSofa(newListIn);
    }
  };
  //clear all
  const clear = () => {
    setMessage([]);

    let obj = document.getElementsByName("test");

    for (var k in obj) {
      //判断复选框是否被选中
      if (obj[k].checked)
        //获取被选中的复选框的值
        obj[k].checked = false;
    }
    setSofa(sofaAll);
  };
  //filter color
  function filCol(color) {
    const newList = sofa.filter((item) => {
      return item.color === color;
    });

    console.log("newList", newList);
    setSofa(newList);
  }
  //filter feature
  const filFtr = (e) => {
    const newList = sofa.filter((item) => {
      return item.feature === e.target.value;
    });

    console.log("newList", newList);
    setSofa(newList);
  };
  //sorting
  const select = (e) => {
    console.log("select", e.target.value);
    if (e.target.value === "価格の安い順") {
      // const sofa1 = sofa.sort((a, b) => a.price - b.price);
      const sofaCopy = [...sofa];
      sofaCopy.sort((a, b) => a.price - b.price);
      setSofa(sofaCopy);
      // console.log("sort安", sofa1);
    } else if (e.target.value === "価格の高い順") {
      const sofaCopy = [...sofa];
      sofaCopy.sort((a, b) => b.price - a.price);
      setSofa(sofaCopy);
    } else if (e.target.value === "おすすめ順") {
      setSofa(sofaAll);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <button onClick={smit} onChange={submitHandler}>
        s
      </button>
      <button onClick={submitHandler}>y</button> */}
      <div>
        <nav>
          <div>
            <h3>条件で絞り込む</h3>
            <h3>現在絞り込んでいる条件</h3>
            <div>
              {" "}
              <ul>
                {" "}
                {message.map((mes, index) => {
                  return (
                    <div key={index}>
                      <li>{mes} </li>
                      <span onClick={() => deleteHandler(mes)}>✖</span>
                    </div>
                  );
                })}
              </ul>
              {/* <textarea id="view" onClick={() => fun()}></textarea> */}
            </div>
            <button
              className={message.length > 0 ? styles.btn : styles.btn2}
              id="btnClear"
              onClick={() => clear()}
              disabled={message.length > 0 ? false : true}
            >
              <span>全条件をクリア</span>
            </button>
            <h3>機能・仕様</h3>
            <ul>
              {" "}
              {/* {serch.map(() => {
            return "";
          })} */}{" "}
              {serch.map((item, index) => {
                return (
                  <li key={index}>
                    {" "}
                    <input
                      type="checkbox"
                      name="test"
                      value={item}
                      // onClick={() => fun()}
                      // onChange={inputHandler}
                      onClick={(e) => {
                        fun();
                        // submitHandler();
                        // filFtr();
                        inputHandler(e);
                      }}
                      onChange={filFtr}
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
            <h3>カラー</h3>
            <ul>
              <li>
                {" "}
                <input
                  type="checkbox"
                  onClick={(e) => {
                    fun();
                    inputHandler(e);
                  }}
                  onChange={() => filCol("グレー")}
                  // onClick={()=>hoge()}
                  value="グレー"
                  name="test"
                />
                グレー
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  onClick={(e) => {
                    fun();
                    inputHandler(e);
                  }}
                  onChange={() => filCol("ブルー")}
                  value="ブルー"
                  name="test"
                />
                ブルー
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  onClick={(e) => {
                    fun();
                    inputHandler(e);
                  }}
                  onChange={() => filCol("ピンク")}
                  value="ピンク"
                  name="test"
                />
                ピンク
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  onClick={(e) => {
                    fun();
                    inputHandler(e);
                  }}
                  onChange={() => filCol("レッド")}
                  value="レッド"
                  name="test"
                />
                レッド
              </li>
            </ul>
            <h3>タイプ</h3>
            <ul>
              <li>
                {" "}
                <input
                  type="checkbox"
                  onClick={() => fun()}
                  name="test"
                  value="ハイバック(4)"
                  onChange={inputHandler}
                />
                ハイバック(4)
              </li>
            </ul>
            <h3>素材・加工</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" value="羽" onClick={inputHandler} />
                羽(1)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                ポケットコイル(19)
              </li>
            </ul>
            <h3>サイズから選ぶ</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" onClick={inputHandler} value="1人用" />
                1人用(2)
              </li>
              <li>
                {" "}
                <input type="checkbox" onChange={inputHandler} value="2人用" />
                2人用(28)
              </li>
            </ul>
            <h3>商品の説明</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />
                座面硬め(3)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                送料無料(1)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                座面やや硬め(13)
              </li>{" "}
              <li>
                {" "}
                <input type="checkbox" />
                座面ふつう(18)
              </li>{" "}
              <li>
                {" "}
                <input type="checkbox" />
                座面やや柔らかめ(9)
              </li>{" "}
              <li>
                {" "}
                <input type="checkbox" />
                座面柔らかめ(2)
              </li>
            </ul>
            <h3>部屋</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />
                書斎(1)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                一人暮らし(29)
              </li>
            </ul>
            <h3>ソファタイプ</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />
                3人用ソファ(3)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                2人用ソファ(3)
              </li>
            </ul>

            <h3>スタイル</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />
                和(2)
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                シンプル(35)
              </li>
            </ul>
            <h3>価格</h3>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />〜 ¥10,000（4）
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                ¥10,001 〜 ¥30,000（5）
              </li>
            </ul>
          </div>

          <style jsx>
            {`
              li {
                list-style: none;
              }
              nav {
                background-color: #f7f7f7;
                width: 400px;
                margin-left: 30px;
              }
              h3 {
                margin-left: 30px;
              }
              textarea {
                margin-left: 30px;
                height: 50px;
              }
              button {
                margin-left: 30px;
              }
            `}
          </style>
        </nav>
      </div>
      <div>
        <h2>ファブリックソファ</h2>
        <p>
          ニトリのファブリックソファです。コーディネートしやすい布張りソファ。座面のスプリング仕様も豊富で、様々なデザイン、サイズやカラーからお選び頂けます。
        </p>
        <div className={styles.p}>
          <span>
            {" "}
            全{sofa.length}件　1〜 {sofa.length}件
          </span>

          <select onChange={select}>
            <option value="おすすめ順">おすすめ順</option>
            <option value="価格の安い順">価格の安い順</option>
            <option value="価格の高い順">価格の高い順</option>
          </select>
        </div>
        {/* <Pic sofa={sofa}></Pic> */}
        <ul>
          {" "}
          {sofa.map((goodsInfo) => {
            return (
              <li key={goodsInfo.sofaId}>
                <Pic goodsInfo={goodsInfo} />
              </li>
            );
          })}
        </ul>
        <Page></Page>
        <style jsx>
          {`
            li {
              list-style: none;
              margin: 20px;
            }
            ul {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        </style>
      </div>
    </div>
  );
}
