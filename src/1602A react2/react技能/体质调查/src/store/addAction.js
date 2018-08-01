export default function addAction(payload,id,type='TODOLIST'){
    return {
        type,
        payload,
        id
    }
}