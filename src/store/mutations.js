export const mutations = {
  changeToken (state, user) {
    state.token = user.token
    window.sessionStorage.setItem('token', user.token)
  }
}
