import menuList from '../db/menu.json'
import menuTpl from '../templates/menu.hbs'
import { menuContainer } from './refs'

const createMenuMarkup = menuList => menuTpl(menuList)

menuContainer.insertAdjacentHTML('beforeend', createMenuMarkup(menuList))