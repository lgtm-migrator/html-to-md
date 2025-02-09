import SelfCloseTag from '../SelfCloseTag'
import { TagOptions } from '../type'

class Br extends SelfCloseTag {
  constructor(str: string, tagName = 'b', options: TagOptions) {
    super(str, tagName, options)
  }

  exec(prevGap: string, endGap = '\n') {
    return '  ' + endGap
  }
}

export default Br
