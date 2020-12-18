type Plan = 'Basic' | 'Pro' | 'Admin'
export interface User {
  id : number,
  email : string,
  username: string,
  plan: Plan,
  memberDueDate: string,
  createdAt : string
}