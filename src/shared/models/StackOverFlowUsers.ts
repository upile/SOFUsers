import { Item } from "./Item"

export interface StackOverFlowUsers {
    items: Item[]
    has_more: boolean
    quota_max: number
    quota_remaining: number
  }