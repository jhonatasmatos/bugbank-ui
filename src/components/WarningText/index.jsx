
import { WarnigWrapper } from "./styles"

function WarningText({ color, children }){
  return <WarnigWrapper color={color}>{children}</WarnigWrapper>
}

export default WarningText;
