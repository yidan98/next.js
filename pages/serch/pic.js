import styles from "./serch.module.css";

const pic = ({ goodsInfo }) => {
  const { sofaName, pic, price } = goodsInfo;

  return (
    <div>
      <img alt={sofaName} src={pic} className={styles.img} />
      <p>{sofaName}</p>
      <p className="price">
        <span className="sellingPrice">{price}</span>
        <span className="goodsName">円（税込）</span>
      </p>
    </div>
  );
};
export default pic;
