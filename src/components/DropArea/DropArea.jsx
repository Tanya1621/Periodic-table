import style from "./DropArea.module.css";
import {ElementInCounter} from "../ElementInCounter/ElementInCounter";
import image from "../../delete-button-svgrepo-com.svg";
import {elements} from "../../elements";
import {add, remove} from "../../services/counter/counterSlice";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";


export const DropArea = ({draggedElements, setDraggedElements, isDragToDelete, setDragToDelete, isDrag, setDrag}) => {
    const dispatch = useDispatch();
    const {count} = useSelector(store => store.counter);
    const onDropHandler = (element) => {
        const draggedItem = elements.find(el => el.number === element.id);
        setDraggedElements([...draggedElements, draggedItem]);
        dispatch(add(draggedItem.weight));

    }

    const onDeleteHandler = (element) => {
        const deletedItem = draggedElements.find(el => el.number === element.id);
        const index = draggedElements.indexOf(deletedItem);
        if (index >= 0) {
            dispatch(remove(deletedItem.weight))
            draggedElements.splice(index, 1);
            setDraggedElements([...draggedElements]);
        }

    }

    const [, dropRef] = useDrop({
        accept: 'element',
        drop(itemId) {
            onDropHandler(itemId);
        }
    })


    const borderColor = isDrag ? 'blue' : 'transparent';
    const display = isDragToDelete ? 'flex' : 'none';

    const [{isHover}, deleteRef] = useDrop({
        accept: 'countedElement', collect: monitor => ({
            isHover: monitor.isOver(),
        }), drop(itemId) {
            onDeleteHandler(itemId);
            setDragToDelete(false);
        }

    })

    const opacity = isHover? .7 : 1;

    return (
        <>
            <h2 className={style.drop_area__heading}>Molecular mass calculator</h2>
            <div className={style.drop_area} ref={dropRef} style={{borderColor}}>
                {draggedElements.length === 0 && <p>Drop an element here</p>}
                {draggedElements.map((element, index) => {
                    return <ElementInCounter isDragToDelete={isDragToDelete} setDragToDelete={setDragToDelete}
                                             isCount={true} element={element} key={`${element.number}`}
                                             draggedElements={draggedElements}
                                             setDraggedElements={setDraggedElements}
                                             setDraggedElements={setDraggedElements} isDrag={isDrag}
                                             setDrag={setDrag}/>
                })}
                <div style={{display, opacity}} className={style.delete} ref={deleteRef}><img className={style.delete__image}
                                                                                     src={image} alt='delete'/></div>
            </div>
            <h2 className={style.drop_area__heading}>{`Molecular weight: ${count.toFixed(2) > 0 ? count.toFixed(2) : 0}`}</h2>
        </>)
}