
export const validateForm = form => {
  for (let field in form) {
    switch(field) {
      case 'email':
        const emailValid = form[field].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            if (emailValid) {
              form.hasErrors = false
              form.formErrors.email = ''
            } else {
              form.hasErrors = true
              form.formErrors.email= 'is invalid'
            }
        break;

      case 'username':
        const usernameValid = form[field].length >= 2;

          if (usernameValid) {
            form.hasErrors = false
            form.formErrors.username = ''
          } else {
            form.hasErrors = true
            form.formErrors.username = 'username is too short'
          }
        break;
      case 'password':
        const passwordValid = form[field].length >= 2;
          if (passwordValid) {
            form.hasErrors = false
            form.formErrors.password = ''
          } else {
            form.hasErrors = true
            form.formErrors.password = ' is too short'
          }
        break;
      default:
        break;
    }
  }
  return form
}


export const createPaginate = (page, [...rows]) => {
  const countItems = 3
  rows.splice(page * countItems, rows.length - page * countItems)
  rows.splice(0, page * countItems - countItems)

  return rows
}
