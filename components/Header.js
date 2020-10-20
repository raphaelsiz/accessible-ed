export default function Header({ title }) {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Collections</li>
      </ul>
      <style jsx>{`
        div {
          width: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          margin: 0px;
          padding: 0px;
        }
        ul {
          background: #1887b4;
          list-style: none;
          display: flex;
        }
      `} </style>
    </div>

  )
}
