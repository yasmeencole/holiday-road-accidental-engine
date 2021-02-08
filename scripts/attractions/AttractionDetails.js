import { useAttractions } from "./AttractionProvider.js"

const contentContainer = document.querySelector(".previews")

export const render = (bizarraries) => {

    const bizarrariesHTML = `
    <h2>Bizarre Details for ${bizarraries.name}</h2>

    <section class="bizarre__containter">
    <div class="bizarre__name">Name: ${bizarraries.name}</div>
    <div class="bizarre__description">Details ${bizarraries.description}</div>
    </section>`
    
    contentContainer.innerHTML = bizarrariesHTML
}

const eventHub = document.querySelector(".mainContainer")
eventHub.addEventListener("bizarreDetailsClicked", clickEvent => {
    // console.log("event", clickEvent)
    const attractionId = clickEvent.detail.attractionId
    const bizarreArray = useAttractions()
    
    const selectedBizarre = bizarreArray.find((bizarraries) => bizarraries.id === parseInt(attractionId))
    // // console.log('selectedBizarre: ', selectedBizarre)
    render(selectedBizarre)
    
    // testing code
    // const attractionId = "5"
    // getAttractions()
    // .then(responseArray => {
    //     const bizarreArray = useAttractions()
    //     const selectedBizarre = bizarreArray.find((bizarraries) => bizarraries.id === parseInt(attractionId))
    //     render(selectedBizarre)
    //     console.log(selectedBizarre)



    // })
}
)