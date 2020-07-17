import en from './en.json'
import tw from './tw.json'
import jp from './jp.json'
import * as flatten from 'flat'

export default {
  en: flatten(en),
  tw: flatten(tw),
  jp: flatten(jp),
}
