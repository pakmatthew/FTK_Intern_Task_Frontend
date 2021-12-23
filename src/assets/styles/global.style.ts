import { ColorTypes } from '@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types'
import { style } from 'typestyle'

export const AppContainer = style({
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", 
    display: "flex", 
    flexDirection: "column",
    rowGap: 32,
    backgroundColor: ColorTypes.PUREWHITE
})

export const HeaderContainer = style({
    backgroundColor: ColorTypes.PUREWHITE,
    borderBottom: "2px solid "+ColorTypes.BLACK,
    padding: 16
})

export const MainContainer = style({
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    paddingTop: 0
})

export const NewTaskContainer = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24
})

export const NewTaskContainerHeader = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
})

export const CompletedTaskContainer = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
    padding: 16,
    borderTop: "2px dashed "+ColorTypes.BLACK,
    backgroundColor: ColorTypes.GREY
})
