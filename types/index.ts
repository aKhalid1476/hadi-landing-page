export interface WaitlistEntry {
  id: string
  email: string
  created_at: string
}

export type WaitlistResponse =
  | { success: true }
  | { error: 'already_registered' | 'invalid_email' | 'server_error'; message?: string }
