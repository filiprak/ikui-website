export function getOgImage(title?: string, desc?: string) {
    const query = {
        title: (title || ''),
        desc: (desc || ''),
    };
    return __OG_URL__ + '?' + (new URLSearchParams(query).toString());
}
