import Link from 'next/link';
export default function CourseNav(){
  return(
    <div>
      <ul>
        <li>Testing 1</li>
        <li>Testing 2</li>
      </ul>
      <style jsx>{`
        div {
          width: 100%;
          position: absolute;
          top: 0px;
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
  )
};
