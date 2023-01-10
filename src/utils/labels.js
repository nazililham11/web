import labels from './../data/labels_id.json'

const labels_get = (id) =>{
    if (labels[id] !== undefined)
        return labels[id]
    return '***'
}

const separate_labels = (label) => {
    let separate = label.split('#')
    separate = separate.map((l, i) => 
        ({ label:l, is_highlighted: i % 2 != 0 }))    
    separate = separate.filter(l => l.label !== '')
    return separate
}

const labels_get_separate = (id) => {
    return separate_labels(labels_get(id))
}

const labels_get_removed_highlight = (id) => {
    let label = labels_get(id)
    return label.replace(/#/g, '')
}

export default { 
    labels,
    labels_get, 
    separate_labels, 
    labels_get_separate, 
    labels_get_removed_highlight 
}


