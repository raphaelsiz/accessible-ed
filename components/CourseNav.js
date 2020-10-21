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
          position: relative;
          left: 0px;
          top: 0px;
          margin: 0px;
          padding: 0px;
          background: #188888;
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
      `}</style>
    </div>
  )
};
