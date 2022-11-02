import style from "./Element.module.css";


export const Element = ({element}) => {
    const flipCard = (e) => {
        console.log(e.currentTarget);
        e.currentTarget.classList.contains(`${style.flip}`) ?  e.currentTarget.classList.remove(`${style.flip}`):  e.currentTarget.classList.add(`${style.flip}`);
    }
    return (
        <div className={`${style.element} ${element.feature? style[element.feature] : ''} ${element.number === 1? style.doublemargin : '' } ${element.number === 4 || element.number === 12? style.singlemargin : '' } ${element.number === 2 ? style.bigmargin : '' }`} onClick={flipCard}>
            <div className={style.element__back}><p className={style.element__number}>{element.number}</p>
                <p className={style.element__abbr}>{element.abbr}</p>
                <p className={style.element__name}>{element.name}</p></div>
            <div className={style.element__front}>
                <p className={style.element__weight}>{element.weight}</p>
            </div>
        </div>
    )
}