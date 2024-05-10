export const colabFetch = async (form) => {
    try{
        const url = 'https://intuitive-adventure-production.up.railway.app/api/v1/auth/subscription';

        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }

        const res = await fetch(url, params);
        const data = await res.json();
        if (res.status !== 200) {
            throw data;
        } else {
            return data;
        }
    }catch(err){
        throw err;
    }
}