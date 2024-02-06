
export const vFocus = {
  mounted: (el: HTMLInputElement, binding: any) => {
   return el.focus()
  }
}

export const vColor = {
  mounted: (el: HTMLParagraphElement, binding: any) => {
    el.style.color = binding.value
  }
}