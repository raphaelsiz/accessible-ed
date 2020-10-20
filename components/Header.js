import styles from './Header.modules.css';
export default function Header({ title }) {
  return (
    <div class="header">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Collections</li>
      </ul>
    </div>
  )
}
