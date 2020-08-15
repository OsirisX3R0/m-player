import { Storage, File } from "megajs"

module.exports = (req, res) => {
    let { downloadId, key } = req.body
    let creds = { email: 'richardharris916@gmail.com', password: 'osiris12' }
    let url = `https://mega.nz/folder/${downloadId}#${key}`
    let files;
    let storage = new Storage(creds, function(err) {
        if (err) throw err
        
        let folder = File.fromURL('https://mega.nz/folder/nolGwSaD#70zjLm3RmgMAlghJ2IkClA')
            .loadAttributes((err, folder) => {
                if (err) throw err

                //console.log(folder)
                res.json(folder)
            })
    })
    //let folder = new File({downloadId, key, directory: true})
    // let files;
    // folder.loadAttributes((err, folder) => {
    //     if (err) throw err

    //     console.log('File name: ' + folder.name)
    //     files = folder
    // })

    res.json({files})
}