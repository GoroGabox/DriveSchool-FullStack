export default function OptionSelector({item}) {
  return <option value={item}>{item.name+" "+item.lastname}</option>
}
