export default async function getAppart(appartId: string) {

    const res = await fetch(`http://localhost:3000/api/apparts/${appartId}`)

    if(!res.ok) throw new Error('failed to fetch data')

    return res.json()
}