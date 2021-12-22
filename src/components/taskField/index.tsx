import { FIcon, FStyledText, FSVGButton } from '@fantaskticedtechlimited/fantasktic-comp-library'
import { ColorTypes, FontTypes } from '@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types'
import { TaskClickAction } from '../../assets/types'
import * as style from './styles'
import { TaskFieldProps } from './types'

export const TaskField = (props: TaskFieldProps) => {
    const taskName = props.data && props.data.name
    
    return(
        <div className={style.taskDiv}>
            {/* Selector */}
            <FStyledText
                font={FontTypes.B16}
                color={ColorTypes.BLACK}
                children={taskName}
            />
            <FSVGButton
                size='small'
                onClick={()=>props.onClickAction(
                    props.data.id,
                    TaskClickAction.DELETE
                )}
            >
                <FIcon
                    size='small'
                    name="delete"
                    strokeColor={ColorTypes.RED}
                />
            </FSVGButton>
            <FSVGButton
                size='small'
                onClick={()=>props.onClickAction(
                    props.data.id,
                    TaskClickAction.EDIT
                )}
            >
                <FIcon
                    size='small'
                    name="input"
                    strokeColor={ColorTypes.DARKGREY}
                />
            </FSVGButton>
        </div>
    )
}
