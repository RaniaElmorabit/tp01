import logo from './logo.svg';
import styles from '../style.mod.css'; 
export default function Header (){
    return (
        <div>
            <img src={logo} alt="hello"/>;
            <h2>Welcome Home !</h2>;
        </div>
    )
}
