import { produce } from 'immer'
import { IPromodoroContext, PROMODORO_ACTIONS } from './types'

const reducer = (state: IPromodoroContext, action: PROMODORO_ACTIONS) => {
    switch (action.type) {
        case 'setNewTask':
            return produce(state, (draft) => {
                draft.tasks.push({
                    taskId: Date.now().toString(),
                    taskName: action.payload,
                    expectedPromodoros: 3,
                    currentPromodoros: 0,
                    createdAt: new Date(),
                })
            })
        case 'removeTask':
            return produce(state, (draft) => {
                draft.tasks = draft.tasks.filter(
                    (t) => t.taskId !== action.payload
                )
            })
        case 'editTask':
            return produce(state, (draft) => {
                const index = draft.tasks.findIndex(
                    (t) => t.taskId === action.payload.taskId
                )
                if (index) {
                    draft.tasks[index] = action.payload
                }
            })
        case 'addTaskPomodoro':
            return produce(state, (draft) => {
                const task = draft.tasks.find(
                    (t) => t.taskId === action.payload
                )
                if (task) {
                    task.currentPromodoros += 1
                }
            })
        default:
            return state
    }
}

export default reducer
