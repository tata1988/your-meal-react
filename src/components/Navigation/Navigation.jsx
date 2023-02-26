import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URI } from '../../const';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { Container } from '../Container/Container';
import style from './Navigation.module.css';

export const Navigation = () => {

    const { category, activeCategory } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryRequestAsync('max'))
    }, [])

    return (
        <nav className={style.navigation}>
            <Container>
                <div className={style.container}>
                    <ul className={style.list}>
                        {category.map((item, i) =>
                        (<li key={item.title} className={style.item}>
                            <button
                                className={classNames(
                                    style.button,
                                    activeCategory === i ? style.button_active : '')}
                                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                                onClick={() => {
                                    dispatch(changeCategory({ indexCategory: i }))
                                }}>
                                {item.rus}
                            </button>
                        </li>)
                        )}
                    </ul>
                </div>
            </Container>
        </nav>
    )
}