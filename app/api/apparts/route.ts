import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const appart: Appart[] = await res.json()

    return NextResponse.json(appart)
}

