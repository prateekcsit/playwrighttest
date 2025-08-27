import {test, expect} from '@playwright/test'
 
test("API Put Request ", async ({ request}) => {
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/3';
 
const requestBody = {
 
                 title: 'foo5',

                 body: 'bar6',

            };
 
     const response = await request.put(apiUrl,

        {

         headers: {

         'Content-Type' : 'application/json',

},
 
data:requestBody

});            

      expect(response.status()).toBe(200)

     const text = await response.text();

     expect(text).toContain('foo5')

     console.log(text)

})