// Data-access layer for the hand-authored chain JSON files in public/chains/.
//
// Carl-Martin edits those JSON files; the app only reads them. Keeping all
// fetching in this one module isolates the UI from the storage format — if the
// chains ever move to an API or a CMS, only this file changes.

// import.meta.env.BASE_URL respects a deployed sub-path (e.g. GitHub Pages) and
// always ends with a slash, so the chain files resolve correctly in dev and in
// a production build.
const CHAINS_BASE = `${import.meta.env.BASE_URL}chains/`

async function getJson(fileName) {
  const response = await fetch(`${CHAINS_BASE}${fileName}`)
  if (!response.ok) {
    throw new Error(`${fileName} (HTTP ${response.status})`)
  }
  return response.json()
}

// Returns the list of available chains: [{ id, title, file }, ...].
export async function fetchManifest() {
  const manifest = await getJson('index.json')
  return manifest.chains ?? []
}

// Returns one full chain: { meta, nodes, edges }.
export async function fetchChain(fileName) {
  return getJson(fileName)
}
