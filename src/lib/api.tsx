export const Api = {
  get: async (url: string) => {
    const response = await fetch(url)
    return response.json()
  },
}
