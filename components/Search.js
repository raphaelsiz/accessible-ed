import Link from 'next/link';
export default function Searchbar({props}){
/*  this.state = {
    query: '',
    results: {
    },
    loading: false,
    message: ''
  }*/
  return (
    <div className="container">
      <label className="search-label" htmlFor="search-input">
        <input type="text" value="" id="search-input" placeholder="search"></input>
      </label>
      <style jsx>{`
        div {
          width: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          margin: 0px;
          padding: 0px;
          background: #1887b4;
        }
        ul {
          background: #1887b4;
          list-style: none;
          display: flex;
        }
        ul li {
          color: white;
          margin-right: 30px;
        }
        ul li a {
          color: white;
          text-decoration: none;
        }
      `} </style>
    </div>

  )
}
