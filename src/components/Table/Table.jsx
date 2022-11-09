import style from "./Table.module.css";
import {Element} from "../Element/Element";
import {elements} from "../../elements";
import {useState} from "react";
import {DropArea} from "../DropArea/DropArea";


export const Table = () => {
    const first = elements.filter(el => el.area === 'first');
    const second = elements.filter(el => el.area === 'second');
    const third = elements.filter(el => el.area === 'third');
    const lanthanides = elements.filter(el => el.feature === 'lanthanides' || el.feature === 'actinides');
    const [draggedElements, setDraggedElements] = useState([]);
    const [isDrag, setDrag] = useState(false);
    const [isDragToDelete, setDragToDelete] = useState(false);

    return (<>
            <h1 className={style.heading}>Periodic table of elements</h1>
            <div className={style.table}>
                <div className={style.elements__first}>
                    {first.map((element, index) => {
                        return (<Element isCount={false} element={element} key={`${element.number}`}
                                         draggedElements={draggedElements} setDraggedElements={setDraggedElements}
                                         isDrag={isDrag} setDrag={setDrag}/>)
                    })}
                </div>
                <div className={style.elements__second}>
                    {second.map((element, index) => {
                        return (<Element key={`${element.number}`} isCount={false} element={element}
                                         draggedElements={draggedElements} setDraggedElements={setDraggedElements}
                                         setDraggedElements={setDraggedElements} isDrag={isDrag} setDrag={setDrag}/>)
                    })}
                </div>
                <div className={style.elements__third}>
                    {third.map((element, index) => {
                        return (<Element key={`${element.number}`} isCount={false} element={element}
                                         draggedElements={draggedElements} setDraggedElements={setDraggedElements}
                                         setDraggedElements={setDraggedElements} isDrag={isDrag} setDrag={setDrag}/>)
                    })}
                </div>
            </div>
            <div className={style.elements__four}>
                {lanthanides.map((element, index) => {
                    return (<Element key={`${element.number}`} isCount={false} element={element}
                                     draggedElements={draggedElements} setDraggedElements={setDraggedElements}
                                     setDraggedElements={setDraggedElements} isDrag={isDrag} setDrag={setDrag}/>)
                })}
            </div>
                <DropArea isDrag={isDrag} setDrag={setDrag} draggedElements={draggedElements} setDraggedElements={setDraggedElements} isDragToDelete={isDragToDelete} setDragToDelete={setDragToDelete}></DropArea>
        </>)
}