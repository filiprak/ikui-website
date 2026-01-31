export function getOgImage(title?: string, desc?: string) {
    const query = {
        title: (title || ''),
        desc: (desc || ''),
    };
    return 'https://og-image.ikui.dev?' + (new URLSearchParams(query).toString());
}
