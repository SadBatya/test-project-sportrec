import { ImageList, ImageListItem } from "@mui/material";
import img_1 from "../assets/img/main/img-1.jpg";
import img_2 from "../assets/img/main/img-2.jpg";
import img_3 from "../assets/img/main/img-3.jpg";
import img_4 from "../assets/img/main/img-4.jpg";
import img_5 from "../assets/img/main/img-5.jpg";
import img_6 from "../assets/img/main/img-6.jpg";
import styles from "./Main.module.css";

const imgArr: string[] = [img_1, img_2, img_3, img_4, img_5, img_6];

const Main: React.FC = () => {
  return (
    <main className="main__container">
      <span className={styles.main__text}>
        Спортивная Борьба 12 марта, 2024 в 16:03
      </span>
      <h2 className="main__text_title">
        Илья Бессонов дал интервью для телеканала Россия-1
      </h2>
      <p className="main__text_subtitle">
        Илья Бессонов дал интервью после большого перерыва, где поделился
        секретом своего успеха и рассказал о методиках своих тренировок.
        Спортсмен сделал заявление, что возвращается в спорт и ...{" "}
        <span className="main__text_btn">Читать больше</span>
      </p>
      <ImageList cols={3} gap={10}>
        {imgArr.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item} alt={`img-${index}`} />
          </ImageListItem>
        ))}
      </ImageList>
      <div className={styles.main__post_info}>
        <div className={styles.main__post_views}>4.1k</div>
        <div className={styles.main__post_comments}>4</div>
      </div>
    </main>
  );
};

export default Main;
