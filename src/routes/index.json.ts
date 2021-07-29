import { getDatabase } from '$lib/notion'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const result = await getDatabase()
    return {
        body: {
            result
        }
    }
}
