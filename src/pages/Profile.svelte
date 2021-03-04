<script>
    import { token, farmer_id } from '../store';
    import { get } from "svelte/store";

    const fid = get(farmer_id);
    const t = get(token);

    const fetchProfile = (async () => {
		const response = await fetch('http://114.130.116.3/fps/FarmerApi/farmerProfile.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Host': '114.130.54.178'
            },
            body: new URLSearchParams({
                farmer_id: fid,
                token: t,
            })
        })
        return await response.json()
	})()
</script>

 {#await fetchProfile}
 	<p>...waiting</p>
 {:then data}
     <h1>{data.result.farmer_nid}</h1>
 {:catch error}
 	<p>An error occurred!</p>
 {/await}


<h1>{$token}</h1>
