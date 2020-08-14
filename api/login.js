import { Storage, File } from "megajs"
const fs = require('fs')
module.exports = (req, res) => {
    let folder = File.fromURL('https://mega.nz/folder/nolGwSaD#70zjLm3RmgMAlghJ2IkClA')
    let files;
    folder.loadAttributes((err, folder) => {
        if (err) throw err

        files = folder.children
    })

    res.json(files)
}