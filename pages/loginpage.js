class LoginPage 

{
 
    constructor(page)

    {

        this.page = page

        this.username = "//input[@id='email1']"

        this.password = "//input[@id='password1']"

        this.loginbutton = "//*[@id='login_container']/form/div/button"

    }
 
    async LoginToApplication()

    {

        await this.page.fill(this.username,"admin@email.com")

        await this.page.fill(this.password,"admin")

        await this.page.click(this.loginbutton)

    }

}
 
module.exports = LoginPage