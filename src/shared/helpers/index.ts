
export async function delay() {
  return await new Promise((res) => {
    setTimeout(() => {
      res('ok')
    },1000)
  })
}