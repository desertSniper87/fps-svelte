<script>
    let nid = '';
    let password = '';
  
    const login = () => {
    };
    const signup = () => alert('You pressed Signup.');
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
        <button type="button" on:click={signup}>Sign Up</button>
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