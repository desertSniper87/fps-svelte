<script>
    import {token} from "./store";

    // let nid = '1100000000001';
    // let password = '1';
    let nid = '';
    let password = 'Password123!';
    let device_id = "92f2721d9b75c28f";


    async function login() {
        // const res = await fetch('http://114.130.54.178/fps2/FarmerApi/login.json', {
        const res = await fetch('http://114.130.116.3/fps/FarmerApi/login.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Host': '114.130.54.178'
            },
            body: new URLSearchParams({
                farmer_nid: nid,
                password: password,
                device_id: device_id
            })
        });
        
        const json = await res.json();
        console.log(json);

        token.update(val => {val = json.result.str})

        token.subscribe(val => {
            localStorage.setItem("token", val)
        });
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