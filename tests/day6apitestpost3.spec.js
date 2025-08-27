import {test, expect} from '@playwright/test' 
test("API Post Request ", async ({ request}) => {
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
 
const requestBody = {
 
                 title: 'foo2',
    body: 'bar2',
    userId: 3,
            };
 
     const response = await request.post(apiUrl,
        {
         headers: {
         'Content-Type' : 'application/json',        
},
 
data:requestBody
});            
      expect(response.status()).toBe(201)
     const text = await response.text();
     expect(text).toContain('foo2')
     console.log(text)
})
 