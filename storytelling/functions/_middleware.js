// Site-wide password gate, run by Cloudflare Pages on every request.
//
// Visitors must send the correct HTTP Basic-Auth credentials; everyone else
// (search engines, strangers) gets a 401. The password is NOT stored in this
// file — it is read from the `SITE_PASSWORD` environment variable / secret set
// on the Pages project, so nothing secret is ever committed to git.
export async function onRequest(context) {
  const { request, env, next } = context

  const expectedUser = env.SITE_USER || 'mfh'
  const expectedPassword = env.SITE_PASSWORD

  // Fail open if no password is configured, so a misconfiguration never locks
  // the site out completely. In practice SITE_PASSWORD is always set.
  if (!expectedPassword) {
    return next()
  }

  const authorization = request.headers.get('Authorization') || ''
  if (authorization.startsWith('Basic ')) {
    const decoded = atob(authorization.slice('Basic '.length))
    const separator = decoded.indexOf(':')
    const user = decoded.slice(0, separator)
    const password = decoded.slice(separator + 1)
    if (user === expectedUser && password === expectedPassword) {
      return next()
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="MFH Wirkketten", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
