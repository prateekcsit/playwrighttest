import {test, expect} from '@playwright/test'
 
test("API Delete Request ", async ({ request}) => {
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/3';
 
const requestBody = {
 
                 title: 'foo5',

                 body: 'bar6',

            };
 
     const response = await request.delete(apiUrl,

        {

         headers: {

         'Content-Type' : 'application/json',


},
 
data:requestBody

});            

      expect(response.status()).toBe(200)

})

 