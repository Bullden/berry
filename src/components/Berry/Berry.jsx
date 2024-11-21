import { useEffect, useState } from 'react'
import { berryApi } from '../../services/api'
import { StyledBerry, StyledImg, StyledName, StyledTag, StyledWrapImg, StyledWrapInfo, StyledWrapTags } from './styled'

const Berry = ({ name, filterName }) => {
  const [berry, setBerry] = useState(null)
  const fetch = async () => {
    const result = await berryApi.getBerry(name)
    setBerry(result)
  }

  useEffect(() => {
    fetch()
  }, [name])

  if (berry && filterName && berry.firmness.name !== filterName) {
    return <></>
  }

  return (
    <StyledBerry>
      <StyledWrapInfo>
        <StyledWrapImg>
          <StyledImg src='https://logowik.com/content/uploads/images/346_raspberry_pi_logo.jpg' />
        </StyledWrapImg>
        <StyledName>{name}</StyledName>
      </StyledWrapInfo>
      <StyledWrapTags>
        {berry && berry.flavors.map(flavor => (flavor.potency ? <StyledTag key={flavor.name}>{flavor.flavor.name}</StyledTag> : null))}
      </StyledWrapTags>
    </StyledBerry>
  )
}

export default Berry
