import { useState } from "react"

const CampSites = ({campProps}) => {
  const [currentSite, setCurrentSite] = useState([])

  const campList = campProps.data.map((site, i) => {
    return (
      <option value={site.name} key={i}>{site.name}</option>
    )
  })

  const handleChange = (name) => {
    let campIndex = campProps.data.indexOf(campProps.data.find(site => site.name === name))
    setCurrentSite(campProps.data[campIndex])
  }

  return (
    <div>
      {currentSite.images != null && <img src={currentSite.images[0].url} className="camp-image"/>}
      <select className="camp-list" onChange={e => handleChange(e.target.value)}>
        {campList}
      </select>
    </div>
  )
}

export default CampSites