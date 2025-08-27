import {test, expect} from '@playwright/test'
 
test("API Get Request ", async ({ request}) => {
     const response = await request.get('https://reqres.in/api/users')
     expect(response.status()).toBe(200)
 
     const text = await response.text();
     expect(text).toContain('email')
 
     console.log(text)
})
 
 