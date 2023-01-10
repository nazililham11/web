const year_diff_from_now = (date) => {
    const now = Date.now()
    const from = new Date(date)
    const ms = now - from
    return parseInt(ms / 1000 / 60 / 60 / 24 / 30 / 12)
}

const repo_name = (url) => {
    return (url+'').split('/').pop()
}

const filter_by_tags = tags => {
    return p => {
        if (!Array.isArray(p.tags)) return false
        for (const t of p.tags)
            if (tags.indexOf(t) > -1) return true
        return false
    }
}

const filter_by_years = years => {
    return p => (years.indexOf(p.year + '') > -1)
}

export default {
    year_diff_from_now,
    repo_name,
    filter_by_tags,
    filter_by_years
}