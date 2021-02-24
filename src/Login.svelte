<script>
    let nid = '';
    let password = '';
  
    async function login() {
        const res = await fetch('http://114.130.54.178/fps/FarmerApi/login.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': '114.130.54.178'
            },
            body: new URLSearchParams({
                farmer_nid: nid,
                password: password,
                device_id: "1a2b"
            })
        });
        
        const json = await res.json();
        result = JSON.stringify(json);
        
        print(result);
        return result;
    };
  </script>
  
  <section>
    <form on:submit|preventDefault={login}>
      <label> NID
        <input bind:value={nid}
               type="number"
               placeholder="" 
               required />
      </label>
      <label>
        Password
        <input  bind:value={password} 
                type="password"
                placeholder=""
                required />
      </label>
      <div class="buttons">
        <button>Login</button>
      </div>
    </form>
  </section>
  
  <style>
    .buttons {
      display: flex;
      justify-content: space-between;
  
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  
    form {
      display: inline-block;
    }
  
    input {
      display: block;
      margin-top: 0.3rem;
    }
  
    label {
      color: white;
      display: block;
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
  </style>