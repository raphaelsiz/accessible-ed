import Link from 'next/link';
export default function Searchbar({props}){
  return (
    <div className="container">
      <label className="search-label" htmlFor="search-input">
        <input type="text" id="search-input" placeholder="search"></input>
      </label>
      <style jsx>{`
        .container {
          right: 10px;
          top: 0px;
          margin: 0px;
          padding: 0px;
          background: #1887b4;
        }
      `} </style>
    </div>
  )
}
