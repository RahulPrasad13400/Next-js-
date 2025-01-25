export default function Post({item}) {
  return (
    <li className="post">
      <p>{item.author}</p>
      <p>{item.text}</p>
    </li>   
  ) 
}
