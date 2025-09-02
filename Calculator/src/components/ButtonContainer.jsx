import { Button } from "bootstrap";
import styles from "./ButtonContainer.module.css"

function ButtonContainer () {
    let ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return (
        <div className={styles.ButtonContainers}>
            {ButtonNames.map((Buttonname) => (<button key={Buttonname} className={styles.button}>{Buttonname}</button>))}
        </div>
    );


};
export default ButtonContainer;