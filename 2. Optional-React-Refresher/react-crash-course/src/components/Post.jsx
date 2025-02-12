export default function Post({item}) {
  
  return (
   <li className="post">
      <p>{item.auth}</p>
      <p>{item.textEntered}</p>
    </li> 
  ) 
}
