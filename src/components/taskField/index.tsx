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
            {/* Delete Icon */}
            {/* Edit Icon */}
            <FSVGButton
                size='small'
                onClick={()=>props.onClickAction(TaskClickAction.EDIT)}
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
