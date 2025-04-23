import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'This endpoint is used to check online status for the PWA'
  })
}