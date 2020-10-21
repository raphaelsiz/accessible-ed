import Link from 'next/link';
export default function CourseNav(){
  return(
    <div>
    <div className="main">
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/courses"><a>Courses</a></Link></li>
        <li><Search/></li>
      </ul>
      <style jsx>{`
        div.main {
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
    <div className="course">
      <ul>
        <li>Testing 1</li>
        <li>Testing 2</li>
      </ul>
      <style jsx>{`
        div.course {
          width: 100%;
          position: static;
          top: 60px
          left: 0px;
          margin: 0px;
          padding: 0px;
          background: #111111;
        }
        ul {
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
      `}</style>
    </div>
    </div>
  )
};
