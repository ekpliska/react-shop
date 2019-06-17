import React from 'react';
import { Menu as MenuSemantic } from 'semantic-ui-react';

const Menu = () => {
    return (
        <MenuSemantic>
            <MenuSemantic.Item name='browse'>
                Книжный магазин
        	</MenuSemantic.Item>

            <MenuSemantic.Menu position='right'>
                <MenuSemantic.Item name='signup'>
                    Итого 
                    <b>
                        0 руб.
                    </b>
          		</MenuSemantic.Item>

                <MenuSemantic.Item name='help'>
                    Корзина (<b>0</b>)
          		</MenuSemantic.Item>
            </MenuSemantic.Menu>
        </MenuSemantic>
    )
}

export default Menu;
