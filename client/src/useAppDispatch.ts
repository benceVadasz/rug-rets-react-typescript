import {useDispatch} from "react-redux";

type DispatchTypes = {
    data: {},
    action: (data: {}) => void
}

export function useAppDispatch(data?: object, action?: (data: object) => void) {
    const dispatch = useDispatch()
    if (action && data) {
        dispatch(action(data))
    }
}
