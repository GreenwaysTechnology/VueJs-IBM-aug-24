//upper case plugin

export const myPlugin = {
    install(app, options) {
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase();
        }
    }
}