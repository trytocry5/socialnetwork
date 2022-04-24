import f from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg'

let Preloader = (props) => {
    return (
        <div className={f.preloader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;