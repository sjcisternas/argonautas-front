export const getNotaIndivFetch = async ({params}) => {
    
    const res = await fetch(`https://intuitive-adventure-production.up.railway.app/api/v1/nota/${params.id}`);
    const data = await res.json();
    
    return {nota: data}
}