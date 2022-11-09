import style from "./Element.module.css";
import React, {useMemo} from 'react';
import {useDrag} from "react-dnd";

export const Element = ({element, setDrag}) => {

    const id = element.number;
    const [{isDragging}, dragRef] = useDrag({
        type: 'element',
        item: {id},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }, [id])

    useMemo(() => {
        setDrag(isDragging);
    }, [isDragging])


    return (
        <div ref={dragRef}
             className={`${style.element} ${element.feature ? style[element.feature] : ''} ${element.number === 1 ? style.doublemargin : ''} ${element.number === 4 || element.number === 12 ? style.singlemargin : ''} ${element.number === 2 ? style.bigmargin : ''}`}>
            <div className={style.element__front}><p className={style.element__number}>{element.number}</p>
                <p className={style.element__abbr}>{element.abbr}</p>
                <p className={style.element__name}>{element.name}</p></div>
        </div>
    )
}

