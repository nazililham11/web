const visitors = async () => {
    let url = 'https://api.visitorbadge.io/api/visitors'
    url += '?path=nazililham11.profile'

    let resp = await fetch(url).then(r => r.text())
    let visitor = resp.split('<title>visitors:').pop()
    visitor = visitor.split('</title>').shift()

    return parseInt(visitor)
}

const github_profile = async () => {
    const profile_url = 'https://api.github.com/users/nazililham11'
    return await fetch(profile_url).then(p => p.json())
}

const github_stat_img = () => {
    let url = 'https://github-readme-stats.vercel.app/api'
    url += '?username=nazililham11'
    url += '&show_icons=true'
    url += '&theme=transparent'
    url += '&text_color=f3f4f6'
    url += '&icon_color=0284c7'
    url += '&border_color=0284c7'
    url += '&title_color=0284c7'
    url += '&ring_color=0284c7'
    return url
}

const github_top_lang_img = () => {
    let url = 'https://github-readme-stats.vercel.app/api/top-langs'
    url += '?username=nazililham11'
    url += '&layout=compact'
    url += '&langs_count=10'
    return url
}

const github_repos = async () => {
    const url = 'https://api.github.com/users/nazililham11/repos'
    let repos = await fetch(url).then(r => r.json())
    let language = {}

    repos = repos.map(r => ({
        language: r.language,
        name: r.name,
        id: r.id,
        fork: r.fork,
        html_url: r.html_url,
        description: r.description,
    }))
    repos.forEach(r => {
        const lang = r.language
        if (isNaN(language[lang])) language[lang] = 0
        language[lang] += 1
    })
}

export default { visitors, github_profile, github_stat_img, github_top_lang_img }
