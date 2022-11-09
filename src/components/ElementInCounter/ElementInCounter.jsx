import style from "../Element/Element.module.css";
import React, {useMemo} from "react";
import {useDrag} from "react-dnd";


export const ElementInCounter = ({element, setDragToDelete}) => {
    const id = element.number;

    const [ {isDragging},dragRef] = useDrag({
        type: 'countedElement',
        item: {id},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }, [id])

    useMemo(() => {
        setDragToDelete(isDragging);
    }, [isDragging])


    return (
    <div ref={dragRef} className={`${style.element} ${element.feature? style[element.feature] : ''}`} >
        <div className={style.element__front}><p className={style.element__number}>{element.number}</p>
            <p className={style.element__abbr}>{element.abbr}</p>
            <p className={style.element__name}>{element.name}</p></div>
    </div>)
}