const TokenKey = 'Access-Token'

export function getToken(): string | null {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: string): void {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken(): void {
  return localStorage.removeItem(TokenKey)
}
