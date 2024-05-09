export const getNotasFetch = async () => {
    try{
        //api
        const url = 'http://localhost:4000/api/v1/notas';

        //rta y parseo
        const res = await fetch(url);
        const data = await res.json();

        if(res.status !== 200){
            throw res;
        } else {
            return data;
        }
    } catch (err) {
        throw err;
    }
}