import './language-bar.styles.scss';

import { useContext } from 'react';
import {AiOutlineGlobal} from 'react-icons/ai'

import { LocaleContext } from '../../contexts/locale.context'; 

const LanguageBar = () =>{
    const {isLanguageBarOpen, setisLanguageBarOpen} = useContext(LocaleContext);
    const toggleBarOpen = () => setisLanguageBarOpen(!isLanguageBarOpen);

    return(
        <div className='language-container' onClick={toggleBarOpen}>
            <AiOutlineGlobal className='language-icon' />
        </div>
    )
};
export default LanguageBar;