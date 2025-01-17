import style from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__live_icon}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5359 3.4664C15.4885 5.41902 15.4885 8.58484 13.5359 10.5375M6.46479 10.5374C4.51217 8.58481 4.51217 5.41899 6.46479 3.46637M4.10777 12.8945C0.8534 9.64012 0.8534 4.36374 4.10777 1.10938M15.8929 1.10941C19.1473 4.36378 19.1473 9.64016 15.8929 12.8945M11.667 7.00193C11.667 7.92241 10.9208 8.6686 10.0003 8.6686C9.07985 8.6686 8.33366 7.92241 8.33366 7.00193C8.33366 6.08146 9.07985 5.33527 10.0003 5.33527C10.9208 5.33527 11.667 6.08146 11.667 7.00193Z"
              stroke="white"
              stroke-width="1.53846"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          LIVE
        </div>
        <div className={style.banner__players}>
          <div className={style.banner__player_1}>Матвеев</div>
          <div className="banner__players-text">vs</div>
          <div className={style.banner__player_2}>Романов</div>
        </div>
        <div className={style.banner__type_sport}>
          Финальный матч - вольная борьба
        </div>
        <button className={style.banner__btn}>Смотреть трансляцию</button>
        <div className={style.banner__live_btn}></div>
      </div>
      <div className={style.banner__dots}>
        <span className={style.banner__dot_notactive}></span>
        <span className={style.banner__dot_active}></span>
        <span className={style.banner__dot_notactive}></span>
        <span className={style.banner__dot_notactive}></span>
        <span className={style.banner__dot_notactive}></span>
        <span className={style.banner__dot_notactive}></span>
      </div>
    </>
  );
};

export default Banner;
