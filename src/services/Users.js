
export default {
    get() {
        return {
            getAll: () =>fetch('http://localhost:8000/all-users', {
			method: "GET",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'Cache': 'no-cache'
			},
			credentials: 'same-origin'
          }),
          getAllRecords: () =>fetch('http://localhost:8000/all-records', {
			method: "GET",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'Cache': 'no-cache'
			},
			credentials: 'same-origin'
          }),
          checkLogin: (creds) => fetch('http://localhost:8000/user', {
            method: 'POST',
            
            body: JSON.stringify(creds),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          })
          //console.log(creds.username)
          
        }
      }
    }