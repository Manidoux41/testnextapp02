export default async function getAllApparts() {

    const res = await fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
    // https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json
    if(!res.ok) throw new Error('Failed to fetch data')

    return res.json()
}