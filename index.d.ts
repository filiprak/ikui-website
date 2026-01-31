import '#vue-router';

declare global {
    const __LIB_PACKAGE__: unknown;
    const __PLAYGROUND_URL__: string;
    const __OG_URL__: string;
}

interface RouteMenuMeta {
    type: 'docs' | 'root',
    section?: string,
    subsection?: string,
    icon?: string,
    label: string,
}

declare module 'vue-router' {
    interface RouteMeta {
        menu?: RouteMenuMeta,
        order?: number,
    }
}

declare module '#app' {
    interface PageMeta {
        menu?: RouteMenuMeta,
        order?: number,
    }
}

export { };
