import { FCheckbox, FIcon, FSelector, FStyledText, FSVGButton } from '../../components'
import { ColorTypes, FontTypes } from '../../assets/types'
import { TaskClickAction } from '../../assets/types'
import * as style from './styles'
import { TaskFieldProps } from './types'

export const TaskField = (props: TaskFieldProps) => {
    const taskName = props.data && props.data.name
    const taskStatus = props.data && props.data.status
    const isComplete = taskStatus.toString() === TaskClickAction.COMPLETE

    return(
        <div className={style.taskDiv}>
            <FCheckbox
                type="circle"
                size='small'
                isToggled={isComplete}
                onClick={()=>props.onClickAction(
                    props.data,
                    isComplete ? TaskClickAction.NEW : TaskClickAction.COMPLETE
                )}
            />
            <FStyledText
                font={FontTypes.B16}
                color={ColorTypes.BLACK}
                decoration={isComplete ? "line-through" : "none"}
                children={taskName}
            />
            <FSVGButton
                size='small'
                onClick={()=>props.onClickAction(
                    props.data,
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
                    props.data,
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
