interface Presentable {
    description?: string,
    formattedName?: string,
    order?: number,
}

interface Metadata extends Presentable {
    mostRecentPublish: string,
    musicalIdeaIllustrated: string,
    originalPublish: string,
    version: string,
}

export {
    Presentable,
    Metadata,
}
