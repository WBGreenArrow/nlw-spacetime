import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerReponse = await api.post('/register', {
    code,
  })

  const { token } = registerReponse.data

  const redirectURL = new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 4

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}