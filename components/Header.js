import Link from 'next/link';
export default function Header({ title }) {
  return (
    <div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li>About</li>
        <li>Courses</li>
      </ul>
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
