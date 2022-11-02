import style from "./Table.module.css";
import {Element} from "../Element/Element";
import {elements, lanthanides} from "../../elements";


export const Table = () => {
    const first = elements.filter(el => el.area === 'first');
    const second = elements.filter(el => el.area === 'second');
    const third = elements.filter(el => el.area === 'third');
    return (
        <>
        <div className={style.table}>
            <div className={style.elements__first}>
                {first.map((element, index) => {
                    return (
                        <Element element={element} key={index} />
                    )})}
            </div>
            <div className={style.elements__second}>
                {second.map((element, index) => {
                    return (
                        <Element element={element} key={index} />
                    )})}
            </div>
            <div className={style.elements__third}>
                {third.map((element, index) => {
                    return (
                        <Element element={element} key={index} />
                    )})}
            </div>
        </div>
    <div className={style.elements__four}>
        {lanthanides.map((element, index) => {
            return (
                <Element element={element} key={index} />
            )})}
    </div>
        </>
    )
}