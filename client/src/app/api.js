
export const loginUser = user => {
  const init = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify({ user })
    }

  fetch('login/', init).then(res => res.json())
  }

export const getData = () =>
  fetch('coins/').then(res =>  res.json())
