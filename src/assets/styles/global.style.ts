import { ColorTypes } from '@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types'
import { style } from 'typestyle'

export const AppContainer = style({
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", 
    display: "flex", 
    flexDirection: "column",
    backgroundColor: ColorTypes.PUREWHITE
})

export const HeaderContainer = style({
    backgroundColor: ColorTypes.LIGHT_GREYISHWHITE,
    borderBottom: "2px solid "+ColorTypes.BLACK,
    padding: 16
})

export const MainContainer = style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12,
    padding: 16
})

export const MainContainerHeader = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
})