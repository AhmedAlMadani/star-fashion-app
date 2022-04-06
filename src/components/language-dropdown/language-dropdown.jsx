import './language-dropdown.styles.scss';
import { useContext } from 'react';
import { LocaleContext } from '../../contexts/locale.context';
import {useTranslation} from 'react-i18next';
const LanguageDropdown = () => {
    const {isLanguageBarOpen, setisLanguageBarOpen} = useContext(LocaleContext);
    const {i18n} = useTranslation;
    
    const handleChangeLanguage = (language) =>{
        i18n.changeLanguage(language);
    }
    const handleChangeLanguageToEnglish = () =>{
        handleChangeLanguage("en");
    }
    const handleChangeLanguageToSpanish = () =>{
        handleChangeLanguage("es");
    }
    const handleBarOpen = () => {
        setisLanguageBarOpen(!isLanguageBarOpen);
    }
    return(
        <div className='language-dropdown-container'>
            <div className='language-item-container' onClick={handleBarOpen}>
                <div className='options' onClick={handleChangeLanguageToEnglish}> EN </div>
                <div className='options' onClick={handleChangeLanguageToSpanish}> ES </div>
            </div>
        </div>
    )
}
export default LanguageDropdown;