import style from'./Coins.module.css'

const Coins = ({name, id, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <div className={style.coin_container}>
            <div className={style.coin_row}>
                <div className={style.coin}>
                    <img src={image} alt={id} className={style.coin_img} />
                    <h1 className={style.coin_h1}>{name}</h1>
                    <p className={style.coin_symbol}>{symbol}</p>
                </div>
                <div className={style.coin_data}>
                    <p className={style.coin_price}>${price}</p>
                    <p className={style.coin_volume}>${volume.toLocaleString()}</p>
                    {priceChange <0 ? 
                        (<p className={style.coin_percent, style.red}>{priceChange.toFixed(2)}%</p>)
                        :
                        (<p className={style.coin_percent, style.green}>{priceChange.toFixed(2)}%</p>)
                    }
                    <p className={style.coin_marketcap}>Mkt Cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export const CoinData = () => {
    return (
        <div className={style.coin_container}>
            <div className={style.coin_row}>
                <div className={style.coin}>
                    <p className={style.coin_img}></p>
                    <h1 className={style.coin_h1}>Name</h1>
                    <p className={style.coin_symbol}>Symbol</p>
                </div>
                <div className={style.coin_data}>
                    <p className={style.coin_price}>Price</p>
                    <p className={style.coin_volume}>Volume</p>
                    <p className={style.coin_percent}>Price 24h</p>
                    <p className={style.coin_marketcap}>Market Cap</p>
                </div>
            </div>
        </div>
    )
}

export default Coins
