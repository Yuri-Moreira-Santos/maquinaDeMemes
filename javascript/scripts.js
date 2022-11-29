async function mapImageList(){
    const memesObject = [
        {"name": "chapolin",
        "path": "pictures/chapolin.jpg"},

        {"name": "chloe",
        "path": "pictures/chloe.jpg"},

        {"name": "funny-cat1",
        "path": "pictures/funny-cat1.jpg"},

        {"name": "funny-cat2",
        "path": "pictures/funny-cat2.jpg"},
    ]

    return memesObject

}

async function createGallery(imageList){
    const memesSelector = document.querySelector("#memesList")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memesSelector.appendChild(newOption)
    });

}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#displayImage")
    displayImage.style.backgroundImage = `url("${photo}")`
    
}

async function main(){
    const memesImageList = await mapImageList()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)

}

main()