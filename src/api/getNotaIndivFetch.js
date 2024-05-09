export const getNotaIndivFetch = async ({params}) => {
    
    const res = await fetch(`http://localhost:4000/api/v1/nota/${params.id}`);
    const data = await res.json();
    
    return {nota: data}
}