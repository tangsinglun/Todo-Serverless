import { TodoItem } from '../models/TodoItem'
import { TodoAccess } from '../dataLayer/todosAccess'
import { parseUserId } from '../auth/utils'

const todoAccess = new TodoAccess()

export async function getUserTodos(jwtToken): Promise<TodoItem[]> {
  //Extract the UserId From the jwt Token
  const userId = parseUserId(jwtToken)
  //Return all the User's Todo Results 
  return await todoAccess.getUserTodos(userId)
}

export async function deleteUserTodos(todoId, jwtToken) {
  //Extract the UserId From the jwt Token
  const userId = parseUserId(jwtToken)
  await todoAccess.deleteUserTodo(todoId, userId)
}

export async function processImage(Key) {  
  await todoAccess.processTodoImage(Key)
}

export async function createTodo(
  todo: TodoItem
): Promise<TodoItem> {
  return await todoAccess.createTodo(todo)
}


export async function updateUserTodo(
  todo: TodoItem
): Promise<string> {
  return await todoAccess.updateUserTodo(todo)
}

export function getUploadUrl(todoId: string): string {

  //Return the pre-signed Upload URL
  return todoAccess.getUploadUrl(todoId)

}